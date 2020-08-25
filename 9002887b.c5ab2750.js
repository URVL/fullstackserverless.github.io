(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(139)),o={id:"start03",title:"ESLint & Prettierrc",sidebar_label:"ESLint & Prettierrc"},s={id:"start03",title:"ESLint & Prettierrc",description:"[ES Lint plugin](https://eslint.org) - write your code more clean, tells where you are making mistakes, and generally it\u2019s good practice to work in a team so that everyone has everything one style - ES Lint will tell you which variables you don\u2019t use, where and which components you don\u2019t use, it shows syntax errors and where you don't put spaces correctly, where do you put semicolons, etc. That is, this is already a standard defect that you need to use in writing your code and this plugin will save you from many silly mistakes that you make when developing your application.",source:"@site/docs/start03.md",permalink:"/docs/start03",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start03.md",sidebar_label:"ESLint & Prettierrc",sidebar:"someSidebar",previous:{title:"Startup Unicorn \ud83e\udd84",permalink:"/docs/startup00"},next:{title:"UI Kit - Unicorn",permalink:"/docs/unicorn00"}},l=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Eslint Rules",id:"eslint-rules",children:[]},{value:"Prettierrc Rules",id:"prettierrc-rules",children:[]},{value:"Editing package.json",id:"editing-packagejson",children:[]},{value:"Transferring App.js",id:"transferring-appjs",children:[]},{value:"Launch the application",id:"launch-the-application",children:[]},{value:"Done \u2705",id:"done-",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.org"}),"ES Lint plugin")," - write your code more clean, tells where you are making mistakes, and generally it\u2019s good practice to work in a team so that everyone has everything one style - ES Lint will tell you which variables you don\u2019t use, where and which components you don\u2019t use, it shows syntax errors and where you don't put spaces correctly, where do you put semicolons, etc. That is, this is already a standard defect that you need to use in writing your code and this plugin will save you from many silly mistakes that you make when developing your application."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://prettier.io/"}),"Prettierrc")," - Code formatting tool with support for many languages, a minimum of configuration and a maximum of imposed rules."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(i.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," yarn add eslint eslint-config-airbnb babel-preset-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch babel-core babel-eslint babel-preset-react-native pre-commit prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-react-hooks --dev\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(i.b)("h2",{id:"eslint-rules"},"Eslint Rules"),Object(i.b)("p",null,"Add rules to .eslintrc.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  root: true,\n  parser: 'babel-eslint',\n  extends: ['airbnb', 'prettier'],\n  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],\n  parserOptions: {\n    ecmaFeatures: {\n      jsx: true\n    }\n  },\n  env: {\n    'react-native/react-native': true\n  },\n  rules: {\n    'no-param-reassign': 0,\n    'react-hooks/rules-of-hooks': 'error',\n    'react-hooks/exhaustive-deps': 'warn',\n    'react/jsx-filename-extension': ['off'],\n    'react/jsx-one-expression-per-line': 0,\n    'linebreak-style': ['off'],\n    'implicit-arrow-linebreak': 0,\n    'no-undef': ['error'],\n    'react/sort-comp': ['off'],\n    'react/prefer-stateless-function': ['off'],\n    'react/destructuring-assignment': 1,\n    'function-paren-newline': 0,\n    semi: ['error', 'never'],\n    'spaced-comment': 0,\n    'comma-dangle': ['error', 'never'],\n    'react/prop-types': 0,\n    'no-extra-boolean-cast': 0,\n    'quote-props': 0,\n    'object-curly-spacing': ['error', 'always'],\n    camelcase: 0,\n    'no-nested-ternary': 0,\n    'react/jsx-wrap-multilines': 0,\n    'object-curly-newline': 0,\n    'operator-linebreak': 0,\n    'no-unused-expressions': 0,\n    'global-require': 0,\n    'max-len': 0,\n    'import/no-cycle': 0,\n    'no-underscore-dangle': 0,\n    'no-return-assign': 0,\n    'import/prefer-default-export': 0,\n    'jsx-quotes': ['error', 'prefer-double'],\n    'no-console': 'error',\n    'arrow-parens': 0,\n    'eol-last': 0,\n    'react-native/no-unused-styles': 0,\n    'react-native/split-platform-components': 0,\n    'react-native/no-inline-styles': 0,\n    'react-native/no-color-literals': 0,\n    'react-native/no-raw-text': 0,\n    'consistent-return': 0\n  },\n  settings: {\n    'import/resolver': {\n      node: {\n        extensions: ['.js', '.ios.js', '.android.js']\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(i.b)("h2",{id:"prettierrc-rules"},"Prettierrc Rules"),Object(i.b)("p",null,"Add rules to .prettierrc.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  singleQuote: true,\n  printWidth: 120,\n  tabWidth: 2,\n  trailingComma: 'none',\n  bracketSpacing: true,\n  semi: false,\n  useTabs: false,\n  jsxBracketSameLine: false\n}\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(i.b)("h2",{id:"editing-packagejson"},"Editing package.json"),Object(i.b)("p",null,"Where to add the scripts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simulator. For me, this is iPhone SE since its screen size is the minimum layout requirement (iPhone 3.4 is already all)"),Object(i.b)("li",{parentName:"ul"},"Linter, which will forbid you to push until all errors in the code are fixed"),Object(i.b)("li",{parentName:"ul"},"Install Pods")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'  "scripts": {\n    "android": "react-native run-android",\n    "ios": "react-native run-ios --simulator=\'iPhone SE\'",\n    "start": "react-native start",\n    "test": "jest",\n    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",\n    "postinstall":"cd ./ios && pod install && cd .."\n  },\n "precommit": "lint",\n')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(i.b)("h2",{id:"transferring-appjs"},"Transferring App.js"),Object(i.b)("p",null,"Create the ",Object(i.b)("inlineCode",{parentName:"p"},"src")," folder and transfer the App.js file there, renaming it ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.js")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(i.b)("h2",{id:"launch-the-application"},"Launch the application"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn start-ios")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start-android")),Object(i.b)("h2",{id:"done-"},"Done \u2705"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);