(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[120],{2183:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=i(7462),n=i(3366),a=(i(7294),i(3905)),r=i(3456),s=["components"],l={sidebar_position:5},d="Liquidations",u={unversionedId:"protocol-overview/liquidations",id:"protocol-overview/liquidations",title:"Liquidations",description:"If you know them, you avoid them",source:"@site/docs/protocol-overview/liquidations.md",sourceDirName:"protocol-overview",slug:"/protocol-overview/liquidations",permalink:"/docs/protocol-overview/liquidations",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/liquidations.md",tags:[],version:"current",lastUpdatedAt:1668504178,formattedLastUpdatedAt:"11/15/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Strategies",permalink:"/docs/protocol-overview/strategies"},next:{title:"Governance",permalink:"/docs/protocol-overview/governance"}},c=[{value:"Types of liquidations",id:"types-of-liquidations",children:[],level:2}],h={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"liquidations"},"Liquidations"),(0,a.kt)("p",null,"If you know them, you avoid them"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Liquidations are a fundamental part in the echosystem: closing positions getting too close to having their margin completely eroded (more precisely, beyond a strategy-specific percentage called the ",(0,a.kt)("strong",{parentName:"p"},"risk factor"),"), they protect the vault's liquidity and prevent the share price of LP tokens to decrease. In this way, liquidity providers are guaranteed to receive a positive APY with a very low risk."),(0,a.kt)(r.Mermaid,{config:{},chart:"graph TD\n    A[Position] --\x3e B{Status}\n    B --\x3e |PnL > collateral| C[Profit]\n    B --\x3e |PnL < collateral| D[Loss]\n    B --\x3e |PnL < collateral x riskFactor| E[Liquidation]",mdxType:"Mermaid"}),(0,a.kt)("p",null,"Ithil's liquidation system is completely decentralised and onchain: anyone which holds a sufficient amount of Ithil's governance token can launch Ithil's liquidation functions which will check onchain, using the ",(0,a.kt)("em",{parentName:"p"},"quoter")," function of the particular strategy, if a given position is liquidable. Liquidators can close one or more positions in one go, thus saving gas and performing a faster liquidation. Once a position is liquidated, the part of the margin which is not eroded is transferred in full to the liquidator: in this way, a faster liquidation will assure the liquidator a higher reward. If the margin is not sufficient to reward the liquidator, we consider this a ",(0,a.kt)("strong",{parentName:"p"},"bad liquidation"),": in this case, a part of the insurance reserve is used to restore the eventual liquidity loss and to compensate the liquidator."),(0,a.kt)("p",null,"Liquidation is therefore a profitable activity: the best liquidator will have fast and precise bots which quickly identify liquidable positions and launch the liquidation process. Precision is important because, if a liquidator tries to close a non-liquidable position, the liquidation does not take place and the gas is lost."),(0,a.kt)("h2",{id:"types-of-liquidations"},"Types of liquidations"),(0,a.kt)("p",null,"There are three possible liquidations to be performed on Ithil."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Closing positions"),": the liquidator closes one or more positions in behalf of the users, getting the users' margins or part of the insurance reserve if this is not enough. This is the most gas-intensive and risky (closing big positions can have a large market impact, thus reducing the reward), but the potential gains are higher."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Margin calls"),": the liquidator tops up the position's margin and becomes the owner of the position. This is the cheapest and less gas-intensive form of liquidation, moreover in this way the liquidator can enter the same investment as the previous user, thus if market moves favorably an easy gain can be done. However, the risk for the liquidator is to be in turn liquidated if the market moves unfavorably."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Total cover"),": the liquidator repays the loan and the fees to the vault and receives the assets locked in the strategy in her or his wallet. This stands in the middle in terms of gas and leaves to the liquidator the choice to arbitrage by immediately selling the received assets, or keeping them for another purpose.")),(0,a.kt)("p",null,"In order to liquidate, liquidators need to stake their Ithil's governance tokens in the liquidation contract: when a good amount of liquidations have been performed, such governance tokens can be withdrawn."))}p.isMDXComponent=!0},1748:function(e,t,i){var o={"./locale":9234,"./locale.js":9234};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=1748}}]);