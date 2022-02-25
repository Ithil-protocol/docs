"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[542],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Undercollateralized loans",c={unversionedId:"protocol-overview/undercollateralized-loans",id:"protocol-overview/undercollateralized-loans",title:"Undercollateralized loans",description:"---",source:"@site/docs/protocol-overview/undercollateralized-loans.md",sourceDirName:"protocol-overview",slug:"/protocol-overview/undercollateralized-loans",permalink:"/docs/protocol-overview/undercollateralized-loans",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/undercollateralized-loans.md",tags:[],version:"current",lastUpdatedAt:1645809323,formattedLastUpdatedAt:"2/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"leveraged-investmets",permalink:"/docs/protocol-overview/leveraged-investmets"},next:{title:"leveraged-staking",permalink:"/docs/strategies/leveraged-staking"}},d=[{value:"Ithil&#39;s vault and fees",id:"ithils-vault-and-fees",children:[],level:3},{value:"LP tokens",id:"lp-tokens",children:[],level:3}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"undercollateralized-loans"},"Undercollateralized loans"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In order to allow the users to perform leveraged investments, Ithil adopts a system of ",(0,a.kt)("strong",{parentName:"p"},"internal undercollateralized loans"),", in which the amount internally transferred from the vault to the strategy is higher than the margin posted by the user. This is possible because the assets resulting from this loan are locked into the strategy: they do not go outside Ithil's contracts."),(0,a.kt)("p",null,"Any user can supply any supported ERC20 token to the protocol, regardless of which chain their tokens live upon. The fees generated by the traders' activity will be redistributed to LPs, so that their staked assets will increase in number. If you give DAI, you will receive more DAI. No synth assets or strange tokens to swap.\nLPs will receive a yield-bearing token representing their deposit, that can be exchanged on dexes, used as collateral or put into farming on other DeFi protocols. When a LP wants to redeem their staked tokens, their yield-bearing tokens will be burned and the underlying liquidity will be transfered with the fees accrued."),(0,a.kt)("h3",{id:"ithils-vault-and-fees"},"Ithil's vault and fees"),(0,a.kt)("p",null,"The lending contract is the ",(0,a.kt)("strong",{parentName:"p"},"vault"),", into which ",(0,a.kt)("strong",{parentName:"p"},"liquidity providers")," can stake their tokens and get the fees and interest generated by the investments. The list of supported, or ",(0,a.kt)("strong",{parentName:"p"},"whitelisted")," tokens is managed by the governance following security and market criteria. All whitelisted tokens can be staked in the vault, thus making Ithil a good choice to get APY ",(0,a.kt)("em",{parentName:"p"},"in virtually any token"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Staking",src:n(3608).Z,width:"2443",height:"674"})),(0,a.kt)("p",null,"The liquidity given to the strategy in the form of loans is protected by the user's margin and by ",(0,a.kt)("strong",{parentName:"p"},"liquidators"),", which close the positions whose margin has been eroded by more than a strategy-specific ",(0,a.kt)("strong",{parentName:"p"},"risk factor"),", and get rewarded for this. Since, due to very unfavorable market conditions, liquidators may fail to properly liquidate a given position, the vault's liquidity is further protected via the ",(0,a.kt)("strong",{parentName:"p"},"insurance reserve"),": governance-owned liquidity which is used to restore a liquidity loss due to a bad liquidation. The amount of the insurance reserve is adjusted ",(0,a.kt)("em",{parentName:"p"},"algorithmically")," to insure good capital protection and at the same time a competitive interest rate for liquidity providers."),(0,a.kt)("p",null,"When a loan is taken from a strategy, the vaults computes the interest rate at which the loan is taken. This is calculated taking several factors into account:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The riskiness of an investment, captured in a number called ",(0,a.kt)("strong",{parentName:"li"},"risk factor"),". "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"usage"),", which is the amount of open loans with respect to the vault's free liquidity."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"uninsured portion")," of the vault, which is the percentage of the vault's balance which is not insurance reserve."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"collateralization")," of the position, which is the ratio between the borrowed amount and the margin (denominated in borrowed tokens).\nThe final interest rate is then directly proportional to these four numbers, i.e. it's the multiplication of all of them renormalized by a global factor. The interest rate is computed considering the vault state at the opening of a position, while the due fees are calculated at the closure of the same position.")),(0,a.kt)("p",null,"Finally, a small fixed fee is set by the governance and it is charged as a percentage of the borrowed amount, regardless of the duration of the position. This reduces the economic rationale of potential attacks in which positions are open and closed immediately."),(0,a.kt)("p",null,"Since taking a loan when the vault is almost totally used is extremely costly, this formula assures that there will likely be some amount of free liquidity which can be ",(0,a.kt)("em",{parentName:"p"},"redeemed")," at any time by liquidity providers. If all free liquidity has been withdrawn by LPs, as some positions are closed it will be costly to open new ones, thus again assuring, after a short period of time, the availability of further liquidity to support withdrawals, in a positive feedback cycle."),(0,a.kt)("p",null,"When a position is closed and fees are paid to the vault, a portion of them go to the insurance reserve. This portion is algorithmically computed to make the insurance reserve ratio converge towards an ",(0,a.kt)("strong",{parentName:"p"},"optimal ratio"),": at the optimal ratio, the fees going to the insurance reserve are at a minimum, and the governance has the right of redeeming the excess insurance reserve (but not beyond the optimal ratio)."),(0,a.kt)("h3",{id:"lp-tokens"},"LP tokens"),(0,a.kt)("p",null,"In order to assure a fair and gas-efficient fees distribution method, Ithils adopts the classical method of LP tokens, which are minted to liquidity providers in a quantity reflecting the ",(0,a.kt)("em",{parentName:"p"},"share price")," of the given LP token. The ",(0,a.kt)("strong",{parentName:"p"},"total wealth")," of the vault is the quantity of tokens deposited in total by liquidity providers, plus all fees generated and not claimed. This can be calculated as the total balance excluding governance-owned liquidity, plus the open loans. When a liquidity provider deposits some amount of TKA, then some amount of LP tokens iTKA will be minted, calculated as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LP tokens",src:n(1856).Z,width:"1085",height:"429"})),(0,a.kt)("p",null,"Similarly, an holder of iTKA can burn at any time its tokens, thus receiving a transfer of TKA calculated as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unstaking",src:n(9025).Z,width:"1158",height:"420"})),(0,a.kt)("p",null,"The factor of the burned amount in the previous formula is the ",(0,a.kt)("strong",{parentName:"p"},"share price")," of the LP token considered.\nIn this way, a liquidity provider trying to deposit and withdraw immediately some funds, will receive exactly the same amount deposited, and only the fees generated ",(0,a.kt)("em",{parentName:"p"},"after")," the deposit will contribute to the provider's APY: no arbitrage is possible. Moreover, a simple calculation shows that neither deposits nor withdrawals change the share price, thus the effect of a liquidity provider withdrawing or deposit is not seen by others."))}h.isMDXComponent=!0},1856:function(e,t,n){t.Z=n.p+"assets/images/lp-tokens-7ef7ba21c0d1b0d53745849890f0f751.png"},3608:function(e,t,n){t.Z=n.p+"assets/images/staking-3c8c56e00c1846284635ee22b34c43a8.png"},9025:function(e,t,n){t.Z=n.p+"assets/images/unstaking-e49f01405de945485a47802ba5a879b9.png"}}]);