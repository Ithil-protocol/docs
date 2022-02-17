"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Introduction",d={unversionedId:"intro",id:"intro",title:"Introduction",description:"What is it all about?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ithil-protocol/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial",permalink:"/docs/tutorial"}},c=[{value:"Getting Started",id:"getting-started",children:[{value:"Key takeaways",id:"key-takeaways",children:[],level:3},{value:"Long-term vision",id:"long-term-vision",children:[],level:3},{value:"Why is Ithil different from other protocols on the market",id:"why-is-ithil-different-from-other-protocols-on-the-market",children:[],level:3}],level:2},{value:"Who is behind it",id:"who-is-behind-it",children:[{value:"How can I get in touch with you",id:"how-can-i-get-in-touch-with-you",children:[],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"What is it all about?"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Ithil protocol is a ",(0,o.kt)("strong",{parentName:"p"},"permissionless trading aggregator")," created to help users optimise their income via a multitude of vetted strategies running cross-chain.\nUsers can choose a specific strategy depending on the possible profit vs risks, tweak a few parameters and easily place it via the frontend without worrying about which chain they will be executed. Open positions can be closed at any time and can benefit from an undercollateralised leverage up to 10X for the bravest.\nIthil supports almost any ERC20 tokens and offers a stable yield for liquidity providers willing to lend their assets to traders. The protocol takes a fixed and a percentual fee on borrowed assets and redistributes it to governance token holders and a small percentage to the developers behind it. We make strategies simple and intuitive for any investor to take part in: via a set of smart contracts and several investment strategies, Ithil help users maximise their rewards from various liquidity pools (LPs), automated market makers (AMM), yield aggregators, staking pools and other income bearing opportunities in the DeFi ecosystem. This way we provide a huge advantage over attempting to do this manually yourself and risking losing all your assets."),(0,o.kt)("h3",{id:"key-takeaways"},"Key takeaways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Internal undercollateralised leverage system"),(0,o.kt)("li",{parentName:"ul"},"Trade any ERC20 token, including meme/gaming tokens and fractionalised NFTs"),(0,o.kt)("li",{parentName:"ul"},"Fully on-chain, can be integrated in other protocols"),(0,o.kt)("li",{parentName:"ul"},"Gas optimisation and liquidity aggregation via multi-chain routing"),(0,o.kt)("li",{parentName:"ul"},"Efficient liquidation via a network of bots that anyone can run"),(0,o.kt)("li",{parentName:"ul"},"Several strategies to choose from, with different risk and reward levels")),(0,o.kt)("h3",{id:"long-term-vision"},"Long-term vision"),(0,o.kt)("p",null,"We envision to build a self-sovereign DAO - a decentralised autonomous organisation - with a thriving community of traders, LPs as well as people who put in work for the advancement of the protocol itself. As a reward, these contributors will be paid in governance tokens. We foresee onboard designers, developers, financial experts, traders and marketers to work on several different side-projects and spin-offs like adding new strategies. Thanks to the community, the protocol will constantly enrich with new strategies by using community inputs as a way to democratise and distribute the development and progress of Ithil itself."),(0,o.kt)("h3",{id:"why-is-ithil-different-from-other-protocols-on-the-market"},"Why is Ithil different from other protocols on the market"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-chain")," diversified portfolio of popular DeFi ",(0,o.kt)("strong",{parentName:"li"},"strategies"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Undercollateralised leverage")," to boost your profits."),(0,o.kt)("li",{parentName:"ul"},"The protocol is chain-independent, you can execute a strategy on Polygon while having your assets on Ethereum mainnet"),(0,o.kt)("li",{parentName:"ul"},"Liquidity providers get ",(0,o.kt)("strong",{parentName:"li"},"rewarded with their favourite token"),", thus allowing them to stake virtually any crypto asset (supported by Ithil). Usually, other protocols reward liquidity providers with governance tokens."),(0,o.kt)("li",{parentName:"ul"},"Flexible trading experience with (almost) ",(0,o.kt)("strong",{parentName:"li"},"any type of token allowed as margin"),", sophisticated charts, and good market rates will attract more traders to us. Typical margin trading platforms are hard to use, gas intensive, and ultimately unattractive or just support a handful of tokens."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"governance token will be inflationary"),": backed by the protocol earnings and giving opportunity to earn even more by providing support to the platform.")),(0,o.kt)("h2",{id:"who-is-behind-it"},"Who is behind it"),(0,o.kt)("p",null,"The idea started when three developers with diverse backgrounds met during a hackathon. In our discussions, it was clear that the DeFi world lacked a consistent way to provide liquidity and earn income in the same token staked and that the existing protocols are so rigid in nature, that they struggle to keep pace with the fast growing DeFi world. At the same time, most investors were struggling to find easy ways to execute repetitive strategies on multiple chains.\nWe iterated on that, took some ideas from traditional finance and translated them into crypto language: our goal was initially to create a platform which only allowed margin trading, but we then realized that our project had much bigger potential since the earning system of the vault (the core of our protocol) is agnostic of the investment activity. Now that the core is robust and well-refined, we are heading to creating the largest diversified investment platform available in the market.\nWe prefer to stay anonymous as want the project and its DAO to be the real and public facade and by being anon the team can totally focus on providing value to the community."),(0,o.kt)("h3",{id:"how-can-i-get-in-touch-with-you"},"How can I get in touch with you"),(0,o.kt)("p",null,"We are available on Discord or Twitter, ping us there and we will be happy to answer!"))}p.isMDXComponent=!0}}]);