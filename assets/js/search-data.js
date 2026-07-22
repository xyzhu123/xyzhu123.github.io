// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-i-received-the-provost-s-undergrad-research-fellowship-at-usc",
          title: 'I received the Provost’s Undergrad Research Fellowship at USC.',
          description: "",
          section: "News",},{id: "news-our-new-version-of-analysis360-is-released",
          title: 'Our new version of 🦙 Analysis360 is released.',
          description: "",
          section: "News",},{id: "news-our-preprint-on-auditing-llm-apis-is-now-available-on-arxiv",
          title: 'Our preprint on  🔍 Auditing LLM APIs is now available on arXiv',
          description: "",
          section: "News",},{id: "news-our-paper-on-llm-unlearning-has-been-accepted-to-colm-2025",
          title: 'Our paper on 🧹 LLM Unlearning has been accepted to COLM 2025.',
          description: "",
          section: "News",},{id: "news-introducing-️-hubble-a-suite-of-fully-open-source-llms-for-studying-memorization",
          title: 'Introducing 🛰️ Hubble, a suite of fully open-source LLMs for studying memorization.',
          description: "",
          section: "News",},{id: "news-our-paper-auditing-black-box-llm-apis-has-been-accepted-to-iclr-2026",
          title: 'Our paper 🔍 Auditing Black-Box LLM APIs has been accepted to ICLR 2026....',
          description: "",
          section: "News",},{id: "news-our-paper-hubble-has-been-accepted-to-iclr-2026",
          title: 'Our paper 🔭 Hubble has been accepted to ICLR 2026.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%7A%68%75%39%38%33%39@%75%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=a8yv0nEAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xyzhu123", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/AmosZhu5", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiaoyuan-zhu-38005a224", "_blank");
        },
      },];
