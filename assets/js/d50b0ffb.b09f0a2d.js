(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[657],{4783:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return v}});var o=r(7462),n=r(3366),s=(r(7294),r(3905)),i=r(3456),a=["components"],u={sidebar_position:3},c="Curve Wars",d={unversionedId:"strategies/curve-wars",id:"strategies/curve-wars",title:"Curve Wars",description:"Get exposure to the most popular battleground of Defi",source:"@site/docs/strategies/curve-wars.md",sourceDirName:"strategies",slug:"/strategies/curve-wars",permalink:"/docs/strategies/curve-wars",editUrl:"https://github.com/ithil-protocol/docs/docs/strategies/curve-wars.md",tags:[],version:"current",lastUpdatedAt:1657638698,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Leveraged staking",permalink:"/docs/strategies/leveraged-staking"},next:{title:"FAQ",permalink:"/docs/faq"}},l=[],p={toc:l};function v(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"curve-wars"},"Curve Wars"),(0,s.kt)("p",null,"Get exposure to the most popular battleground of Defi"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Curve finance is a popular decentralised exchange optimised for stablecoin swaps with more than $5bn in TVL.\nIts tokenomics was designed to incentivise users to hold the CRV governance token in a staked representation, the ve-model, to vote on which pool to boost by enabling extra rewards. This system creates a huge pressure for DAOs and protocols looking to create a deep liquidity pool to make sure their pool is always voted."),(0,s.kt)("p",null,"To satisfy this need, other protocols like Convex were built to ammass large number of Curve governance tokens to reorient LP rewards in exchange of payments to the liquidity providers themselves (the so-called ",(0,s.kt)("em",{parentName:"p"},"bribes"),")."),(0,s.kt)("p",null,"Ithil offers users the opportunity to profit from this ecosystem without diving deep into the intricacies of each involved protocol. By providing single-sided liquidity to Curve and staking the resulting LP-token onto Convex, users can benefit from rewards coming from both platforms, besides the traditional swap fees accrued by the DEX activity."),(0,s.kt)(i.Mermaid,{config:{},chart:"sequenceDiagram\n    User->>+Strategy: Open position\n    Strategy->>+Curve: Add liquidity\n    Curve--\x3e>-Strategy: Obtain LP tokens\n    Strategy->>+Convex: Stake Curve LP tokens\n    User->>+Strategy: Close position\n    Strategy->>+Convex: Unstake\n    Convex--\x3e>-Strategy: Obtain Curve LP tokens\n    Strategy->>+Curve: Remove liquidity\n    Curve--\x3e>-Strategy: Get tokens back\n    Strategy->>+Dex: Swap reward tokens\n    Dex--\x3e>-Strategy: Obtain tokens\n    Strategy->>-User: Take eventual profit",mdxType:"Mermaid"}))}v.isMDXComponent=!0},1748:function(e,t,r){var o={"./locale":9234,"./locale.js":9234};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=s,e.exports=n,n.id=1748}}]);