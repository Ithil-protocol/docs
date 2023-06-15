"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[302],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4091:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:2},s="WizarDex",c={unversionedId:"other/wizardex",id:"other/wizardex",title:"WizarDex",description:"A fully on-chain prioritised orderbook model DEX",source:"@site/docs/other/wizardex.md",sourceDirName:"other",slug:"/other/wizardex",permalink:"/docs/other/wizardex",editUrl:"https://github.com/ithil-protocol/docs/docs/other/wizardex.md",tags:[],version:"current",lastUpdatedAt:1686821149,formattedLastUpdatedAt:"6/15/2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Call option",permalink:"/docs/services/call-option"},next:{title:"FAQ",permalink:"/docs/faq"}},d=[{value:"Architecture and Design",id:"architecture-and-design",children:[],level:2},{value:"Features",id:"features",children:[{value:"Orderbook Functionality",id:"orderbook-functionality",children:[],level:3},{value:"Order Priority System",id:"order-priority-system",children:[],level:3},{value:"Take-Profit Order Type",id:"take-profit-order-type",children:[],level:3},{value:"User Interface",id:"user-interface",children:[],level:3}],level:2}],u={toc:d};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wizardex"},"WizarDex"),(0,o.kt)("p",null,"A fully on-chain prioritised orderbook model DEX "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"architecture-and-design"},"Architecture and Design"),(0,o.kt)("p",null,"WizarDex is built on the Arbitrum blockchain and utilizes smart contracts for its orderbook functionality. It is designed to be a public good project, offering a fee-free, token-free, and governance-free DEX experience. The code is immutable, ensuring the transparency and security of the platform."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"WizarDex offers a number of unique features, including:"),(0,o.kt)("h3",{id:"orderbook-functionality"},"Orderbook Functionality"),(0,o.kt)("p",null,"WizarDex leverages a fully on-chain orderbook, meaning all order matching and computation occurs directly on the blockchain. This eliminates the need for off-chain processing, ensuring transparency and trustlessness."),(0,o.kt)("h3",{id:"order-priority-system"},"Order Priority System"),(0,o.kt)("p",null,"Market participants have the option to boost their orders by adding ETH to gain priority execution. This liquidity contribution helps reduce slippage and improves order execution. The amount of ETH added determines the order's position in the queue, with higher ETH amounts moving orders up the priority list."),(0,o.kt)("h3",{id:"take-profit-order-type"},"Take-Profit Order Type"),(0,o.kt)("p",null,"WizarDex currently supports take-profit orders, enabling traders and investors to automatically buy or sell at predefined price levels. This feature is particularly useful for managing trading strategies and minimizing exposure to centralized risks. Future upgrades may include support for stop-loss orders."),(0,o.kt)("h3",{id:"user-interface"},"User Interface"),(0,o.kt)("p",null,"WizarDex provides a comprehensive user interface, offering a fully-fledged trading experience similar to centralized exchanges. Some of the key features available on the interface include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Orderbook and Depth"),": Users can view the current orderbook and depth to gain insights into market liquidity and price levels."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Built-in TradingView"),": WizarDex integrates with TradingView, providing advanced charting and technical analysis tools for users."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Order Placement"),": Users can easily place buy or sell orders through the intuitive interface, specifying the desired token and quantity."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Open Orders and Order History"),": A clear overview of open orders and order history is available, allowing users to track their trades."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Market Trades Overview"),": Users can review recent trades within the market, enabling them to stay informed about price movements and market activity.")))}p.isMDXComponent=!0}}]);