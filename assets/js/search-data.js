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
          description: "members of our laboratory by categories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-openings",
          title: "openings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openings/";
          },
        },{id: "members-byungju-lim",
          title: 'Byungju Lim',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/1-byungju-lim.html";
            },},{id: "members-sangwon-hwang",
          title: 'Sangwon Hwang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/1-sangwon-hwang.html";
            },},{id: "members-euntae-seo",
          title: 'Euntae Seo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/10-euntae-seo.html";
            },},{id: "members-hyein-seok",
          title: 'Hyein Seok',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/11-hyein-seok.html";
            },},{id: "members-yurim-jeong",
          title: 'Yurim Jeong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/12-yurim-jeong.html";
            },},{id: "members-yujin-park",
          title: 'Yujin Park',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/13-yujin-park.html";
            },},{id: "members-bokyeong-pyeon",
          title: 'Bokyeong Pyeon',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/14-bokyeong-pyeon.html";
            },},{id: "members-hoon-lee",
          title: 'Hoon Lee',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/2-hoon-lee.html";
            },},{id: "members-jihwan-moon",
          title: 'Jihwan Moon',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/3-jihwan-moon.html";
            },},{id: "members-seunghyeon-shin",
          title: 'Seunghyeon Shin',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/4-seunghyeon-shin.html";
            },},{id: "members-sangmin-kim",
          title: 'Sangmin Kim',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/5-sangmin-kim.html";
            },},{id: "members-mintae-kim",
          title: 'Mintae Kim',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/6-mintae-kim.html";
            },},{id: "members-jaehoon-jung",
          title: 'Jaehoon jung',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/7-jaehoon-jung.html";
            },},{id: "members-zhilin-fu",
          title: 'Zhilin Fu',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/8-zhilin-fu.html";
            },},{id: "members-jeongwon-kim",
          title: 'Jeongwon Kim',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/9-jeongwon-kim.html";
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
            },},{id: "research-convex-optimization",
          title: 'Convex Optimization',
          description: "Convex optimization is a subfield of optimization focusing on minimizing convex functions over convex sets.",
          section: "Research",handler: () => {
              window.location.href = "/research/10_research.html";
            },},{id: "research-satellite-communication",
          title: 'Satellite Communication',
          description: "Satellite communication systems are key technologies for global connectivity, enabling data transmission over far distances.",
          section: "Research",handler: () => {
              window.location.href = "/research/11_research.html";
            },},{id: "research-drone-communication-networks",
          title: 'Drone Communication Networks',
          description: "Drone communication networks provide advanced wireless connectivity for aerial platforms by integrating drones as both mobile network providers and service terminals.",
          section: "Research",handler: () => {
              window.location.href = "/research/12_research.html";
            },},{id: "research-physical-layer-security",
          title: 'Physical Layer Security',
          description: "Physical Layer Security provides an information-theoretic approach to securing wireless communication by exploiting the physical characteristics of the wireless channel.",
          section: "Research",handler: () => {
              window.location.href = "/research/13_research.html";
            },},{id: "research-offline-reinforcement-learning",
          title: 'Offline Reinforcement Learning',
          description: "Offline reinforcement learning enables agents to learn optimal policies from fixed, pre-collected datasets without further interaction with the environment.",
          section: "Research",handler: () => {
              window.location.href = "/research/14_research.html";
            },},{id: "research-next-generation-communication-network",
          title: 'Next-generation Communication Network',
          description: "Exploring the evolution toward 6G networks, focusing on extreme connectivity, AI-native air interfaces, and integrated non-terrestrial networks.",
          section: "Research",handler: () => {
              window.location.href = "/research/1_research.html";
            },},{id: "research-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "Artificial intelligence (AI) is the core technology for developing intelligent algorithms and systems that solve complex optimization and decision-making problems.",
          section: "Research",handler: () => {
              window.location.href = "/research/2_research.html";
            },},{id: "research-deep-learning",
          title: 'Deep Learning',
          description: "Deep learning is a subset of machine learning based on artificial neural networks with multiple layers to extract higher-level features from data.",
          section: "Research",handler: () => {
              window.location.href = "/research/3_research.html";
            },},{id: "research-deep-reinforcement-learning",
          title: 'Deep Reinforcement Learning',
          description: "Deep reinforcement learning (DRL) combines deep learning and reinforcement learning principles to enable agents to learn optimal actions in complex, dynamic environments.",
          section: "Research",handler: () => {
              window.location.href = "/research/4_research.html";
            },},{id: "research-multi-agent-system",
          title: 'Multi-Agent System',
          description: "Multi-agent systems (MAS) study the collective behavior and coordination of multiple autonomous agents in decentralized and dynamic environments.",
          section: "Research",handler: () => {
              window.location.href = "/research/5_research.html";
            },},{id: "research-mobile-edge-computing",
          title: 'Mobile Edge Computing',
          description: "Mobile Edge Computing effectively brings computation and storage capabilities closer to the end user, which significantly reduces latency and enhances performance.",
          section: "Research",handler: () => {
              window.location.href = "/research/6_research.html";
            },},{id: "research-integrated-sensing-and-communication",
          title: 'Integrated Sensing and Communication',
          description: "Integrated Sensing and Communication is a key technology for 6G networks, which merges sensing and communication functionalities in a single system.",
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
            },},{id: "research-template",
          title: 'Template',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/template.html";
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
