export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Full Stack Serverless",
      "logo": {
        "alt": "React Native Village Logo",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "docs/startup00",
          "activeBasePath": "docs",
          "label": "Tutorials",
          "position": "left"
        },
        {
          "href": "https://www.patreon.com/fullstackserverless",
          "label": "Patreon",
          "position": "left"
        },
        {
          "href": "https://www.linkedin.com/in/raoffonom",
          "label": "Author",
          "position": "left"
        },
        {
          "href": "https://github.com/fullstackserverless",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Tutorials",
          "items": [
            {
              "label": "Startup",
              "to": "docs/startup00"
            },
            {
              "label": "UI Kit",
              "to": "docs/unicorn00"
            },
            {
              "label": "Authentication",
              "to": "docs/auth1-00"
            },
            {
              "label": "AWS Amplify",
              "to": "docs/amplify-00"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/Ntuttww"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Dev.to",
              "href": "https://dev.to/playra"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/koshasuperstar"
            },
            {
              "label": "Patreon",
              "href": "https://www.patreon.com/fullstackserverless"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/fullstackserverless"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Facebook Open Source Logo",
        "src": "img/oss_logo.png",
        "href": "https://opensource.facebook.com/"
      },
      "copyright": "Copyright © 2020 @playra. Built with Docusaurus."
    }
  },
  "title": "Full Stack Serverless",
  "tagline": "Full Stack Serverless application = React Native + AWS Amplify",
  "url": "https://fullstackserverless.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "fullstackserverless",
  "projectName": "fullstackserverless.github.io",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/playra/fullstackserverless/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/playra/fullstackserverless/src/css/custom.css"
        }
      }
    ]
  ]
};