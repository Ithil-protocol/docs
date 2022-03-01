"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Litepaper",c={unversionedId:"intro",id:"intro",title:"Litepaper",description:"---",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ithil-protocol/docs/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1646145902,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"FAQ",permalink:"/docs/faq"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Key takeaways",id:"key-takeaways",children:[],level:3},{value:"Why is Ithil different from other protocols on the market",id:"why-is-ithil-different-from-other-protocols-on-the-market",children:[],level:3}],level:2},{value:"Who is behind it",id:"who-is-behind-it",children:[{value:"How can I get in touch with you",id:"how-can-i-get-in-touch-with-you",children:[],level:3}],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"litepaper"},"Litepaper"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Ithil is a ",(0,i.kt)("strong",{parentName:"p"},"generalised leveraged investments protocol")," allowing liquidity providers to stake any ERC20 token and earn fees in that same  (eg. stake DAI get more DAI, put SHIBA get more SHIBA) and to traders to use the available liquidity to run investments with a higher capital than their initial one (i.e. ",(0,i.kt)("em",{parentName:"p"},"a leverage"),"). This is possible thanks to internal ",(0,i.kt)("strong",{parentName:"p"},"undercollateralised loans")," where the protocol ",(0,i.kt)("em",{parentName:"p"},"Vault")," makes its liquidity available to the traders to run investment ",(0,i.kt)("em",{parentName:"p"},"strategies"),", which will eventually repay the loan and deliver the profits, if any, to the trader. In order to use the vault's liquidity, the trader needs to pay a ",(0,i.kt)("strong",{parentName:"p"},"margin")," to the desired investment strategy: it will cover eventual losses, but it is given back to the trader in full in case of a profitable investment. When the value of an investment falls behind some critical threshold, external ",(0,i.kt)("strong",{parentName:"p"},"liquidators")," can forcefully close the position, getting a reward by doing so.\nThe vault's liquidity is given by ",(0,i.kt)("strong",{parentName:"p"},"liquidity providers"),", which stake any ERC20 token in the vault and earn the fees generated by the investment process. ",(0,i.kt)("strong",{parentName:"p"},"Governance token")," holders can stake their tokens to perform decentralised liquidation and get rewards in the vault's tokens and can cast their vote in the DAO. A simple and solid backing system mathematically insures the dollar value of the governance token can only increase and never go below a certain floor, thus privileging holders committing to Ithil's community for a long time."),(0,i.kt)("p",null,"With Ithil, we bring a new generation experience of DeFi investments, thanks to undercollateralised loans and an unmatched protection and growth system. Thanks to the leverage, all users can earn high profits only from their own market insights, even if their initial wealth is not high. Liquidations and fair distribution make Ithil attractive also for stakers willing to have a slow and steady return on ",(0,i.kt)("em",{parentName:"p"},"any")," token (a rare possibility in the DeFi world), while a solid tokenomics and a mathematically increasing backing will make investing in ITH a no-brainer."),(0,i.kt)("h3",{id:"key-takeaways"},"Key takeaways"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Internal undercollateralised leverage system"),(0,i.kt)("li",{parentName:"ul"},"Trade any ERC20 token, including meme/gaming tokens and fractionalised NFTs"),(0,i.kt)("li",{parentName:"ul"},"Fully on-chain, can be integrated in other protocols"),(0,i.kt)("li",{parentName:"ul"},"Gas optimisation and liquidity aggregation via multi-chain routing"),(0,i.kt)("li",{parentName:"ul"},"Efficient liquidation via a network of bots that anyone can run"),(0,i.kt)("li",{parentName:"ul"},"Several strategies to choose from, with different risk and reward levels")),(0,i.kt)("h3",{id:"why-is-ithil-different-from-other-protocols-on-the-market"},"Why is Ithil different from other protocols on the market"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross-chain")," diversified portfolio of popular DeFi ",(0,i.kt)("strong",{parentName:"li"},"strategies"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Undercollateralised leverage")," to boost your profits."),(0,i.kt)("li",{parentName:"ul"},"The protocol is chain-independent, you can execute a strategy on Polygon while having your assets on Ethereum mainnet"),(0,i.kt)("li",{parentName:"ul"},"Liquidity providers get ",(0,i.kt)("strong",{parentName:"li"},"rewarded with their favourite token"),", thus allowing them to stake virtually any crypto asset (supported by Ithil). Usually, other protocols reward liquidity providers with governance tokens."),(0,i.kt)("li",{parentName:"ul"},"Flexible trading experience with (almost) ",(0,i.kt)("strong",{parentName:"li"},"any type of token allowed as margin"),", sophisticated charts and good market rates will attract more traders to us. Typical margin trading platforms are hard to use, gas intensive and ultimately unattractive or just support a handful of tokens."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"governance token will be inflationary"),": backed by the protocol earnings and giving opportunity to earn even more by providing support to the platform.")),(0,i.kt)("h2",{id:"who-is-behind-it"},"Who is behind it"),(0,i.kt)("p",null,"The idea started when three developers with diverse backgrounds met during a hackathon. In our discussions, it was clear that the DeFi world lacked a consistent way to provide liquidity and earn income in the same token staked and that the existing protocols are so rigid in nature, that they struggle to keep pace with the fast growing DeFi world. At the same time, most traders were struggling to find easy ways to execute repetitive strategies on multiple chains.\nWe iterated on that, took some ideas from traditional finance and translated them into crypto language: our goal was initially to create a platform which only allowed margin trading, but we then realised that our project had much bigger potential since the earning system of the vault (the core of our protocol) is agnostic of the investment activity. Now that the core is robust and well-refined, we are heading to creating the largest diversified investment platform available in the market.\nWe prefer to stay anonymous as want the project and its DAO to be the real and public facade and by being anon the team can totally focus on providing value to the community."),(0,i.kt)("h3",{id:"how-can-i-get-in-touch-with-you"},"How can I get in touch with you"),(0,i.kt)("p",null,"We are available on Discord or Twitter, ping us there and we will be happy to answer!"))}h.isMDXComponent=!0}}]);