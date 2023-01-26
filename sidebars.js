/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  aistudiosSidebar: [
    "aistudios/getting-started",
    "aistudios/generate-api-key",
    {
      type: "category",
      label: "Tutorial",
      collapsed: false,
      items: [
        "aistudios/tutorial/multiple-chromakey-export",
        "aistudios/tutorial/export-from-exist-project",
        "aistudios/tutorial/export-from-json-template",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "aistudios/reference/auth",
        "aistudios/reference/export-project",
        "aistudios/reference/progress",
        "aistudios/reference/get-project",
        "aistudios/reference/get-project-by-name",
        "aistudios/reference/export-template",
        "aistudios/reference/scene-add",
        "aistudios/reference/scene-update",
        "aistudios/reference/scene-delete",
        "aistudios/reference/duplicate-project",
        "aistudios/reference/model-list",
        "aistudios/reference/simple-video",
        "aistudios/reference/simple-audio",
        "aistudios/reference/chromakey-audio-find",
        "aistudios/reference/webhook",
      ],
    },
  ],
  aihumanwebSidebar: [
    "aihuman/web-sdk/intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      link: {
        type: "generated-index",
        description:
          "Learn from the preparation for using the AI Human SDK to the first AI Human speech process.",
      },
      items: [
        "aihuman/web-sdk/getting-started/projectsetup",
        "aihuman/web-sdk/getting-started/first-aihuman",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sample Project Description",
      link: {
        type: "generated-index",
        description: "Learn AI Human SDK as a sample project.",
      },
      items: [
        "aihuman/web-sdk/sample-project/overview",
        "aihuman/web-sdk/sample-project/quick-start",
        "aihuman/web-sdk/sample-project/ai-human-demo",
        "aihuman/web-sdk/sample-project/with-playchat-azure-stt",
        "aihuman/web-sdk/sample-project/with-google-dialogflow",
      ],
    },
    {
      type: "category",
      label: "AIPlayer Description",
      link: {
        type: "generated-index",
        description: "Learn more about AIPlayer objects in the AI Human SDK.",
      },
      items: [
        "aihuman/web-sdk/aiplayer/overview",
        "aihuman/web-sdk/aiplayer/setup",
        "aihuman/web-sdk/aiplayer/resources-states",
        "aihuman/web-sdk/aiplayer/basic-features",
        "aihuman/web-sdk/aiplayer/advanced-features",
        "aihuman/web-sdk/aiplayer/other-features",
        "aihuman/web-sdk/aiplayer/errors",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        description:
          "Learn about the main interface, class, and api of the AI Human SDK.",
      },
      items: [
        "aihuman/web-sdk/apis/aiplayer",
        "aihuman/web-sdk/apis/aiapi",
        "aihuman/web-sdk/apis/aiplayer-callback",
        "aihuman/web-sdk/apis/aiplayer-data",
      ],
    },
  ],
  aihumanwindowsSidebar: [
    "aihuman/windows-sdk/intro",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      link: {
        type: "generated-index",
        description:
          "Learn from the preparation for using the AI Human SDK to the first AI Human speech process.",
      },
      items: [
        "aihuman/windows-sdk/getting-started/projectsetup",
        "aihuman/windows-sdk/getting-started/first-aihuman",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sample Project Description",
      link: {
        type: "generated-index",
        description: "Learn AI Human SDK as a sample project.",
      },
      items: [
        "aihuman/windows-sdk/sample-project/overview",
        "aihuman/windows-sdk/sample-project/quick-start",
        "aihuman/windows-sdk/sample-project/ai-human-demo",
        "aihuman/windows-sdk/sample-project/with-playchat-azure-stt",
        "aihuman/windows-sdk/sample-project/with-google-dialogflow",
      ],
    },
    {
      type: "category",
      label: "AIPlayer Description",
      link: {
        type: "generated-index",
        description: "Learn more about AIPlayer objects in the AI Human SDK.",
      },
      items: [
        "aihuman/windows-sdk/aiplayer/overview",
        "aihuman/windows-sdk/aiplayer/setup",
        "aihuman/windows-sdk/aiplayer/resources-states",
        "aihuman/windows-sdk/aiplayer/basic-features",
        "aihuman/windows-sdk/aiplayer/advanced-features",
        "aihuman/windows-sdk/aiplayer/other-features",
        "aihuman/windows-sdk/aiplayer/errors",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        description:
          "Learn about the main interface, class, and api of the AI Human SDK.",
      },
      items: [
        "aihuman/windows-sdk/apis/aiapi",
        "aihuman/windows-sdk/apis/iaiplayercallback",
        "aihuman/windows-sdk/apis/aiplayer",
        "aihuman/windows-sdk/apis/aiclipset",
        "aihuman/windows-sdk/apis/aigesture",
      ],
    },
  ],
  aihumanandroidSidebar: [
    "aihuman/android-sdk/intro",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      link: {
        type: "generated-index",
        description:
          "Learn from the preparation for using the AI Human SDK to the first AI Human speech process.",
      },
      items: [
        "aihuman/android-sdk/getting-started/projectsetup",
        "aihuman/android-sdk/getting-started/first-aihuman",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sample Project Description",
      link: {
        type: "generated-index",
        description: "Learn AI Human SDK as a sample project.",
      },
      items: [
        "aihuman/android-sdk/sample-project/overview",
        "aihuman/android-sdk/sample-project/quick-start",
        "aihuman/android-sdk/sample-project/ai-human-demo",
        "aihuman/android-sdk/sample-project/with-google-dialogflow",
        "aihuman/android-sdk/sample-project/with-playchat-azure-stt",
        "aihuman/android-sdk/sample-project/with-3d-character",
      ],
    },
    {
      type: "category",
      label: "AIPlayer Description",
      link: {
        type: "generated-index",
        description: "Learn how to set up and use AIPlayer and AI3DPlayer.",
      },
      items: [
        "aihuman/android-sdk/aiplayer/overview",
        "aihuman/android-sdk/aiplayer/setup",
        "aihuman/android-sdk/aiplayer/resources-states",
        "aihuman/android-sdk/aiplayer/basic-features",
        "aihuman/android-sdk/aiplayer/advanced-features",
        "aihuman/android-sdk/aiplayer/other-features",
        "aihuman/android-sdk/aiplayer/errors",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        description:
          "Learn about the main interface, class, and api of the AI Human SDK.",
      },
      items: [
        "aihuman/android-sdk/apis/aiplayer",
        "aihuman/android-sdk/apis/ai3dplayer",
        "aihuman/android-sdk/apis/aiclipsetfactory",
        "aihuman/android-sdk/apis/aiclipset",
        "aihuman/android-sdk/apis/aigesture",
        "aihuman/android-sdk/apis/customvoice",
        "aihuman/android-sdk/apis/aimodelinfomanager",
        "aihuman/android-sdk/apis/iaiplayercallback",
        "aihuman/android-sdk/apis/iunitycallback",
        "aihuman/android-sdk/apis/iaimodelloadlistener",
        "aihuman/android-sdk/apis/iauthwithailistlistener",
        "aihuman/android-sdk/apis/ionstatechangelistener",
        "aihuman/android-sdk/apis/ionaierrorlistener",
      ],
    },
  ],
  aihumaniosSidebar: [
    "aihuman/ios-sdk/intro",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      link: {
        type: "generated-index",
        description:
          "Learn from the preparation for using the AI Human SDK to the first AI Human speech process.",
      },
      items: [
        "aihuman/ios-sdk/getting-started/projectsetup",
        "aihuman/ios-sdk/getting-started/first-aihuman",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sample Project Description",
      link: {
        type: "generated-index",
        description: "Learn AI Human SDK as a sample project.",
      },
      items: [
        "aihuman/ios-sdk/sample-project/overview",
        "aihuman/ios-sdk/sample-project/quick-start",
        "aihuman/ios-sdk/sample-project/ai-human-demo",
        "aihuman/ios-sdk/sample-project/with-playchat",
        "aihuman/ios-sdk/sample-project/with-playchat-and-google-stt",
      ],
    },
    {
      type: "category",
      label: "AIPlayer Description",
      link: {
        type: "generated-index",
        description: "Learn more about AIPlayer objects in the AI Human SDK.",
      },
      items: [
        "aihuman/ios-sdk/aiplayer/overview",
        "aihuman/ios-sdk/aiplayer/setup",
        "aihuman/ios-sdk/aiplayer/resources-states",
        "aihuman/ios-sdk/aiplayer/basic-features",
        "aihuman/ios-sdk/aiplayer/advanced-features",
        "aihuman/ios-sdk/aiplayer/other-features",
        "aihuman/ios-sdk/aiplayer/errors",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        description:
          "Learn about the main interface, class, and api of the AI Human SDK.",
      },
      items: [
        "aihuman/ios-sdk/apis/aiplayer",
        "aihuman/ios-sdk/apis/aiplayercallback",
        "aihuman/ios-sdk/apis/aiplayerconfiguration",
        "aihuman/ios-sdk/apis/aiplayerstate",
        "aihuman/ios-sdk/apis/aiclipset",
        "aihuman/ios-sdk/apis/aigesturemodel",
        "aihuman/ios-sdk/apis/customvoice",
        "aihuman/ios-sdk/apis/aiplayeralignment",
      ],
    },
  ],
  aihumanunitySidebar: [
    "aihuman/unity-sdk/intro",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      link: {
        type: "generated-index",
        description:
          "Learn from the preparation for using the AI Human SDK to the first AI Human speech process.",
      },
      items: [
        "aihuman/unity-sdk/getting-started/projectsetup",
        "aihuman/unity-sdk/getting-started/first-aihuman",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sample Project Description",
      link: {
        type: "generated-index",
        description: "Learn AI Human SDK as a sample project.",
      },
      items: [
        "aihuman/unity-sdk/sample-project/overview",
        "aihuman/unity-sdk/sample-project/quick-start",
        "aihuman/unity-sdk/sample-project/ai-human-demo",
        "aihuman/unity-sdk/sample-project/with-playchat-azure-stt",
        "aihuman/unity-sdk/sample-project/with-google-dialogflow",
        "aihuman/unity-sdk/sample-project/with-3d-character",
      ],
    },
    {
      type: "category",
      label: "AIPlayer Description",
      link: {
        type: "generated-index",
        description: "Learn more about AIPlayer objects in the AI Human SDK.",
      },
      items: [
        "aihuman/unity-sdk/aiplayer/overview",
        "aihuman/unity-sdk/aiplayer/setup",
        "aihuman/unity-sdk/aiplayer/resources-states",
        "aihuman/unity-sdk/aiplayer/basic-features",
        "aihuman/unity-sdk/aiplayer/advanced-features",
        "aihuman/unity-sdk/aiplayer/other-features",
        "aihuman/unity-sdk/aiplayer/errors",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        description:
          "Learn about the main interface, class, and api of the AI Human SDK.",
      },
      items: [
        "aihuman/unity-sdk/apis/aiapi",
        "aihuman/unity-sdk/apis/iaiplayercallback",
        "aihuman/unity-sdk/apis/aiplayer",
        "aihuman/unity-sdk/apis/aiclipset",
        "aihuman/unity-sdk/apis/aigesture",
      ],
    },
  ],
  aifrontUISidebar: [
    "aifront/ui-customization/intro",
    "aifront/ui-customization/desktop",
    "aifront/ui-customization/mobile",
    "aifront/ui-customization/kiosk",
    "aifront/ui-customization/tutorial",
  ],
  aifrontThirdPartySidebar: [
    "aifront/third-party-solutions/intro",
    "aifront/third-party-solutions/chatbot",
    "aifront/third-party-solutions/stt",
  ],
  aifrontWebhookSidebar: [
    "aifront/webhook-server"
  ],
  aichatSidebar: [
    "aichat/getting-started",
    "aichat/dialog-scenarios",
    "aichat/channel",
    "aichat/operation",
    "aichat/analysis",
    "aichat/test",
  ]
};

module.exports = sidebars;
