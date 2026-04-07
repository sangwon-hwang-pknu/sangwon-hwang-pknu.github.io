(function () {
  const currentScript = document.currentScript;
  const searchModuleSrc = currentScript ? currentScript.dataset.searchModule : "";
  const searchSetupSrc = currentScript ? currentScript.dataset.searchSetup : "";
  const searchDataSrc = currentScript ? currentScript.dataset.searchData : "";
  let searchReadyPromise = null;

  function ensureSearchElement() {
    let ninjaKeys = document.querySelector("ninja-keys");

    if (!ninjaKeys) {
      ninjaKeys = document.createElement("ninja-keys");
      ninjaKeys.setAttribute("hideBreadcrumbs", "");
      ninjaKeys.setAttribute("noAutoLoadMdIcons", "");
      ninjaKeys.setAttribute("placeholder", "Type to start searching");
      document.body.appendChild(ninjaKeys);
    }

    return ninjaKeys;
  }

  function loadScript(src, options = {}) {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[src="' + src + '"]');
      if (existingScript) {
        if (existingScript.dataset.loaded === "true") {
          resolve();
          return;
        }

        existingScript.addEventListener("load", resolve, { once: true });
        existingScript.addEventListener("error", () => reject(new Error("Failed to load " + src)), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;

      if (options.module) {
        script.type = "module";
      } else {
        script.defer = true;
      }

      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          resolve();
        },
        { once: true }
      );
      script.addEventListener("error", () => reject(new Error("Failed to load " + src)), { once: true });
      document.body.appendChild(script);
    });
  }

  async function ensureSearchReady() {
    if (!searchReadyPromise) {
      searchReadyPromise = (async () => {
        const ninjaKeys = ensureSearchElement();

        await loadScript(searchModuleSrc, { module: true });
        await customElements.whenDefined("ninja-keys");
        await loadScript(searchSetupSrc);
        await loadScript(searchDataSrc);

        if (typeof window.initializeSearchTheme === "function") {
          window.initializeSearchTheme();
        }

        return ninjaKeys;
      })();
    }

    return searchReadyPromise;
  }

  async function openSearchModal() {
    const ninjaKeys = await ensureSearchReady();

    const $navbarNav = $("#navbarNav");
    if ($navbarNav.hasClass("show")) {
      $navbarNav.collapse("hide");
    }

    ninjaKeys.open();
  }

  function updateShortcutLabel() {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const shortcutKeyElement = document.querySelector("#search-toggle .nav-link");

    if (shortcutKeyElement && isMac) {
      shortcutKeyElement.innerHTML = '&#x2318; k <i class="ti ti-search"></i>';
    }
  }

  document.addEventListener("DOMContentLoaded", updateShortcutLabel);
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearchModal();
    }
  });

  window.openSearchModal = openSearchModal;
})();
