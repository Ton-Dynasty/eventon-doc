"use strict";(self.webpackChunkton_promise_eye_doc=self.webpackChunkton_promise_eye_doc||[]).push([[3937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="Messenger",l={unversionedId:"Architecture/Messenger",id:"Architecture/Messenger",title:"Messenger",description:"This documentation provides a detailed overview of the Messenger contract, explaining its purpose, state variables, constructor, message types, and essential functions.",source:"@site/docs/Architecture/Messenger.md",sourceDirName:"Architecture",slug:"/Architecture/Messenger",permalink:"/eventon-doc/docs/Architecture/Messenger",draft:!1,editUrl:"https://github.com/Ton-Dynasty/eventon-doc/tree/main/docs/Architecture/Messenger.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChildRouter",permalink:"/eventon-doc/docs/Architecture/ChildRouter"},next:{title:"What Are Our Features?",permalink:"/eventon-doc/docs/WhatAreOurFeatures"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Contract Details",id:"contract-details",level:2},{value:"State Variables",id:"state-variables",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Message Types",id:"message-types",level:2},{value:"BuildMessenger",id:"buildmessenger",level:3},{value:"EventSignal",id:"eventsignal",level:3},{value:"CreateMsgSubscriber",id:"createmsgsubscriber",level:3},{value:"DeleteSubscriber",id:"deletesubscriber",level:3},{value:"CreateMsgSubscriberSuccess",id:"createmsgsubscribersuccess",level:3},{value:"CollectFee",id:"collectfee",level:3},{value:"State Variables and Functions",id:"state-variables-and-functions",level:2},{value:"State Variables",id:"state-variables-1",level:3},{value:"Functions",id:"functions",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messenger"},"Messenger"),(0,a.kt)("p",null,"This documentation provides a detailed overview of the Messenger contract, explaining its purpose, state variables, constructor, message types, and essential functions."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Messenger contract plays a crucial role in the Eventon protocol, serving as a means to send event signals to subscribers. Subscribers can subscribe or unsubscribe from events, and fees are collected from subscribers for the services provided. The Messenger contract is an integral part of the Eventon ecosystem, ensuring efficient event distribution."),(0,a.kt)("h2",{id:"contract-details"},"Contract Details"),(0,a.kt)("h3",{id:"state-variables"},"State Variables"),(0,a.kt)("p",null,"The Messenger contract includes several important state variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner"),": Address of the router (Owner of the messenger)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sourceAddress"),": Address of the protocol source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messengerId"),": Unique identifier for this messenger."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nextSubscriberId"),": ID for the next subscriber."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idToSubscriber"),": Mapping of Subscriber ID to its address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hashToSubscriber"),": Mapping of Hash (address & event ID) to subscription status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hashToSubscribeFee"),": Mapping of Hash (address & event ID) to subscription fee."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscriberCount"),": Total number of subscribers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribeFeePerTick"),": Fee per tick for subscription.")),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"The Messenger contract is initialized with the following parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"init(owner: Address, sourceAddress: Address, messengerId: Int) {\n    // Initialize contract state variables\n}\n")),(0,a.kt)("h2",{id:"message-types"},"Message Types"),(0,a.kt)("h3",{id:"buildmessenger"},"BuildMessenger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": This message type allows the owner to build the messenger for event distribution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sourceAddress: Address"),": The protocol's address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId: Int"),": The event ID to subscribe to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxUserStakeAmount: Int as coins"),": Maximum stake per user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribeFeePerTick: Int as coins"),": Subscription fee per tick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"template: Cell"),": Callback contract for subscribers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sourceName: String"),": The protocol's name.")))),(0,a.kt)("h3",{id:"eventsignal"},"EventSignal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": This message type sends an event signal to all subscribed users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId: Int"),": Protocol-defined event identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload: Cell"),": Optional information for subscribers.")))),(0,a.kt)("h3",{id:"createmsgsubscriber"},"CreateMsgSubscriber"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": This message type allows a subscriber to be added to the messenger."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"walletAddress: Address"),": Owner address of the callback contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callbackAddress: Address"),": UDC address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId: Int"),": The event ID to subscribe to.")))),(0,a.kt)("h3",{id:"deletesubscriber"},"DeleteSubscriber"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": This message type removes a subscriber from the messenger."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"walletAddress: Address"),": Owner address of the callback contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callbackAddress: Address"),": UDC address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventId: Int"),": The event ID to subscribe to.")))),(0,a.kt)("h3",{id:"createmsgsubscribersuccess"},"CreateMsgSubscriberSuccess"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": Notifies the successful creation of a message subscriber."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callbackAddress: Address"),": Owner address of the callback contract.")))),(0,a.kt)("h3",{id:"collectfee"},"CollectFee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": This message type collects fees from subscribers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messengerId: Int"),": Messenger ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fee: Int as coins"),": Amount of fee from subscribers to be collected.")))),(0,a.kt)("h2",{id:"state-variables-and-functions"},"State Variables and Functions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Messenger")," contract contains essential state variables and functions, enabling its operation within the Eventon protocol:"),(0,a.kt)("h3",{id:"state-variables-1"},"State Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"owner: Address"),": Represents the address of the router, signifying the owner of the messenger contract.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sourceAddress: Address"),": Denotes the address of the protocol source, indicating the source associated with this messenger contract.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"messengerId: Int"),": A unique identifier assigned to this messenger contract, facilitating its distinction within the protocol.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"nextSubscriberId: Int"),": An integer representing the ID for the next subscriber to the messenger contract.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"idToSubscriber: map<Int, Address>"),": A mapping associating Subscriber IDs with their respective addresses, allowing for efficient subscriber management.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hashToSubscriber: map<Int, Int>"),": A mapping associating a unique hash (generated from the combination of an address and event ID) with subscription status, enabling tracking of subscriber statuses.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hashToSubscribeFee: map<Int, Int>"),": A mapping associating a unique hash (generated from the combination of an address and event ID) with subscription fees, facilitating fee collection from subscribers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"subscriberCount: Int"),": Represents the total number of subscribers currently registered with the messenger contract.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"subscribeFeePerTick: Int"),": Specifies the fee per tick for subscription, indicating the cost subscribers must pay for the services provided."))),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"init(owner: Address, sourceAddress: Address, messengerId: Int)"),": Constructor function that initializes the messenger contract with essential parameters, including the owner's address, source address, and a unique messenger ID.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"receive()"),": A function to receive funds, allowing the contract to accept incoming transactions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"idToSubscriber(id: Int): Address?"),": A getter function that retrieves the address of a subscriber based on their associated Subscriber ID. Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the ID is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getsubId(): Int"),": A getter function that fetches the next available Subscriber ID, aiding in subscriber management.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getSubCount(): Int"),": A getter function that retrieves the total number of subscribers registered with the messenger contract."))),(0,a.kt)("p",null,"These state variables and functions collectively enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"Messenger")," contract to send event signals to subscribers, manage subscriptions, and collect fees for its services within the Eventon protocol."))}d.isMDXComponent=!0}}]);