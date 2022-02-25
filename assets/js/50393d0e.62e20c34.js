"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[901],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9156:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l=void 0,c={unversionedId:"protocol-overview/strategies/margin-trading",id:"protocol-overview/strategies/margin-trading",title:"margin-trading",description:"Enabling traders to go long or short on any token pair",source:"@site/docs/protocol-overview/strategies/margin-trading.md",sourceDirName:"protocol-overview/strategies",slug:"/protocol-overview/strategies/margin-trading",permalink:"/docs/protocol-overview/strategies/margin-trading",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/strategies/margin-trading.md",tags:[],version:"current",lastUpdatedAt:1645807664,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"leveraged-investmets",permalink:"/docs/protocol-overview/strategies/leveraged-investmets"}},d=[{value:"Risk Factor",id:"risk-factor",children:[],level:2},{value:"Notes",id:"notes",children:[{value:"Taxed and rebasing tokens",id:"taxed-and-rebasing-tokens",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enabling traders to go long or short on any token pair"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Margin trading is a way of trading assets using funds provided by a third party lender. Compared to regular trading where traders use their own assets, margin accounts allow to access greater sums of capital, so that they can leverage their positions increasing market exposure. Essentially, margin trading amplifies trading results so that traders can get bigger profits on successful trades.\nIt is the first and foremost strategy of Ithil and the best way to get into investing in a simple way."),(0,a.kt)("h2",{id:"risk-factor"},"Risk Factor"),(0,a.kt)("p",null,"The risk factor of r for a given token pair, means that for a position with that token pair to be liquidable, must incur a loss of at least (100-r)%.\nSuch number is dependant on the specific token: a more volatile token will have a higher risk factor. Then the actual risk factor of the pair, which is applied for liquidation, will be some sort of average (arithmetic, geometric, p-means...) of the two risk factors. The logic behind is that, the higher the token volatility, the more likely the value of the entitlement will fall below the threshold defined by the risk factor, and we do not want that a more likely event will trigger a liquidation (otherwise, too many positions will be liquidable, which we want to avoid)."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("h3",{id:"taxed-and-rebasing-tokens"},"Taxed and rebasing tokens"),(0,a.kt)("p",null,"Tokens like Floki Inu have a system where on each transfer a percentage from the transfer is redistributed to all token holders and a percentage is sent to the token creator. This way the holders' token balance increases day by day while transactions don't give the exact amount to the recipient. Rebasing tokens, on the other hand, regularly increase the amount of all token holders. An example of that is the Origin Dollar OUSD algorithmic stablecoin.\nThanks to an internal accounting system, Ithil supports this type of tokens and ensures accrued rebasing fees are properly distributed to LPs or traders, depending on the case."))}p.isMDXComponent=!0}}]);