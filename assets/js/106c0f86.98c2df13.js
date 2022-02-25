"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[120],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return i?o.createElement(f,a(a({ref:t},u),{},{components:i})):o.createElement(f,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2183:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=i(7462),r=i(3366),n=(i(7294),i(3905)),a=["components"],s={sidebar_position:1},l=void 0,c={unversionedId:"protocol-overview/liquidations",id:"protocol-overview/liquidations",title:"liquidations",description:"Liquidations",source:"@site/docs/protocol-overview/liquidations.md",sourceDirName:"protocol-overview",slug:"/protocol-overview/liquidations",permalink:"/docs/protocol-overview/liquidations",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/liquidations.md",tags:[],version:"current",lastUpdatedAt:1645809699,formattedLastUpdatedAt:"2/25/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/protocol-overview/how-it-works"},next:{title:"abstract-strategies",permalink:"/docs/protocol-overview/abstract-strategies"}},u=[{value:"Liquidations",id:"liquidations",children:[],level:2}],d={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"liquidations"},"Liquidations"),(0,n.kt)("p",null,"Liquidations are a fundamental part in the echosystem: closing positions getting too close to having their margin completely eroded (more precisely, beyond a strategy-specific percentage called the ",(0,n.kt)("strong",{parentName:"p"},"risk factor"),"), they protect the vault's liquidity and prevent the share price of LP tokens to decrease. In this way, liquidity providers are guaranteed to receive a positive APY with a very low risk."),(0,n.kt)("p",null,"Ithil's liquidation system is completely decentralised and onchain: anyone which holds a sufficient amount of Ithil's governance token can launch Ithil's liquidation functions which will check onchain, using the ",(0,n.kt)("em",{parentName:"p"},"quoter")," function of the particular strategy, if a given position is liquidable. Liquidators can close one or more positions in one go, thus saving gas and performing a faster liquidation. Once a position is liquidated, the part of the margin which is not eroded is transferred in full to the liquidator: in this way, a faster liquidation will assure the liquidator a higher reward. If the margin is not sufficient to reward the liquidator, we consider this a ",(0,n.kt)("strong",{parentName:"p"},"bad liquidation"),": in this case, a part of the insurance reserve is used to restore the eventual liquidity loss and to compensate the liquidator."),(0,n.kt)("p",null,"Liquidation is therefore a profitable activity: the best liquidator will have fast and precise bots which quickly identify liquidable positions and launch the liquidation process. Precision is important because, if a liquidator tries to close a non-liquidable position, the liquidation does not take place and the gas is lost.+"),(0,n.kt)("p",null,"There are three possible liquidations to be performed on Ithil."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Closing positions"),": the liquidator closes one or more positions in behalf of the users, getting the users' margins or part of the insurance reserve if this is not enough. This is the most gas-intensive and risky (closing big positions can have a large market impact, thus reducing the reward), but the potential gains are higher."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Margin calls"),": the liquidator tops up the position's margin and becomes the owner of the position. This is the cheapest and less gas-intensive form of liquidation, moreover in this way the liquidator can enter the same investment as the previous user, thus if market moves favorably an easy gain can be done. However, the risk for the liquidator is to be in turn liquidated if the market moves unfavorably."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total cover"),": the liquidator repays the loan and the fees to the vault and receives the assets locked in the strategy in her or his wallet. This stands in the middle in terms of gas and leaves to the liquidator the choice to arbitrage by immediately selling the received assets, or keeping them for another purpose.")),(0,n.kt)("p",null,"In order to liquidate, liquidators need to stake their Ithil's governance tokens in the liquidation contract: when a good amount of liquidations have been performed, such governance tokens can be withdrawn."))}p.isMDXComponent=!0}}]);