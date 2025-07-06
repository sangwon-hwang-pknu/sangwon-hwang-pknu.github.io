// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-professor",
          title: "professor",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/professor/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "explore detailed research items grouped by category, each shown in a descriptive card format.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-members",
          title: "members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "members-mintae-kim",
          title: 'Mintae Kim',
          description: "Senior Researcher, System LSI Business, Samsung ElectronicsPh.D. Electrical and Computing Engineeringwkd2749@korea.ac.kr",
          section: "Members",handler: () => {
              window.location.href = "/members/mintae-kim.html";
            },},{id: "members-sangmin-kim",
          title: 'Sangmin Kim',
          description: "Ph.D. Candidate, AI and Intelligent Communication Lab, Korea UniversityB.S. Electrical Engineeringsmgeem@korea.ac.kr",
          section: "Members",handler: () => {
              window.location.href = "/members/sangmin-kim.html";
            },},{id: "members-sangwon-hwang",
          title: 'Sangwon Hwang',
          description: "Assistant Professor, Division of Computer and AI Engineering, Pukyong National UniversityPh.D. Electrical and Computing Engineerings.won.hwang@pknu.ac.kr",
          section: "Members",handler: () => {
              window.location.href = "/members/sangwon-hwang.html";
            },},{id: "members-seunghyeon-shin",
          title: 'Seunghyeon Shin',
          description: "Research Engineer, Electronic Network Validation Team, Hyundai Motor CompanyM.S. Electrical and Computing Engineeringshin.sh@hyundai.com",
          section: "Members",handler: () => {
              window.location.href = "/members/seunghyeon-shin.html";
            },},{id: "news-sangwon-hwang-appointed-as-assistant-professor-at-pknu",
          title: 'Sangwon Hwang Appointed as Assistant Professor at PKNU',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1.html";
            },},{id: "news-aidan-website-launched",
          title: 'AIDAN Website Launched',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-aidan-website-launched",
          title: 'AIDAN Website Launched',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "research-next-generation-communication-network",
          title: 'Next-generation Communication Network',
          description: "next-generation communication system description",
          section: "Research",handler: () => {
              window.location.href = "/research/1_research.html";
            },},{id: "research-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "artificial intelligence description",
          section: "Research",handler: () => {
              window.location.href = "/research/2_research.html";
            },},{id: "research-deep-learning",
          title: 'Deep Learning',
          description: "deep learning description",
          section: "Research",handler: () => {
              window.location.href = "/research/3_research.html";
            },},{id: "research-deep-reinforcement-learning",
          title: 'Deep Reinforcement Learning',
          description: "deep reinforcement learning description",
          section: "Research",handler: () => {
              window.location.href = "/research/4_research.html";
            },},{id: "research-multi-agent-system",
          title: 'Multi-Agent System',
          description: "multi-agent system description",
          section: "Research",handler: () => {
              window.location.href = "/research/5_research.html";
            },},{id: "research-mobile-edge-computing",
          title: 'Mobile Edge Computing',
          description: "mobile edge computing description",
          section: "Research",handler: () => {
              window.location.href = "/research/6_research.html";
            },},{id: "research-integrated-sensing-and-communication",
          title: 'Integrated Sensing and Communication',
          description: "integrated sensing and communication description",
          section: "Research",handler: () => {
              window.location.href = "/research/7_research.html";
            },},{id: "research-single-agent-deep-reinforcement-learning",
          title: 'Single-Agent Deep Reinforcement Learning',
          description: "To optimize key factors of communication systems in centralized manner, we propose single-agent deep reinforcement learning framework.",
          section: "Research",handler: () => {
              window.location.href = "/research/8_research.html";
            },},{id: "research-multi-agent-deep-reinforcement-learning",
          title: 'Multi-Agent Deep Reinforcement Learning',
          description: "To optimize key factors of communication systems in decentralized manner, we propose multi-agent deep reinforcement learning framework.",
          section: "Research",handler: () => {
              window.location.href = "/research/9_research.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73.%77%6F%6E.%68%77%61%6E%67@%70%6B%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=KxP9HB0AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sangwon-hwang-pknu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sangwon-hwang", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'Cv',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
