(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[742],{817:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return g},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(3456),s=["components"],l={sidebar_position:2},d="Leveraged staking",u={unversionedId:"strategies/leveraged-staking",id:"strategies/leveraged-staking",title:"Leveraged staking",description:"Allowing traders to multiply their staking returns",source:"@site/docs/strategies/leveraged-staking.md",sourceDirName:"strategies",slug:"/strategies/leveraged-staking",permalink:"/docs/strategies/leveraged-staking",editUrl:"https://github.com/ithil-protocol/docs/docs/strategies/leveraged-staking.md",tags:[],version:"current",lastUpdatedAt:1660228486,formattedLastUpdatedAt:"8/11/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Margin trading",permalink:"/docs/strategies/margin-trading"},next:{title:"Boosted balancer",permalink:"/docs/strategies/boosted-balancer"}},g=[{value:"Implementations",id:"implementations",children:[],level:2}],c={toc:g};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"leveraged-staking"},"Leveraged staking"),(0,i.kt)("p",null,"Allowing traders to multiply their staking returns"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocols to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents a net profit for the user."),(0,i.kt)(o.Mermaid,{config:{},chart:"sequenceDiagram\n    User->>+Strategy: Open position\n    Strategy->>+Protocol: Stakes\n    Protocol--\x3e>-Strategy: Obtain yield-bearing tokens\n    User->>+Strategy: Close position\n    Strategy->>+Protocol: Unstakes\n    Protocol--\x3e>-Strategy: Send underlying tokens\n    Strategy->>+User: Take eventual profit",mdxType:"Mermaid"}),(0,i.kt)("p",null,"Let us make a numerical example using DAI and Yearn."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A user posts a margin of 100 DAI to the YearnStrategy (a type of LSS) contract and decides to stake DAI on an external protocol like Yearn with a 10x leverage."),(0,i.kt)("li",{parentName:"ul"},"The LSS contract will borrow 900 DAI from the vault and stake the 1000 DAI on Yearn, obtaining say 1000 yDAI, the wrapped tokens representing the stake."),(0,i.kt)("li",{parentName:"ul"},"Assume that, after one month, the rolling APR of Yearn hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. "),(0,i.kt)("li",{parentName:"ul"},"If the user closes its position, the 1000 yDAI will be redeemed on Yearn to obtain 1050 DAI, while the vault has to be repaied of 927 DAI (900 DAI borrowed, plus 3%). The remaining 123 DAI are given back to the user, who will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.")),(0,i.kt)("p",null,"If the price per share increases less than the applied interest rate, the user may lose money.\nIf the interest accrued go above some critical level, the position will be liquidated."),(0,i.kt)("h2",{id:"implementations"},"Implementations"),(0,i.kt)("p",null,"Currently the following protocols support a leveraged staking strategy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yearn (",(0,i.kt)("em",{parentName:"li"},"automated investment vaults"),") - ",(0,i.kt)("a",{parentName:"li",href:"https://yearn.finance"},"yearn.finance")),(0,i.kt)("li",{parentName:"ul"},"Euler (",(0,i.kt)("em",{parentName:"li"},"overcollateralised lending protocol"),") - ",(0,i.kt)("a",{parentName:"li",href:"https://euler.finance"},"euler.finance"))))}p.isMDXComponent=!0},1748:function(e,t,n){var a={"./locale":9234,"./locale.js":9234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=1748}}]);