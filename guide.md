# Site Guide

This document summarizes the core structure and execution flow of this repository.

## 1. What This Site Is

This site is a Jekyll-based static website.

- Jekyll reads configuration and content files at build time.
- Liquid templates assemble the final HTML pages.
- Browser-side JavaScript adds interactive behavior after the page is loaded.

This is not a full server-rendered web app. Most of the complexity comes from template composition and content collections.

## 2. Core Structure

The repository is organized into a few main layers.

### Configuration

- `_config.yml`
  - Global site settings
  - Feature flags
  - Collection definitions
  - Plugin configuration

- `Gemfile`
  - Jekyll and plugin dependencies used during site build

### Layouts

- `_layouts/default.liquid`
  - Main page shell used by most pages
  - Assembles head, header, content, footer, and scripts

- `_layouts/about.liquid`
  - Home page layout

- `_layouts/page.liquid`
  - Generic inner page layout

- Other files in `_layouts/`
  - Specialized layouts for posts, distill pages, profiles, bibliography, and so on

### Includes

Reusable template fragments live in `_includes/`.

Important ones:

- `_includes/head.liquid`
  - CSS, metadata, fonts, theme script

- `_includes/header.liquid`
  - Top navigation bar

- `_includes/footer.liquid`
  - Footer content

- `_includes/scripts.liquid`
  - Shared JavaScript loaded near the end of the page

- `_includes/research.liquid`
  - One research card

- `_includes/members.liquid`
  - One member card

### Content

- `_pages/`
  - Top-level pages such as home, research, and members

- `_research/`
  - Research collection entries

- `_members/`
  - Member collection entries

- `_news/`, posts, and other collections
  - Additional content types rendered by Jekyll

### Assets

- `assets/css/`
  - Site styles

- `assets/js/`
  - Frontend behavior

- `assets/img/`
  - Images and thumbnails

### Build Extensions

- `_plugins/`
  - Custom Ruby plugins used during build

## 3. Main Build Flow

When Jekyll builds the site, the flow is roughly:

1. Read `_config.yml`
2. Load plugins from `Gemfile` and `_plugins/`
3. Read pages and collections such as `_pages/`, `_research/`, `_members/`
4. Apply each page's `layout`
5. Expand Liquid tags, loops, and includes
6. Generate final static HTML, CSS, JS assets

## 4. Main Runtime Flow In The Browser

After the generated HTML is served, the browser flow is roughly:

1. Load HTML produced by Jekyll
2. Load CSS and head scripts from `_includes/head.liquid`
3. Render the header, page body, and footer
4. Load shared JavaScript from `_includes/scripts.liquid`
5. Run optional frontend features such as theme switching, search, tooltips, charts, and page-specific widgets

## 5. Default Page Composition

Most pages ultimately pass through `_layouts/default.liquid`.

Its structure is:

1. `<head>`
   - `_includes/head.liquid`
2. `<body>`
   - `_includes/header.liquid`
   - `{{ content }}`
   - `_includes/footer.liquid`
   - `_includes/scripts.liquid`

That means most page-level changes fall into one of these buckets:

- content change
- layout change
- include change
- asset change

## 6. Home Page Flow

The home page is driven by:

- `_pages/about.md`
- `_layouts/about.liquid`

Flow:

1. `_pages/about.md` declares front matter such as `layout: about`
2. Jekyll loads `_layouts/about.liquid`
3. `_layouts/about.liquid` renders the home page profile area and page body
4. Optional sections such as news, publications, and social links are inserted depending on front matter
5. The whole result is wrapped by `_layouts/default.liquid`

## 7. Research Page Flow

The research page is driven by:

- `_pages/research.md`
- `_research/*`
- `_includes/research.liquid`

Flow:

1. `_pages/research.md` uses `layout: page`
2. It loops through `site.research`
3. Entries are optionally grouped by category
4. Each item is rendered through `_includes/research.liquid`
5. The page is then wrapped by the default layout shell

In practice, adding a new research card usually means editing or creating one file in `_research/`.

## 8. Members Page Flow

The members page is driven by:

- `_pages/members.md`
- `_members/*`
- `_includes/members.liquid`

Flow:

1. `_pages/members.md` uses `layout: page`
2. It loops through `site.members`
3. Entries are optionally grouped by category
4. Each item is rendered through `_includes/members.liquid`
5. The page is wrapped by the default layout shell

In practice, adding a new member usually means editing or creating one file in `_members/`.

## 9. Search Flow

Search is intentionally lazy-loaded.

Relevant files:

- `_includes/scripts.liquid`
- `_includes/distill_scripts.liquid`
- `assets/js/search-loader.js`
- `assets/js/search-setup.js`
- `assets/js/search-data.js`
- `assets/js/search/ninja-keys.min.js`

Flow:

1. The page loads `search-loader.js`
2. Search assets are not fully loaded immediately
3. The user presses `Ctrl + K`, `Cmd + K`, or clicks the search button
4. `search-loader.js` creates the `<ninja-keys>` element if needed
5. It loads `ninja-keys.min.js`
6. It loads `search-setup.js`
7. It loads `search-data.js`
8. It applies the search theme
9. It opens the search modal

Purpose:

- reduce initial page load work
- load search only when it is actually used

## 10. How To Think About Changes

If you want to change something, start by identifying which layer owns it.

### If you want to change global behavior

Check:

- `_config.yml`
- `_layouts/default.liquid`
- `_includes/head.liquid`
- `_includes/header.liquid`
- `_includes/footer.liquid`
- `_includes/scripts.liquid`

### If you want to change one page's structure

Check:

- the page file in `_pages/`
- the layout named in that page's front matter

### If you want to change repeated cards or blocks

Check:

- files in `_includes/`

### If you want to change site data shown in lists

Check:

- collection entries such as `_research/` or `_members/`

### If you want to change interactions

Check:

- `assets/js/`

## 11. Practical Mental Model

The simplest way to think about this repository is:

`_config.yml` sets the rules  
`_pages/` and collections provide the content  
`_layouts/` define page skeletons  
`_includes/` define reusable blocks  
`assets/js/` and `assets/css/` handle frontend behavior and appearance

If something feels hard to trace, the fastest path is usually:

1. find the page file
2. check its `layout`
3. inspect the included partials
4. inspect the related JS or CSS asset if behavior is dynamic
