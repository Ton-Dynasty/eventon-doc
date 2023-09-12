"use strict";(self.webpackChunkton_promise_eye_doc=self.webpackChunkton_promise_eye_doc||[]).push([[1885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),b=a,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Subscriber",l={unversionedId:"How-to-use/Subscriber",id:"How-to-use/Subscriber",title:"Subscriber",description:"Introduction",source:"@site/docs/How-to-use/Subscriber.md",sourceDirName:"How-to-use",slug:"/How-to-use/Subscriber",permalink:"/eventon-doc/docs/How-to-use/Subscriber",draft:!1,editUrl:"https://github.com/Ton-Dynasty/eventon-doc/tree/main/docs/How-to-use/Subscriber.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protocol",permalink:"/eventon-doc/docs/How-to-use/Protocol"},next:{title:"Staker",permalink:"/eventon-doc/docs/How-to-use/Staker"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Functionality",id:"functionality",level:2},{value:"Create a User Default Callback Contract",id:"create-a-user-default-callback-contract",level:3},{value:"Custom Callback Contract for Advanced User",id:"custom-callback-contract-for-advanced-user",level:3},{value:"Subscribe Events on Eventon",id:"subscribe-events-on-eventon",level:3},{value:"Mssage structure(for technical subscribers)",id:"mssage-structurefor-technical-subscribers",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subscriber"},"Subscriber"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Subscribers can choose from various event subscriptions within the Eventon Protocol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a subscriber is a programmer themselves, they can write their own program logic for handling signals and take relevant actions upon receiving event signals."),(0,a.kt)("li",{parentName:"ul"},"If a subscriber is not a programmer, they can use templates provided by event providers to receive signals and execute actions related to event signals.")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Non-Technical Subscribers\n",(0,a.kt)("img",{alt:"Subsciber Workflow",src:r(8012).Z,width:"1949",height:"609"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Technical Subscribers\n",(0,a.kt)("img",{alt:"Advanced Subsciber Workflow",src:r(5695).Z,width:"1798",height:"753"})))),(0,a.kt)("h2",{id:"functionality"},"Functionality"),(0,a.kt)("h3",{id:"create-a-user-default-callback-contract"},"Create a User Default Callback Contract"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For non-technical subscribers who may not have programming skills, you can register a default callback contract using the template provided by the Protocol. This contract facilitates signal reception and executing related actions upon receiving signals."),(0,a.kt)("p",{parentName:"li"},"Subscribers can register the Default Callback Contract by providing the following information:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"walletAddress"),": The subscriber's wallet address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deadline"),": The maximum delay that the callback contract can accept for processing event signals sent by the Protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId"),": The subscribed Protocol signal event ID (0: Oracle signals, 1: Smart Contract Vulnerability Detection)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parameter"),": Relevant parameters required by the callback contract.")))),(0,a.kt)("h3",{id:"custom-callback-contract-for-advanced-user"},"Custom Callback Contract for Advanced User"),(0,a.kt)("p",null,"For technical subscribers with programming capabilities, you have the option to write your own custom Callback contract to facilitate signal reception and execute related actions upon receiving event signals."),(0,a.kt)("h3",{id:"subscribe-events-on-eventon"},"Subscribe Events on Eventon"),(0,a.kt)("p",null,"Once subscribers have their own Callback contract address, provide the following relevant information to subscribe to Eventon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"walletAddress"),": Subscriber's wallet address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deadline"),": The maximum delay that the callback contract can accept for processing event signals sent by the Protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId"),": The subscribed Protocol signal event ID (0: Oracle signals, 1: Smart Contract Vulnerability Detection)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")," contract address: The contract address responsible for receiving event signals (Default callback contract address/ Custom callback contract address).")),(0,a.kt)("h3",{id:"mssage-structurefor-technical-subscribers"},"Mssage structure(for technical subscribers)"),(0,a.kt)("p",null,"Developers with the ability to write their own code can craft their program logic using the following ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," template. ",(0,a.kt)("strong",{parentName:"p"},"Eventon")," will then send the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventSignal")," to the developer's callback contract address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"message EventSignal {\n    eventId: Int; // Protocol-defined event identifier to allow the callback contract to handle based on the ID.\n    payload: Cell; // Optional information that the message sender can choose to send to the subscriber who subcribes to the event.\n}\n")))}p.isMDXComponent=!0},5695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/advandedsub-d8c14e3c2ae22bc41c863a50f37a9305.png"},8012:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subscriber-dae8568d5479d27622e4378a40f84f2e.jpg"}}]);