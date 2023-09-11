"use strict";(self.webpackChunkton_promise_eye_doc=self.webpackChunkton_promise_eye_doc||[]).push([[9563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Protocol",l={unversionedId:"How-to-use/Protocol",id:"How-to-use/Protocol",title:"Protocol",description:"Introduction",source:"@site/docs/How-to-use/Protocol.md",sourceDirName:"How-to-use",slug:"/How-to-use/Protocol",permalink:"/eventon-doc/docs/How-to-use/Protocol",draft:!1,editUrl:"https://github.com/Ton-Dynasty/eventon-doc/tree/main/docs/How-to-use/Protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What Are Our Features?",permalink:"/eventon-doc/docs/WhatAreOurFeatures"},next:{title:"Subscriber",permalink:"/eventon-doc/docs/How-to-use/Subscriber"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare: Just implement the trait <code>Alertable</code>",id:"prepare-just-implement-the-trait-alertable",level:2},{value:"Functionality",id:"functionality",level:2},{value:"Registering an Event",id:"registering-an-event",level:3},{value:"Sending Signals",id:"sending-signals",level:3},{value:"Collecting Subscription Fee",id:"collecting-subscription-fee",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protocol"},"Protocol"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Protocol")," plays a pivotal role within our system, serving as the main source of signals."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Protocol type",src:n(8865).Z,width:"1634",height:"684"})),(0,o.kt)("p",null,"Drawing from the above explanation, we can categorize it into two main types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On-chain Protocol"),": These protocols predominantly represent a majority of DeFi protocols. They offer services like lending, trading, insurance, and more, all of which are executed on-chain. Hence, we term them as On-chain Protocols.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Off-chain Protocol"),": These protocols cater to data from off-chain sources, such as oracles. The computations and interactions for these data points occur off-chain, leading us to define them as Off-chain Protocols."))),(0,o.kt)("h2",{id:"prepare-just-implement-the-trait-alertable"},"Prepare: Just implement the trait ",(0,o.kt)("inlineCode",{parentName:"h2"},"Alertable")),(0,o.kt)("p",null,"To send signal, you need to prepare a contract with our template interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"trait Alertable with Ownable {\n    owner: Address;\n    protocolName: String; // Protocol name\n    eventonAddress: Address; // Eventon address\n    ...\n    receive(msg : ProtocolRegister) { ... }\n}\n")),(0,o.kt)("p",null,"To register a protocol, you need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"receive")," function with message ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtocolRegister"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"receive(msg : ProtocolRegister) {\n    self.requireOwner();\n    send(SendParameters{\n        to: self.eventonAddress,\n        value: 0,\n        bounce: false,\n        mode: SendRemainingValue,\n        body: ProtocolRegister{\n            sourceAddress: myAddress(), // Protocol's address\n            template: msg.template, // Callback contract for subscribers\n            maxUserStakeAmount: msg.maxUserStakeAmount, // Maximum amount of stake that a user can stake for the protocol\n            subscribeFeePerTick: msg.subscribeFeePerTick // Amount of fee that a subscriber has to pay for each tick\n        }.toCell()\n    });\n}\n")),(0,o.kt)("h2",{id:"functionality"},"Functionality"),(0,o.kt)("h3",{id:"registering-an-event"},"Registering an Event"),(0,o.kt)("p",null,"To register an event for signal provision, the following details are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"template"),": The default contract init code, serving as a template for subscribers to receive signals."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxUserStakeAmount"),": The maximum amount a subscriber can stake."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribeFeePerTick"),": The fee payable by subscribers for each tick.")),(0,o.kt)("h3",{id:"sending-signals"},"Sending Signals"),(0,o.kt)("p",null,"For a registered event, signals can be dispatched. The necessary details include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eventId"),": The unique ID associated with the event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload"),": The content of the signal being sent.")),(0,o.kt)("h3",{id:"collecting-subscription-fee"},"Collecting Subscription Fee"),(0,o.kt)("p",null,"Withdrawals can be made from the profit pool. The required information is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": The sum of accumulated subscription earnings to be withdrawn."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"receiver"),": The intended recipient of the earnings.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0},8865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3db5687884b23c3e83bf520574340349.png"}}]);