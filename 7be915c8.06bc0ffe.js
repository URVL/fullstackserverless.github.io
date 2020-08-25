/*! For license information please see 7be915c8.06bc0ffe.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return N})),n.d(t,"default",(function(){return v}));var i=n(1),a=n(6),o=n(0),c=n.n(o),r=n(139),s=n(148);var l=function(){return Object(o.useContext)(s.a)},p=n(141),b=n.n(p),d=n(119),m=n.n(d);const u=37,h=39;var f=function(e){const{block:t,children:n,defaultValue:i,values:a,groupId:r}=e,{tabGroupChoices:s,setTabGroupChoices:p}=l(),[d,f]=Object(o.useState)(i);if(null!=r){const e=s[r];null!=e&&e!==d&&f(e)}const O=e=>{f(e),null!=r&&p(r,e)},j=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},a.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:b()("tab-item",m.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case h:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===d)[0]))};var O=function(e){return c.a.createElement("div",null,e.children)},j={id:"notif-00",title:"Push Notification with Amplify",sidebar_label:"Push Notification"},g={id:"notif-00",title:"Push Notification with Amplify",description:"Push notifications play an essential role in any Application. It can considerably increase the user engagement, and it might be an asked feature from the end-user.",source:"@site/docs/notif00.md",permalink:"/docs/notif-00",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/notif00.md",sidebar_label:"Push Notification",sidebar:"someSidebar",previous:{title:"DataStore - CRUD (Create Read Update Delete)",permalink:"/docs/amplify-04"}},N=[{value:"Create a new project",id:"create-a-new-project",children:[{value:"Android - Setting up the Firebase",id:"android---setting-up-the-firebase",children:[]}]},{value:"Setting up the Amplify for FCM",id:"setting-up-the-amplify-for-fcm",children:[]},{value:"iOS - Setup",id:"ios---setup",children:[{value:"Configure App",id:"configure-app",children:[]}]},{value:"Working with API",id:"working-with-api",children:[]},{value:"onRegister",id:"onregister",children:[]},{value:"onNotification",id:"onnotification",children:[]},{value:"onNotificationOpened",id:"onnotificationopened",children:[]},{value:"requestIOSPermissions",id:"requestiospermissions",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Done \u2705",id:"done-",children:[]},{value:"References:",id:"references",children:[]}],y={rightToc:N};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Push notifications play an essential role in any Application. It can considerably increase the user engagement, and it might be an asked feature from the end-user."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/00.png",alt:"Push Notifications"}))),Object(r.b)("p",null,"Setting up a push notification from scratch can be a bit challenging. Fortunately, the Amplify provides the push notification services and SDK for our apps. In this tutorial, we learn how to integrate our app with this service."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(r.b)("h2",{id:"create-a-new-project"},"Create a new project"),Object(r.b)("p",null,"Whether you are going to implement only for IOS or Android, the following steps are required. If you are not working on a project, then the first step is creating one by the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npx react-native init amplifyPush\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"cd amplifyPush\n")),Object(r.b)("p",null,"Initialize our AWS Amplify project in the root directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"amplify init\n")),Object(r.b)("p",null,"Here is how the answers can be:"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_amplify_init.png",alt:"Initialize Amplify"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the required dependencies with:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save aws-amplify @aws-amplify/pushnotification\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"yarn add aws-amplify @aws-amplify/pushnotification\n")),Object(r.b)("p",null,"You need to link the push notification dependency with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"react-native link @aws-amplify/pushnotification\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To prevent an ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/aws-amplify/amplify-js/issues/5010"}),"error")," in the future add the ",Object(r.b)("inlineCode",{parentName:"p"},"netinfo")," library. You can add it to your project by the following command (in case your don't have it):"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @react-native-community/netinfo\n")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-native-community/netinfo\n")))),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(r.b)("h3",{id:"android---setting-up-the-firebase"},"Android - Setting up the Firebase"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://console.firebase.google.com/"}),"Firebase console"),"."),Object(r.b)("li",{parentName:"ol"},"Open or create a project for further steps."),Object(r.b)("li",{parentName:"ol"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"Cloud Messaging")," in the dashboard.")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_cloud_messaging.png",alt:"Cloud Messaging"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Click on the Android and follow the following steps:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fill in the form and register the app. ",Object(r.b)("inlineCode",{parentName:"li"},"Android package name")," can be found in ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/build.gradle"),". It is stored as ",Object(r.b)("inlineCode",{parentName:"li"},"applicationId")," like this:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'   gradle title="android/app/build.gradle"\n      defaultConfig {\n       applicationId "com.amplifypush"\n      }\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the config file to ",Object(r.b)("inlineCode",{parentName:"li"},"android/app")," directory of the project."),Object(r.b)("li",{parentName:"ul"},"Add the Firebase SDK as the instructions. Consider the ",Object(r.b)("inlineCode",{parentName:"li"},"<project>")," the ",Object(r.b)("inlineCode",{parentName:"li"},"android")," and ",Object(r.b)("inlineCode",{parentName:"li"},"<app-module>")," the ",Object(r.b)("inlineCode",{parentName:"li"},"app")," directory in the react native project. Don't forget to add the latest version of ",Object(r.b)("inlineCode",{parentName:"li"},"firebase-messaging")," from ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://firebase.google.com/docs/android/setup#available-libraries"}),"here")," as well ad the ",Object(r.b)("inlineCode",{parentName:"li"},"firebase-analytics")," in ",Object(r.b)("inlineCode",{parentName:"li"},"dependencies"),"."),Object(r.b)("li",{parentName:"ul"},"Run the project in Android and you will see that the verification of Firebase. (you can skip this step)"),Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml")," and add the following code in the ",Object(r.b)("inlineCode",{parentName:"li"},"application")," element:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'xml title="android/app/src/main/AndroidManifest.xml"\n\x3c!--[START Push notification config --\x3e\n        \x3c!-- [START firebase_service] --\x3e\n        <service\n            android:name="com.amazonaws.amplify.pushnotification.RNPushNotificationMessagingService">\n            <intent-filter>\n                <action android:name="com.google.firebase.MESSAGING_EVENT"/>\n            </intent-filter>\n        </service>\n        \x3c!-- [END firebase_service] --\x3e\n        \x3c!-- [START firebase_iid_service] --\x3e\n        <service\n            android:name="com.amazonaws.amplify.pushnotification.RNPushNotificationDeviceIDService">\n            <intent-filter>\n                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>\n            </intent-filter>\n        </service>\n        <receiver\n            android:name="com.amazonaws.amplify.pushnotification.modules.RNPushNotificationBroadcastReceiver"\n            android:exported="false" >\n            <intent-filter>\n                <action android:name="com.amazonaws.amplify.pushnotification.NOTIFICATION_OPENED"/>\n            </intent-filter>\n        </receiver>\n    \x3c!-- [END Push notification config --\x3e\n')),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(r.b)("h2",{id:"setting-up-the-amplify-for-fcm"},"Setting up the Amplify for FCM"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add the push notification service to amplify by the following command in the project directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," amplify add notifications\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"FCM")," when promoted:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," ? Choose the push notification channel to enable.\n APNS\n \u276f FCM\n Email\n SMS\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Fill the pinpoint resource name (or just press enter without filling anything)."),Object(r.b)("li",{parentName:"ol"},"You will be asked for ",Object(r.b)("inlineCode",{parentName:"li"},"ApiKey"),". For getting that, you should do the following steps:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://console.firebase.google.com/"}),"Firebase console")," and open the app you created in previous steps."),Object(r.b)("li",{parentName:"ul"},"Click on the gear icon in the ",Object(r.b)("inlineCode",{parentName:"li"},"Project Overview")," section of the dashboard and select the ",Object(r.b)("inlineCode",{parentName:"li"},"Project settings"),".")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_project_settings.png",alt:"Project settings"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"Cloud Messaging")," tab and copy the value of the ",Object(r.b)("inlineCode",{parentName:"li"},"Server key"),".")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_api_key.png",alt:"Project settings"}))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Paste the value for requested ",Object(r.b)("inlineCode",{parentName:"li"},"ApiKey"),"."),Object(r.b)("li",{parentName:"ol"},"After the setup is completed, run the ",Object(r.b)("inlineCode",{parentName:"li"},"amplify push")," command.")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(r.b)("h2",{id:"ios---setup"},"iOS - Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add the ",Object(r.b)("inlineCode",{parentName:"li"},"@react-native-community/push-notification-ios")," by the following command:")),Object(r.b)(f,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(r.b)(O,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-native-community/push-notification-ios`\n"))),Object(r.b)(O,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @react-native-community/push-notification-ios\n")))),"2. Run the following commands: ```bash cd ios && pod install && cd .. ``` 3. Add the notifications to the amply for iOS by `amplify add notifications` command:",Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"1. Choose `APNS` when promoted:\n ```bash\n ? Choose the push notification channel to enable.\n    > APNS\n    FCM\n    Email\n    SMS\n ```\n2. Then you will be prompted for the authentication method. It is recommended to choose the certificate.\n\n ```bash\n? Choose authentication method used for APNs (Use arrow keys)\n> Certificate\nKey\n ```\n\n3. If you have chosen the certificate, then you will be prompted for the .p12 certificate path file. (You can use this [tutorial](https://mobincube.zendesk.com/hc/en-us/articles/200511933-How-to-get-the-p12-file-and-provisioning-profile-for-publishing-an-app-on-App-Store) to get that).\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"amplify push"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("inlineCode",{parentName:"p"},".xcworkspace")," project with the XCode.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the project and select the project name in ",Object(r.b)("inlineCode",{parentName:"p"},"TARGETS")," section. Select the ",Object(r.b)("inlineCode",{parentName:"p"},"Signing & Capabilities")," and press the ",Object(r.b)("inlineCode",{parentName:"p"},"+")," before the ",Object(r.b)("inlineCode",{parentName:"p"},"Capability"),". Choose ",Object(r.b)("inlineCode",{parentName:"p"},"Background Mode - Remote Notifications"),"."))),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(r.b)("h3",{id:"configure-app"},"Configure App"),Object(r.b)("p",null,"As it was told before, The ",Object(r.b)("inlineCode",{parentName:"p"},"Analytics")," should be integrated along with the notifications. It will help to track the notifications. Though it is possible to use custom properties, It is advised to use the ",Object(r.b)("inlineCode",{parentName:"p"},"aws-exports")," file.\nin ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," file add the configuration as follow:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"...\nimport Amplify from 'aws-amplify';\nimport PushNotification from '@aws-amplify/pushnotification';\nimport awsconfig from './aws-exports';\n\nAmplify.configure(awsconfig);\n\nPushNotification.configure(awsconfig);\n...\n")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(r.b)("h2",{id:"working-with-api"},"Working with API"),Object(r.b)("p",null,"Usually, what we want is sending push notifications to specific users for various purposes. The API gives us various methods for handling our users & push notifications."),Object(r.b)("h2",{id:"onregister"},"onRegister"),Object(r.b)("p",null,"Each device can be recognized by the push token by which you can specify the device you want to get a push notification. When the user opens the app for the first time, the pushed token is fetched and stored in the device. You should be aware of the fact this method may get called again in the future, so you should be prepared for this situation to update your data according to it."),Object(r.b)("p",null,"You can add the following code in ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"PushNotification.onRegister(token => {\n  console.log('in app registration', token)\n  PushNotification.updateEndpoint(token)\n})\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Attention")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There can be an issue in android that this method never be called! However a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/aws-amplify/amplify-js/issues/2643#issuecomment-523610933"}),"workaround")," can be like this anywhere you might need the token:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"...\nimport {NativeModules} from 'react-native';\n...\nNativeModules.RNPushNotification.getToken((token) => {\n  console.log(`PushToken: ${token}`);\n});\n...\n")))),Object(r.b)("h2",{id:"onnotification"},"onNotification"),Object(r.b)("p",null,"In case you want to do something when the notification is recieved the ",Object(r.b)("inlineCode",{parentName:"p"},"onNotification")," method is for acting based on the recieved notification. Don't forget to that the notification object structure is diffrent from Android and IOS. In IOS, You ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://reactnative.dev/docs/pushnotificationios.html#finish"}),"Should")," use the ",Object(r.b)("inlineCode",{parentName:"p"},"finish")," method. You can add the following code to ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"...\nimport PushNotificationIOS from '@react-native-community/push-notification-ios';\n...\nPushNotification.onNotification((notification) => {\n  console.log('in app notification', notification);\n  if (Platform.OS === 'ios') {\n    notification.finish(PushNotificationIOS.FetchResult.NoData);\n  }\n});\n")),Object(r.b)("h2",{id:"onnotificationopened"},"onNotificationOpened"),Object(r.b)("p",null,"A common scenario is reacting to when user opens a push notification (eg: opening a message etc). Whenever the user opens a push notification, the ",Object(r.b)("inlineCode",{parentName:"p"},"onNotificationOpened")," is called. The code can be in ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," as follow:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"PushNotification.onNotificationOpened(notification => {\n  console.log('the notification is opened', notification)\n})\n")),Object(r.b)("h2",{id:"requestiospermissions"},"requestIOSPermissions"),Object(r.b)("p",null,"Push notification works only on a real device and it won't recieve any notification unless the end user give the permission. The ",Object(r.b)("inlineCode",{parentName:"p"},"requestIOSPermissions")," is for getting this permission. It either can be called without any parameters, or you can customize by an object as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"PushNotification.requestIOSPermissions()\n// or\nPushNotification.requestIOSPermissions({\n  alert: true,\n  badge: true,\n  sound: false\n})\n")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/steps/07.png",alt:"Step07"}))),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"First of all, we want to take a look at the ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," file. Though you can work with the API anywhere in your code, It can be something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { SafeAreaView, Platform, Text, NativeModules } from 'react-native'\n\nimport PushNotificationIOS from '@react-native-community/push-notification-ios'\nimport Analytics from '@aws-amplify/analytics'\nimport Amplify from 'aws-amplify'\nimport PushNotification from '@aws-amplify/pushnotification'\nimport awsconfig from './aws-exports'\n\nAmplify.configure(awsconfig)\nPushNotification.configure(awsconfig)\n\nPushNotification.onRegister(async token => {\n  console.log('in app registration', token)\n  PushNotification.updateEndpoint(token)\n})\n\n// In case PushNotification.onRegister didn't work\nNativeModules.RNPushNotification.getToken(token => {\n  console.log(`PushToken: ${token}`)\n})\n\nPushNotification.onNotification(notification => {\n  console.log('in app notification', notification)\n  if (Platform.OS === 'ios') {\n    notification.finish(PushNotificationIOS.FetchResult.NoData)\n  }\n})\n\nPushNotification.onNotificationOpened(notification => {\n  console.log('the notification is opened', notification)\n})\n\nconst endpointId = Analytics.getPluggable('AWSPinpoint')._config.endpointId\nconsole.log(`endpoint ID: ${endpointId}`)\n\nif (Platform.OS === 'ios') {\n  PushNotification.requestIOSPermissions()\n}\n\nconst App: () => React$Node = () => {\n  return (\n    <SafeAreaView>\n      <Text>Push Notification</Text>\n    </SafeAreaView>\n  )\n}\n\nexport default App\n")),Object(r.b)("p",null,"Now we run our program:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"react-native run-android\n")),Object(r.b)("p",null,"To go further, we need one of the ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint ID")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Push Token"),".\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html"}),"Here")," is an explanation of ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," in ",Object(r.b)("inlineCode",{parentName:"p"},"aws")," services:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"An endpoint represents a destination that you can send messages to, such as a mobile device, email address, or phone number.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Push Token")," is a unique id, Which is generated and assigned by ",Object(r.b)("inlineCode",{parentName:"p"},"GCM"),"(Android) or ",Object(r.b)("inlineCode",{parentName:"p"},"APNS"),"(IOS) to your application in a specific device."),Object(r.b)("p",null,"The most apparent difference between these two is that the ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," is generated from ",Object(r.b)("inlineCode",{parentName:"p"},"aws"),", and defines the app in a device regardless of the platform(IOS/Android). But the push token is generated either by the ",Object(r.b)("inlineCode",{parentName:"p"},"Apple")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Google"),", depending on the platform."),Object(r.b)("p",null,"We use ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," to copy and keep these keys for the next steps. Go into the dev mode and copy the following values in your console:"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_console_tokens.png",alt:"Tokens"}))),Object(r.b)("p",null,"Although there are multiple ways to send a test push notification to a specific device, We're going to learn the easiest way possible."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run the following command in the root of the project:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"amplify notification console\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The console of the app will be opened in the browser automatically.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the ",Object(r.b)("inlineCode",{parentName:"p"},"Test messaging")," in the left sidebar:"))),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_aws_notif_console.png",alt:"Test messaging"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("inlineCode",{parentName:"p"},"Channel")," section, select the ",Object(r.b)("inlineCode",{parentName:"p"},"Push notifications"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"Destinations")," section is as follow:"))),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_testing_message_dest.png",alt:"Destinations"}))," 1. ",Object(r.b)("inlineCode",{parentName:"p"},"Destination type")," defines whether you want to use ",Object(r.b)("inlineCode",{parentName:"p"},"Endpoint IDs")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Device Tokens"),"(or ",Object(r.b)("inlineCode",{parentName:"p"},"Push token")," in previous steps) in the next text input. 2. Paste the token you want to use, Based on the selected ",Object(r.b)("inlineCode",{parentName:"p"},"Destination type"),". 3. If you have chosen the ",Object(r.b)("inlineCode",{parentName:"p"},"Endpoint IDs")," and used endpoint, then the ",Object(r.b)("inlineCode",{parentName:"p"},"Push notifications service")," can automatically detect your device. Otherwise, if you have used ",Object(r.b)("inlineCode",{parentName:"p"},"Device token"),", for IOS, choose the ",Object(r.b)("inlineCode",{parentName:"p"},"APNS")," and for Android choose the ",Object(r.b)("inlineCode",{parentName:"p"},"FCM"),"."),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"You can fill the ",Object(r.b)("inlineCode",{parentName:"li"},"Message")," section like below and press the ",Object(r.b)("inlineCode",{parentName:"li"},"Send message")," button.")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_testing_message_message.png",alt:"Destinations"}))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"You will get a success message like below if everything is ok.")),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_testing_message_success.png",alt:"Success"})),"\nAfter a couple of seconds, You will see the push notification in your device:"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/notification/notif_android_push_result.png",alt:"Push notification result"}))),Object(r.b)("h2",{id:"done-"},"Done \u2705"),Object(r.b)("h2",{id:"references"},"References:"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.amplify.aws/lib/push-notifications/getting-started/q/platform/js"}),"Amplify Docs")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://medium.com/@dantasfiles/setting-up-android-push-notifications-with-aws-amplify-e6334c6356d8"}),"Setting up Android Push Notifications with AWS Amplify")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://medium.com/@dantasfiles/testing-push-notifications-with-aws-amplify-9126bd621d3a"}),"Testing Push Notifications with AWS Amplify & CLI")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}v.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=i,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,r({ref:t},l,{components:n})):a.a.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},141:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var c=a.apply(null,i);c&&e.push(c)}else if("object"===o)for(var r in i)n.call(i,r)&&i[r]&&e.push(r)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},148:function(e,t,n){"use strict";var i=n(0);const a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=a}}]);