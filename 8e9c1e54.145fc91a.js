(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(6),r=(a(0),a(139)),o={id:"amplify-03",title:"Amplify API - AppSync - CRUD (Create Read Update Delete)",sidebar_label:"Amplify API  - AppSync"},c={id:"amplify-03",title:"Amplify API - AppSync - CRUD (Create Read Update Delete)",description:"AWS AppSync simplifies application development by creating a universal API for securely accessing, modifying, and combining data from multiple sources. AppSync is a managed service that uses GraphQL so that applications can easily get only the data they need.",source:"@site/docs/amplify03.md",permalink:"/docs/amplify-03",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/amplify03.md",sidebar_label:"Amplify API  - AppSync",sidebar:"someSidebar",previous:{title:"What is GraphQL?",permalink:"/docs/amplify-02"},next:{title:"DataStore - CRUD (Create Read Update Delete)",permalink:"/docs/amplify-04"}},l=[{value:"Easy start and development keeping up with the business",id:"easy-start-and-development-keeping-up-with-the-business",children:[]},{value:"Real-time Subscriptions and Offline Access",id:"real-time-subscriptions-and-offline-access",children:[]},{value:"Unified and secure access to distributed data",id:"unified-and-secure-access-to-distributed-data",children:[]},{value:"Connect the API plugin",id:"connect-the-api-plugin",children:[]},{value:"schema.graphql",id:"schemagraphql",children:[]},{value:"Types",id:"types",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Query (READ)",id:"query-read",children:[]},{value:"Mutation (CREATE UPDATE DELETE)",id:"mutation-create-update-delete",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]},{value:"CREATE",id:"create",children:[]},{value:"READ",id:"read",children:[]},{value:"UPDATE",id:"update",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"Permissions",id:"permissions",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"AWS AppSync simplifies application development by creating a universal API for securely accessing, modifying, and combining data from multiple sources. AppSync is a managed service that uses GraphQL so that applications can easily get only the data they need."),Object(r.b)("p",null,"Using AppSync, you can create scalable applications, including those requiring real-time updates, using a variety of data sources, such as NoSQL data warehouses, relational databases, HTTP APIs, and native data sources with AWS Lambda. For mobile and web applications, AppSync also provides access to local data when devices go offline, and synchronizes data when you reconnect to the Internet. In this case, the client can adjust the conflict resolution procedure."),Object(r.b)("h1",{id:"benefits"},"Benefits:"),Object(r.b)("h2",{id:"easy-start-and-development-keeping-up-with-the-business"},"Easy start and development keeping up with the business"),Object(r.b)("p",null,"Get started in minutes with the selected IDE (e.g. Xcode, Android Studio, VS Code), and use the intuitive AWS AppSync or AWS Amplify CLI management console to automatically create your API and client code. AWS AppSync integrates with Amazon DynamoDB, Amazon Aurora, Amazon Elasticsearch, AWS Lambda, and other AWS services, allowing you to create sophisticated applications with virtually unlimited performance and memory that change depending on your business needs."),Object(r.b)("h2",{id:"real-time-subscriptions-and-offline-access"},"Real-time Subscriptions and Offline Access"),Object(r.b)("p",null,"AWS AppSync provides real-time subscription to millions of devices, as well as offline access to application data. After reconnecting the device, AWS AppSync only synchronizes updates at the time the device was disconnected, not the entire database. AWS AppSync offers customizable, server-side conflict resolution and resolution."),Object(r.b)("h2",{id:"unified-and-secure-access-to-distributed-data"},"Unified and secure access to distributed data"),Object(r.b)("p",null,"Perform complex queries and generalizations across multiple data sources with a single network call using GraphQL. AWS AppSync allows you to easily protect the data of your application using several authentication modes at the same time, and also allows you to determine the degree of threat and perform detailed access control at the data definition level directly from your GraphQL scheme."),Object(r.b)("p",null,"In this lesson, we will create the GraphQL API, which interacts with the DynamoDB NoSQL database to perform CRUD operations (create, read, update, delete)."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(r.b)("h2",{id:"connect-the-api-plugin"},"Connect the API plugin"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"amplify add api\n")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dataStore/dataStore00.png",alt:"AWSAmplify"}))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(r.b)("h2",{id:"schemagraphql"},"schema.graphql"),Object(r.b)("p",null,"After the selected items, the GraphQL schema will open in ",Object(r.b)("inlineCode",{parentName:"p"},"amplify/backend/api/<datasourcename>/schema.graphql")," where we insert this model:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'type Job\n  @model\n  @auth(\n    rules: [\n      {allow: owner, ownerField: "owner", operations: [create, update, delete]},\n    ])\n{\n  id: ID!\n  position: String!\n  rate: String!\n  description: String!\n  owner: String\n}\n')),Object(r.b)("p",null,"This is a GraphQL schema. GraphQL Transform provides an easy-to-use abstraction that helps you quickly create server parts for web and mobile applications in AWS. Using GraphQL Transform, you define the data model of your application using the GraphQL Schema Definition Language (SDL), and the library handles the conversion of the SDL definition to a set of fully descriptive AWS CloudFormation templates that implement your data model."),Object(r.b)("p",null,"When used with tools such as the Amplify CLI, GraphQL Transform simplifies the process of developing, deploying, and supporting GraphQL APIs. With it, you define your API using the GraphQL Schema Definition Language (SDL) and then use automation to transform it into a fully descriptive cloud information template that implements the specification.\nGraphQL is an API specification. It is an API query language and runtime for executing these queries with your data. It has some similarities to REST and is the best replacement for REST."),Object(r.b)("p",null,"GraphQL was introduced by Facebook in 2015, although it has been used internally since 2012. GraphQL allows clients to determine the structure of the required data, and it is this structure that is returned from the server. Querying data in this way provides a much more efficient way for client-side applications to interact with APIs, reducing the number of incomplete samples and preventing excessive data samples."),Object(r.b)("p",null,"More about GraphQL ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://fullstackserverless.github.io/docs/amplify-02"}),"here")),Object(r.b)("p",null,"Let us return to our scheme, where the main components of the GraphQL scheme are object types, which is a type of object that you can extract from your service:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Job")," is a type of a GraphQL object (GraphQL Object Type), that is, a type with some fields. Most types in your schema will be object types.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"id position rate description owner")," - fields in type Job. This means that these are the only fields that can appear in any part of a GraphQL query that works with the Job type.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"String")," is one of the built-in scalar types - these are types that are resolved into a single scalar object and cannot have subselects in the query. We will look at scalar types later.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"String!")," - the field is not NULL, means that the GraphQL service promises to always give you a value when requesting this field. In general, this is a required field."))),Object(r.b)("h2",{id:"types"},"Types"),Object(r.b)("p",null,"GraphQL comes with a set of default scalar types out of the box:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Int")," 32-bit signed integer.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Float")," floating point value with double precision.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"String")," character sequence UTF - 8.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," true or false.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ID")," scalar type ID is a unique identifier, often used to retrieve an object or as a key for the cache. The type of identifier is serialized in the same way as a string; however, the definition of it as an identifier means that it is not intended for human perception."))),Object(r.b)("h2",{id:"directives"},"Directives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"@model")," - Object types marked with",Object(r.b)("inlineCode",{parentName:"p"},"@model")," are top-level objects in the generated API. Objects marked with ",Object(r.b)("inlineCode",{parentName:"p"},"@model")," are stored in Amazon DynamoDB and can be protected with",Object(r.b)("inlineCode",{parentName:"p"},"@auth"),", linked to other objects via ",Object(r.b)("inlineCode",{parentName:"p"},"@connection"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"@auth")," - Authorization is required for the application to interact with your GraphQL API. API keys are best used for public APIs.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"@auth")," object types annotated by",Object(r.b)("inlineCode",{parentName:"p"}," @auth")," are protected by a set of authorization rules that provide you with additional controls than top-level authorization in the API. You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"@auth")," directive to define object types and fields in your project schema.\nWhen using the ",Object(r.b)("inlineCode",{parentName:"p"},"@auth")," directive for definitions of object types, which are also annotated with",Object(r.b)("inlineCode",{parentName:"p"},"@model"),", all recognition tools that return objects of this type will be protected."))),Object(r.b)("p",null,"Other directives and details are in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/cli-toolchain/graphql?sdk=js#directives"}),"official documentation"),"."),Object(r.b)("p",null,"Rules of the ",Object(r.b)("inlineCode",{parentName:"p"},"@auth")," directive"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'@auth( rules: [ {allow: owner, ownerField: "owner", operations: [create, update, delete]} ])\n')),Object(r.b)("p",null,"mean that the operations CREATE, UPDATE, DELETE are allowed exclusively to the owner, and the READ operation is for everyone."),Object(r.b)("p",null,"It's time to test it in practice! Therefore, we write the command in the console:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"amplify mock api\n")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dataStore/dataStore01.png",alt:"amplifyMockApi"}))),Object(r.b)("p",null,"With this team, you can quickly test your achievements of the change without the need to allocate or update the cloud resources that you use at each stage. In this way, you can set up unit and integration tests that can run quickly without affecting your cloud backend."),Object(r.b)("h1",{id:"three-whales-on-which-graphql-stands"},"Three whales on which GraphQL stands:"),Object(r.b)("h2",{id:"query-read"},"Query (READ)"),Object(r.b)("p",null,"Simply put, queries in GraphQL are how you intend to query data. You will receive exactly the data that you need. No more no less."),Object(r.b)("h2",{id:"mutation-create-update-delete"},"Mutation (CREATE UPDATE DELETE)"),Object(r.b)("p",null,"Mutations in GraphQL are a way to change data on a server and get updated data back."),Object(r.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(r.b)("p",null,"A way to maintain a connection to the server in real time. This means that whenever an event occurs on the server and when this event is called, the server will send the appropriate data to the client."),Object(r.b)("p",null,"You can see all available methods of our created API by clicking on Docs (Documentation Explorer) in the upper right corner. The values \u200b\u200bare clickable, so you can see all the possible queries."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*wcYg4qmPXOdghWgS5P1RtQ.png",alt:"Docs"}))),Object(r.b)("h2",{id:"create"},"CREATE"),Object(r.b)("p",null,"We open our API at the address that it issued (each has its own) the result of the ",Object(r.b)("inlineCode",{parentName:"p"},"amplify mock api")," command and execute the CREATE request by pressing the play button."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation Create {\n  __typename\n  createJob(input: {position: "React Native Developer", rate: 3000, description: "We are looking for a React Native developer (St. Petersburg) to develop from scratch a mobile version of the main cs.money platform  Our product is an international trading platform for the exchange of virtual items. (CS: GO, Dota 2) which is shared by more than 5 million users. The project has existed for more than 3 years. and takes a leading position in its field. The platform is used in more than 100 countries of the world.  Now we want to make a mobile application and decided to do it on React Native. You have to develop an application from scratch and this is a great opportunity to build a good architecture without resting on legacy.  Requirements:  Knowledge of react patterns Knowledge of SOLID principles Knowledge of the basics of mobile specifics (caching, working with the native API, rendering optimization) Knowledge of RN"}) {\n    description\n    id\n    owner\n    position\n    rate\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*GwJb9ZZVB6px_QI8xKwslQ.png",alt:"create"}))),Object(r.b)("p",null,"To consolidate the material, create some more vacancies."),Object(r.b)("h2",{id:"read"},"READ"),Object(r.b)("p",null,"We get a list of all the vacancies. Insert request:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query Read {\n  __typename\n  listJobs {\n    items {\n      description\n      id\n      owner\n      position\n      rate\n    }\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*ykTq1YUoBLn6G45fQ3eLXQ.png",alt:"read"}))),Object(r.b)("h2",{id:"update"},"UPDATE"),Object(r.b)("p",null,"To update, we need to take the vacancy ID (be sure to enter your own, and not from the example) and pass it to this request with the data changed. For example, update the ",Object(r.b)("inlineCode",{parentName:"p"},"position")," and",Object(r.b)("inlineCode",{parentName:"p"}," rate")," fields"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation Update {\n  __typename\n  updateJob(input: {id: "1a8a763f-28b8-450a-96f0-73e0d1d8ac04", position: "Full Stack Serverless", rate: 5000}) {\n    id\n    description\n    owner\n    position\n    rate\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*IxfySd5he-V-lxJSyTsqNA.png",alt:"update"}))),Object(r.b)("h2",{id:"delete"},"DELETE"),Object(r.b)("p",null,"To delete, as well as in the case of updating, we need to transfer the vacancy ID (be sure to enter your own, and not from the example)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation Delete {\n  __typename\n  deleteJob(input: {id: "1a8a763f-28b8-450a-96f0-73e0d1d8ac04"}) {\n    id\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*vqFyPU7VVMmulZeF_zd0mg.png",alt:"delete"}))),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("p",null,"Now let's check if our rules work, which we indicated in the scheme. Only the owner can update, delete and create."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"})," @auth( rules: [ {allow: owner, ownerField: \u201cowner\u201d, operations: [create, update, delete]}, ])\n")),Object(r.b)("p",null,"To change the user, click on UpdateAuth in the main menu. Where we randomly update Username and Email."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/430/1*a89USnLuvHC0OXf3wdgYSA.png",alt:"UpdateAuth"}))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/1400/1*BP6B8Wwe9Ldgugf2lUyyPA.png",alt:"authOptions"}))),Object(r.b)("p",null,"If we send a READ request, then it works, but if we send an UPDATE or DELETE request and we get an error.\nThe rules work, as required!"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*NevLJXxyURK4JOx8qWyy4w.png",alt:null}))),Object(r.b)("p",null,"Now that we have tested the functionality of the API, we can publish it to the cloud with the command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dataStore/dataStore02.png",alt:null}))),Object(r.b)("p",null,"After a few minutes, the model is uploaded to the AWS server, so we continue to the react native application."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}p.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return a?i.a.createElement(h,c({ref:t},s,{components:a})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);