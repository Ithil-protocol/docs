"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[671],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(a),p=n,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return a?i.createElement(m,o(o({ref:t},d),{},{components:a})):i.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9881:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return c}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=["components"],s={sidebar_position:1},l="Litepaper",h={unversionedId:"intro",id:"intro",title:"Litepaper",description:"---",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ithil-protocol/docs/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1645799769,formattedLastUpdatedAt:"2/25/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"FAQ",permalink:"/docs/faq"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Leveraged investments",id:"leveraged-investments",children:[{value:"Margin trading",id:"margin-trading",children:[],level:3},{value:"Leveraged staking",id:"leveraged-staking",children:[],level:3}],level:2},{value:"Undercollateralized loans",id:"undercollateralized-loans",children:[{value:"Ithil&#39;s vault and fees",id:"ithils-vault-and-fees",children:[],level:3},{value:"LP tokens",id:"lp-tokens",children:[],level:3}],level:2},{value:"Liquidations",id:"liquidations",children:[],level:2},{value:"Governance token",id:"governance-token",children:[{value:"Liquidations",id:"liquidations-1",children:[],level:3},{value:"Rewards",id:"rewards",children:[],level:3}],level:2},{value:"Ithil&#39;s DAO",id:"ithils-dao",children:[{value:"The treasury",id:"the-treasury",children:[],level:3}],level:2},{value:"Conclusions",id:"conclusions",children:[{value:"Key takeaways",id:"key-takeaways",children:[],level:3},{value:"Why is Ithil different from other protocols on the market",id:"why-is-ithil-different-from-other-protocols-on-the-market",children:[],level:3}],level:2},{value:"Who is behind it",id:"who-is-behind-it",children:[{value:"How can I get in touch with you",id:"how-can-i-get-in-touch-with-you",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"litepaper"},"Litepaper"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Ithil is a ",(0,r.kt)("strong",{parentName:"p"},"generalised leveraged investments protocol")," allowing liquidity providers to stake any ERC20 token and earn fees in that same  (eg. stake DAI get more DAI, put SHIBA get more SHIBA) and to traders to use the available liquidity to run investments with a higher capital than their initial one (i.e. ",(0,r.kt)("em",{parentName:"p"},"a leverage"),"). This is possible thanks to internal ",(0,r.kt)("strong",{parentName:"p"},"undercollateralised loans")," where the protocol ",(0,r.kt)("em",{parentName:"p"},"Vault")," lends its liquidity to the traders to run investment ",(0,r.kt)("em",{parentName:"p"},"strategies"),", which will eventually repay the loan and deliver the profits, if any, to the trader. In order to use the vault's liquidity, the trader needs to pay a ",(0,r.kt)("strong",{parentName:"p"},"margin")," to the desired investment strategy: it will cover eventual losses, but it is given back to the trader in full in case of a profitable investment. When the value of an investment falls behind some critical threshold, external ",(0,r.kt)("strong",{parentName:"p"},"liquidator bots")," can forcefully close the position, getting a reward by doing so.\nThe vault's liquidity is given by ",(0,r.kt)("strong",{parentName:"p"},"liquidity providers"),", which stake any ERC20 token in the vault and earn the fees generated by the investment process. ",(0,r.kt)("strong",{parentName:"p"},"Governance token")," holders can stake their tokens to perform decentralised liquidation and get rewards in the vault's tokens and can cast their vote in the DAO. A simple and solid backing system mathematically insures the dollar value of the governance token can only increase and never go below a certain floor, thus privileging holders committing to Ithil's community for a long time."),(0,r.kt)("p",null,"When the value of an investment falls behind some critical threshold, external ",(0,r.kt)("strong",{parentName:"p"},"liquidators")," can close the position forcefully, getting rewards by doing so. The vault's liquidity is given by ",(0,r.kt)("strong",{parentName:"p"},"liquidity providers"),", which stake any ERC20 token in the vault and earn the fees generated by the investment process."),(0,r.kt)("h2",{id:"leveraged-investments"},"Leveraged investments"),(0,r.kt)("p",null,"With Ithil, anyone can profit from a wide variety of DeFi market scenarios by performing leveraged investments; the seamless workflow allows the trader to enter into any investment strategy with few clicks, letting Ithil deal with all the complex procedures necessary to implement a particular strategy.\nA ",(0,r.kt)("em",{parentName:"p"},"true")," leverage is made possible by an internal system of uncollateralised loans, in which the funds are borrowed from Ithil's liquidity vault to be invested and the result of the particular investment is ",(0,r.kt)("em",{parentName:"p"},"locked")," in the strategy contract.\nIn order for a user to be able to perform a leveraged investment via a selected strategy, there must be some ",(0,r.kt)("em",{parentName:"p"},"margin")," posted into the strategy smart contract; this is necessary to cover for potential losses the vault could incur in the case of an unfavorable market movement."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE OPEN POSITION"),(0,r.kt)("p",null,"The opening of a position is done in three steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user posts some margin into the strategy and sets the desired investment parameters"),(0,r.kt)("li",{parentName:"ul"},"The strategy borrows funds from the vault, if the desired investment is higher than the margin posted"),(0,r.kt)("li",{parentName:"ul"},"The strategy performs all the internal and external calls to get ",(0,r.kt)("em",{parentName:"li"},"assets")," which are then locked into the strategy itself.")),(0,r.kt)("p",null,"Since the amount invested might be higher than the user's initial capital, the investment can be ",(0,r.kt)("em",{parentName:"p"},"leveraged"),": in this way, the assets obtained will have a much higher value than if the user directly buys them from an external protocol."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE CLOSE POSITION"),(0,r.kt)("p",null,"The closure of a position is likewise done in three steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The assets are exchanged internally or through an external DeFi protocol, to obtain the initial token used for the investment"),(0,r.kt)("li",{parentName:"ul"},"The strategy repays the loan taken from the vault, plus interest rates and fees"),(0,r.kt)("li",{parentName:"ul"},"The remaining part of the payoff is given back to the trader.")),(0,r.kt)("p",null,"The strategies which can be implemented are in principle very general: Ithil's community can implement a new strategy at any time and the governance can approve it to use the vault's funds."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE STRATEGY APPROVAL"),(0,r.kt)("p",null,"In order to prevent the governance to take faulty decisions which would put the protocol's liquidity at risk, all strategies must inherit from a common ",(0,r.kt)("strong",{parentName:"p"},"base strategy"),", an ",(0,r.kt)("em",{parentName:"p"},"abstract")," contract which implements the borrow and repay logic agnostically from the particular investment logic. Such measure has the double advantage of setting a precise standard to assure the vault's liquidity is protected and to make the development of new strategies much simpler and faster."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE BASE STRATEGY"),(0,r.kt)("p",null,"Besides calling the relevant external contracts to perform the particular investment, the specific strategies must also implement a ",(0,r.kt)("strong",{parentName:"p"},"quoter"),", a view function which gives at every time the value of the obtained assets with respect to the initial token used to obtain them. This is important for liquidations and for margins given in the asset token."),(0,r.kt)("p",null,"Since the liquidity transferred from the vault and locked in the form of assets in the strategies belongs to the LPs, every time a loan is taken the vault computes the ",(0,r.kt)("strong",{parentName:"p"},"interest rate")," at which the liquidity can be borrowed for that particular investment. The calculation INSERIRE HYPERLINK of the interest rate takes into account the riskiness of the investment, the amount of liquidity taken and the amount of margin posted by the user."),(0,r.kt)("p",null,"We give here two examples of simple strategies, while ideally ",(0,r.kt)("strong",{parentName:"p"},"the strategies that can be implemented are potentially infinite and can vary in complexity and risk, covering pure DeFi to more structured TradFi-like ones"),"."),(0,r.kt)("h3",{id:"margin-trading"},"Margin trading"),(0,r.kt)("p",null,"Margin trading is the simplest form of a strategy, in which the investment logic is exchanging one token for another one on an external exchange platform."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE MTS"),(0,r.kt)("p",null,"The strategy's quoter will keep track of the exchange rate of Token A with respect to Token B. When the position is closed, Token B is exchanged to obtain back Token A: the quantity of Token A obtained will determine if the investment has been profitable or not.\nLet us make a numerical example of a ",(0,r.kt)("strong",{parentName:"p"},"long position"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the Margin Trading Strategy (MTS) contract and decides to go ",(0,r.kt)("em",{parentName:"li"},"long")," with a x10 leverage on TKB."),(0,r.kt)("li",{parentName:"ul"},"Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 900 TKA from the vault, say at a daily interest rate of 0.1% and exchange 1000 TKA to obtain 20 TKB from an external protocol. This tokens are locked in the MTS and an onchain position is opened for the user."),(0,r.kt)("li",{parentName:"ul"},"If the user closes the position after 10 days, when the exchange rate has increased by 20% to 60 TKA/TKB, then exchanging 20 TKB back will provide 1200 TKA to the MTS. "),(0,r.kt)("li",{parentName:"ul"},"The MTS will repay the 909 TKA to the vault (900 borrowed plus 1% interest) and deliver the remaining 291 TKA to the user. With a market movement of only 20%, the user has realised a whopping 191% gain thanks to the 10x leverage.")),(0,r.kt)("p",null,"In the case of a ",(0,r.kt)("strong",{parentName:"p"},"short position")," the situation is similar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the MTS contract and decides to go ",(0,r.kt)("em",{parentName:"li"},"short")," with a x10 leverage on TKB."),(0,r.kt)("li",{parentName:"ul"},"Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 20 TKB from the vault, say at a daily interest rate of 0.1% and exchange them on an external protocol to obtain 1000 TKA. This tokens are locked in the MTS and an onchain position is opened for the user. At this point, 1100 TKA are locked in the MTS."),(0,r.kt)("li",{parentName:"ul"},"If the user closes the position after 10 days, when the exchange rate has decreased by 20% to 40 TKA/TKB, then only 808 TKA are necessary to obtain the 20.2 TKB back to repay the vault (20 borrowed plus 1% interest). "),(0,r.kt)("li",{parentName:"ul"},"The remaining 292 TKA are delivered to the user. A market movement of only 20% has made the trader earn 192% thanks to the 10x leverage.")),(0,r.kt)("p",null,"In both cases, the user can post the margin either in TKA or TKB and the MTS will adjust the amount of the loan to take from the vault accordingly.\nOf course, if the market moves unfavorably, the losses are equally aplified with respect of a non-leveraged trade. If the exchange falls below some critical level, the position will be liquidated INSERIRE HYPERLINK"),(0,r.kt)("h3",{id:"leveraged-staking"},"Leveraged staking"),(0,r.kt)("p",null,"Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocol to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents the gain of the user."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE STAKING PROTOCOL"),(0,r.kt)("p",null,"Let us make a numerical example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the LSS contract and decides to stake TKA on an external staking protocol SP with a 10x leverage."),(0,r.kt)("li",{parentName:"ul"},"The LSS contract will borrow 900 TKA from the vault and stake the 1000 TKA on SP, obtaining say 1000 lTKA, the wrapped tokens representing the stake."),(0,r.kt)("li",{parentName:"ul"},"Assume that, after one month, the rolling APR of SP hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. "),(0,r.kt)("li",{parentName:"ul"},"If the user closes its position, the 1000 lTKA will be redeemed on SP to obtain 1050 TKA, while the vault has to be repaied of 927 TKA (900 TKA borrowed, plus 3%). The remaining 123 TKA are given back to the user, which will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.")),(0,r.kt)("p",null,"In both cases, the user can post the margin either in TKA or lTKA and the MTS will adjust the amount of the loan to take from the vault accordingly.\nOf course, if the price per share increases less than the applied interest rate, the user may lose money. If the interest accrued go above some critical level, the position will be liquidated INSERIRE HYPERLINK"),(0,r.kt)("h2",{id:"undercollateralized-loans"},"Undercollateralized loans"),(0,r.kt)("p",null,"In order to allow the users to perform leveraged investments, Ithil adopts a system of ",(0,r.kt)("strong",{parentName:"p"},"internal undercollateralized loans"),", in which the amount internally transferred from the vault to the strategy is higher than the margin posted by the user. This is possible because the assets resulting from this loan are locked into the strategy: they do not go outside Ithil's contracts."),(0,r.kt)("h3",{id:"ithils-vault-and-fees"},"Ithil's vault and fees"),(0,r.kt)("p",null,"The lending contract is the ",(0,r.kt)("strong",{parentName:"p"},"vault"),", into which ",(0,r.kt)("strong",{parentName:"p"},"liquidity providers")," can stake their tokens and get the fees and interest generated by the investments. The list of supported, or ",(0,r.kt)("strong",{parentName:"p"},"whitelisted")," tokens is managed by the governance following security and market criteria. All whitelisted tokens can be staked in the vault, thus making Ithil a good choice to get APY ",(0,r.kt)("em",{parentName:"p"},"in virtually any token"),"."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE VAULT"),(0,r.kt)("p",null,"The liquidity given to the strategy in the form of loans is protected by the user's margin and by ",(0,r.kt)("strong",{parentName:"p"},"liquidators"),", which close the positions whose margin has been eroded by more than a strategy-specific ",(0,r.kt)("strong",{parentName:"p"},"risk factor"),", and get rewarded for this. Since, due to very unfavorable market conditions, liquidators may fail to properly liquidate a given position, the vault's liquidity is further protected via the ",(0,r.kt)("strong",{parentName:"p"},"insurance reserve"),": governance-owned liquidity which is used to restore a liquidity loss due to a bad liquidation. The amount of the insurance reserve is adjusted ",(0,r.kt)("em",{parentName:"p"},"algorithmically")," to insure good capital protection and at the same time a competitive interest rate for liquidity providers."),(0,r.kt)("p",null,"When a loan is taken from a strategy, the vaults computes the interest rate at which the loan is taken. This is calculated taking several factors into account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The riskiness of an investment, captured in a number called ",(0,r.kt)("strong",{parentName:"li"},"risk factor"),". "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"usage"),", which is the amount of open loans with respect to the vault's free liquidity."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"uninsured portion")," of the vault, which is the percentage of the vault's balance which is not insurance reserve."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"collateralization")," of the position, which is the ratio between the borrowed amount and the margin (denominated in borrowed tokens).\nThe final interest rate is then directly proportional to these four numbers, i.e. it's the multiplication of all of them renormalized by a global factor. The interest rate is computed considering the vault state at the opening of a position, while the due fees are calculated at the closure of the same position.")),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE CALCOLO INTEREST RATE"),(0,r.kt)("p",null,"Finally, a small fixed fee is set by the governance and it is charged as a percentage of the borrowed amount, regardless of the duration of the position. This reduces the economic rationale of potential attacks in which positions are open and closed immediately."),(0,r.kt)("p",null,"Since taking a loan when the vault is almost totally used is extremely costly, this formula assures that there will likely be some amount of free liquidity which can be ",(0,r.kt)("em",{parentName:"p"},"redeemed")," at any time by liquidity providers. If all free liquidity has been withdrawn by LPs, as some positions are closed it will be costly to open new ones, thus again assuring, after a short period of time, the availability of further liquidity to support withdrawals, in a positive feedback cycle."),(0,r.kt)("p",null,"When a position is closed and fees are paid to the vault, a portion of them go to the insurance reserve. This portion is algorithmically computed to make the insurance reserve ratio converge towards an ",(0,r.kt)("strong",{parentName:"p"},"optimal ratio"),": at the optimal ratio, the fees going to the insurance reserve are at a minimum, and the governance has the right of redeeming the excess insurance reserve (but not beyond the optimal ratio)."),(0,r.kt)("h3",{id:"lp-tokens"},"LP tokens"),(0,r.kt)("p",null,"In order to assure a fair and gas-efficient fees distribution method, Ithils adopts the classical method of LP tokens, which are minted to liquidity providers in a quantity reflecting the ",(0,r.kt)("em",{parentName:"p"},"share price")," of the given LP token. The ",(0,r.kt)("strong",{parentName:"p"},"total wealth")," of the vault is the quantity of tokens deposited in total by liquidity providers, plus all fees generated and not claimed. This can be calculated as the total balance excluding governance-owned liquidity, plus the open loans. When a liquidity provider deposits some amount of TKA, then some amount of LP tokens iTKA will be minted, calculated as follows."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE CALCOLO MINTED AMOUNT"),(0,r.kt)("p",null,"Similarly, an holder of iTKA can burn at any time its tokens, thus receiving a transfer of TKA calculated as follows."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE CALCOLO TRANSFERRED"),(0,r.kt)("p",null,"The factor of the burned amount in the previous formula is the ",(0,r.kt)("strong",{parentName:"p"},"share price")," of the LP token considered.\nIn this way, a liquidity provider trying to deposit and withdraw immediately some funds, will receive exactly the same amount deposited, and only the fees generated ",(0,r.kt)("em",{parentName:"p"},"after")," the deposit will contribute to the provider's APY: no arbitrage is possible. Moreover, a simple calculation shows that neither deposits nor withdrawals change the share price, thus the effect of a liquidity provider withdrawing or deposit is not seen by others."),(0,r.kt)("h2",{id:"liquidations"},"Liquidations"),(0,r.kt)("p",null,"Liquidations are a fundamental part in the echosystem: closing positions getting too close to having their margin completely eroded (more precisely, beyond a strategy-specific percentage called the ",(0,r.kt)("strong",{parentName:"p"},"risk factor"),"), they protect the vault's liquidity and prevent the share price of LP tokens to decrease. In this way, liquidity providers are guaranteed to receive a positive APY with a very low risk."),(0,r.kt)("p",null,"Ithil's liquidation system is completely decentralised and onchain: anyone which holds a sufficient amount of Ithil's governance token can launch Ithil's liquidation functions which will check onchain, using the ",(0,r.kt)("em",{parentName:"p"},"quoter")," function of the particular strategy, if a given position is liquidable. Liquidators can close one or more positions in one go, thus saving gas and performing a faster liquidation. Once a position is liquidated, the part of the margin which is not eroded is transferred in full to the liquidator: in this way, a faster liquidation will assure the liquidator a higher reward. If the margin is not sufficient to reward the liquidator, we consider this a ",(0,r.kt)("strong",{parentName:"p"},"bad liquidation"),": in this case, a part of the insurance reserve is used to restore the eventual liquidity loss and to compensate the liquidator."),(0,r.kt)("p",null,"Liquidation is therefore a profitable activity: the best liquidator will have fast and precise bots which quickly identify liquidable positions and launch the liquidation process. Precision is important because, if a liquidator tries to close a non-liquidable position, the liquidation does not take place and the gas is lost.+"),(0,r.kt)("p",null,"There are three possible liquidations to be performed on Ithil."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Closing positions"),": the liquidator closes one or more positions in behalf of the users, getting the users' margins or part of the insurance reserve if this is not enough. This is the most gas-intensive and risky (closing big positions can have a large market impact, thus reducing the reward), but the potential gains are higher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Margin calls"),": the liquidator tops up the position's margin and becomes the owner of the position. This is the cheapest and less gas-intensive form of liquidation, moreover in this way the liquidator can enter the same investment as the previous user, thus if market moves favorably an easy gain can be done. However, the risk for the liquidator is to be in turn liquidated if the market moves unfavorably."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total cover"),": the liquidator repays the loan and the fees to the vault and receives the assets locked in the strategy in her or his wallet. This stands in the middle in terms of gas and leaves to the liquidator the choice to arbitrage by immediately selling the received assets, or keeping them for another purpose.")),(0,r.kt)("p",null,"In order to liquidate, liquidators need to stake their Ithil's governance tokens in the liquidation contract: when a good amount of liquidations have been performed, such governance tokens can be withdrawn."),(0,r.kt)("h2",{id:"governance-token"},"Governance token"),(0,r.kt)("p",null,"Governance tokens ITH are vital for Ithil's growth and sustainability. Ithil's governance token holders participate in governance decisions, perform liquidations and earn from them and get rewards in the form of an ever-increasing backing system coming from all these activities."),(0,r.kt)("h3",{id:"liquidations-1"},"Liquidations"),(0,r.kt)("p",null,'When Ithil tokens are staked in the liquidation contract, the staker can perform liquidation and earn in a way described in the liquidation section. The amount to be liquidated in a single call increases with the amount of ITH staked. As the liquidated amount increases, the ITH staked are gradually "unblocked" until all ITH can be unstaked from the liquidation contract, together with the earnings from the liquidation activity.'),(0,r.kt)("h3",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,"ITH is backed in a specific backing contract similar to Ithil's vault. The price per share calculated by the contract is so that every circulating (i.e. outside the backing contract) ITH can be redeemed at any moment at that price, thus assuring the rewards accumulated by ITH holders are distributed. Moreover, redeeming ITH on the backing contract does not change the price, as it can be seen by a direct calculation."),(0,r.kt)("p",null,"INSERIRE QUI IMMAGINE BACKING CONTRACT"),(0,r.kt)("p",null,"The stablecoins inside the backing contract can come from various sources, such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Excess insurance reserve above the optimal ratio."),(0,r.kt)("li",{parentName:"ul"},"Direct ITH exchange on the backing contract."),(0,r.kt)("li",{parentName:"ul"},"Profits from separate treasury's investments.")),(0,r.kt)("p",null,"The key takeaway is the fact that ",(0,r.kt)("em",{parentName:"p"},"there is no way to extract stablecoins from the backing contract, except redeeming ITH"),". In this way, the backing price of ITH can never decrease, while there are various ways in which it can increase. A ITH holder will then see the backing price of ITH always go up in time, a system which strongly encourages to commit to the community for a long time."),(0,r.kt)("h2",{id:"ithils-dao"},"Ithil's DAO"),(0,r.kt)("p",null,"Ithil will progressively become a DAO - decentralised autonomous organisation. Core decisions will be taken by token holders, collectively referred as ",(0,r.kt)("em",{parentName:"p"},"governance"),", with a thriving community of traders, LPs as well as people who put in work for the advancement of the protocol itself. As a reward, these contributors will be paid in governance tokens taken from Ithil's treasury. We foresee onboard designers, developers, financial experts, traders and marketers to work on several different side-projects and spin-offs like adding new strategies. Thanks to the community, the protocol will constantly enrich with new strategies by using community inputs as a way to democratise and distribute the development and progress of Ithil itself.\nA non-exhaustive list of possible governance-based decisions is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listing or de-listing of a token or a strategy."),(0,r.kt)("li",{parentName:"ul"},"Assess the risk factor of a particular token within a strategy."),(0,r.kt)("li",{parentName:"ul"},"Boost or damp one stablecoin's APY using the treasury's liquidity."),(0,r.kt)("li",{parentName:"ul"},"Initiate and manage liquidity mining activities.\nEach time, an ITH token holder can stake his or her tokens and participate in the voting, proportionately to the number of tokens owned and staked.")),(0,r.kt)("h3",{id:"the-treasury"},"The treasury"),(0,r.kt)("p",null,"All Ithil's decisions and community building cannot take place without a solid treasury. Ithil's treasury is entirely made of ITH tokens, which will be used for various important tasks such as the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pay for community mining and marketing activities."),(0,r.kt)("li",{parentName:"ul"},"Allowing APY boosts for particular vaults."),(0,r.kt)("li",{parentName:"ul"},"Investing in airdrops and external activities.\nEach time, the DAO will propose and let all ITH holders decide about Ithil's resolution.")),(0,r.kt)("h2",{id:"conclusions"},"Conclusions"),(0,r.kt)("p",null,"With Ithil, we bring a new generation experience of DeFi investments, thanks to undercollateralised loans and an unmatched protection and growth system. Thanks to the leverage, all users can earn high profits only from their own market insights, even if their initial wealth is not high. Liquidations and fair distribution make Ithil attractive also for stakers willing to have a slow and steady return on ",(0,r.kt)("em",{parentName:"p"},"any")," token (a rare possibility in the DeFi world), while a solid tokenomics and a mathematically increasing backing will make investing in ITH a no-brainer."),(0,r.kt)("h3",{id:"key-takeaways"},"Key takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internal undercollateralised leverage system"),(0,r.kt)("li",{parentName:"ul"},"Trade any ERC20 token, including meme/gaming tokens and fractionalised NFTs"),(0,r.kt)("li",{parentName:"ul"},"Fully on-chain, can be integrated in other protocols"),(0,r.kt)("li",{parentName:"ul"},"Gas optimisation and liquidity aggregation via multi-chain routing"),(0,r.kt)("li",{parentName:"ul"},"Efficient liquidation via a network of bots that anyone can run"),(0,r.kt)("li",{parentName:"ul"},"Several strategies to choose from, with different risk and reward levels")),(0,r.kt)("h3",{id:"why-is-ithil-different-from-other-protocols-on-the-market"},"Why is Ithil different from other protocols on the market"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-chain")," diversified portfolio of popular DeFi ",(0,r.kt)("strong",{parentName:"li"},"strategies"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Undercollateralised leverage")," to boost your profits."),(0,r.kt)("li",{parentName:"ul"},"The protocol is chain-independent, you can execute a strategy on Polygon while having your assets on Ethereum mainnet"),(0,r.kt)("li",{parentName:"ul"},"Liquidity providers get ",(0,r.kt)("strong",{parentName:"li"},"rewarded with their favourite token"),", thus allowing them to stake virtually any crypto asset (supported by Ithil). Usually, other protocols reward liquidity providers with governance tokens."),(0,r.kt)("li",{parentName:"ul"},"Flexible trading experience with (almost) ",(0,r.kt)("strong",{parentName:"li"},"any type of token allowed as margin"),", sophisticated charts and good market rates will attract more traders to us. Typical margin trading platforms are hard to use, gas intensive and ultimately unattractive or just support a handful of tokens."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"governance token will be inflationary"),": backed by the protocol earnings and giving opportunity to earn even more by providing support to the platform.")),(0,r.kt)("h2",{id:"who-is-behind-it"},"Who is behind it"),(0,r.kt)("p",null,"The idea started when three developers with diverse backgrounds met during a hackathon. In our discussions, it was clear that the DeFi world lacked a consistent way to provide liquidity and earn income in the same token staked and that the existing protocols are so rigid in nature, that they struggle to keep pace with the fast growing DeFi world. At the same time, most traders were struggling to find easy ways to execute repetitive strategies on multiple chains.\nWe iterated on that, took some ideas from traditional finance and translated them into crypto language: our goal was initially to create a platform which only allowed margin trading, but we then realised that our project had much bigger potential since the earning system of the vault (the core of our protocol) is agnostic of the investment activity. Now that the core is robust and well-refined, we are heading to creating the largest diversified investment platform available in the market.\nWe prefer to stay anonymous as want the project and its DAO to be the real and public facade and by being anon the team can totally focus on providing value to the community."),(0,r.kt)("h3",{id:"how-can-i-get-in-touch-with-you"},"How can I get in touch with you"),(0,r.kt)("p",null,"We are available on Discord or Twitter, ping us there and we will be happy to answer!"))}c.isMDXComponent=!0}}]);