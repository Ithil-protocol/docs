"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[194],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5509:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:2},l=void 0,h={unversionedId:"protocol-overview/strategies/leveraged-investmets",id:"protocol-overview/strategies/leveraged-investmets",title:"leveraged-investmets",description:"Leveraged investments",source:"@site/docs/protocol-overview/strategies/leveraged-investmets.md",sourceDirName:"protocol-overview/strategies",slug:"/protocol-overview/strategies/leveraged-investmets",permalink:"/docs/protocol-overview/strategies/leveraged-investmets",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/strategies/leveraged-investmets.md",tags:[],version:"current",lastUpdatedAt:1645808688,formattedLastUpdatedAt:"2/25/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Undercollateralized loans",permalink:"/docs/protocol-overview/undercollateralized-loans"},next:{title:"margin-trading",permalink:"/docs/protocol-overview/strategies/margin-trading"}},c=[{value:"Leveraged investments",id:"leveraged-investments",children:[{value:"Margin trading",id:"margin-trading",children:[],level:3},{value:"Leveraged staking",id:"leveraged-staking",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"leveraged-investments"},"Leveraged investments"),(0,i.kt)("p",null,"With Ithil, anyone can profit from a wide variety of DeFi market scenarios by performing leveraged investments; the seamless workflow allows the trader to enter into any investment strategy with few clicks, letting Ithil deal with all the complex procedures necessary to implement a particular strategy.\nA ",(0,i.kt)("em",{parentName:"p"},"true")," leverage is made possible by an internal system of uncollateralised loans, in which the funds are borrowed from Ithil's liquidity vault to be invested and the result of the particular investment is ",(0,i.kt)("em",{parentName:"p"},"locked")," in the strategy contract.\nIn order for a user to be able to perform a leveraged investment via a selected strategy, there must be some ",(0,i.kt)("em",{parentName:"p"},"margin")," posted into the strategy smart contract; this is necessary to cover for potential losses the vault could incur in the case of an unfavorable market movement."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Borrowing process",src:a(7905).Z,width:"2399",height:"1135"})),(0,i.kt)("p",null,"The opening of a position is done in three steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user posts some margin into the strategy and sets the desired investment parameters"),(0,i.kt)("li",{parentName:"ul"},"The strategy borrows funds from the vault, if the desired investment is higher than the margin posted"),(0,i.kt)("li",{parentName:"ul"},"The strategy performs all the internal and external calls to get ",(0,i.kt)("em",{parentName:"li"},"assets")," which are then locked into the strategy itself.")),(0,i.kt)("p",null,"Since the amount invested might be higher than the user's initial capital, the investment can be ",(0,i.kt)("em",{parentName:"p"},"leveraged"),": in this way, the assets obtained will have a much higher value than if the user directly buys them from an external protocol."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Repayment process",src:a(6766).Z,width:"2397",height:"1155"})),(0,i.kt)("p",null,"The closure of a position is likewise done in three steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The assets are exchanged internally or through an external DeFi protocol, to obtain the initial token used for the investment"),(0,i.kt)("li",{parentName:"ul"},"The strategy repays the loan taken from the vault, plus interest rates and fees"),(0,i.kt)("li",{parentName:"ul"},"The remaining part of the payoff is given back to the trader.")),(0,i.kt)("p",null,"The strategies which can be implemented are in principle very general: Ithil's community can implement a new strategy at any time and the governance can approve it to use the vault's funds."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Strategy approval process",src:a(6962).Z,width:"1137",height:"374"})),(0,i.kt)("p",null,"In order to prevent the governance to take faulty decisions which would put the protocol's liquidity at risk, all strategies must inherit from a common ",(0,i.kt)("strong",{parentName:"p"},"base strategy"),", an ",(0,i.kt)("em",{parentName:"p"},"abstract")," contract which implements the borrow and repay logic agnostically from the particular investment logic. Such measure has the double advantage of setting a precise standard to assure the vault's liquidity is protected and to make the development of new strategies much simpler and faster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Base strategy",src:a(7465).Z,width:"1394",height:"720"})),(0,i.kt)("p",null,"Besides calling the relevant external contracts to perform the particular investment, the specific strategies must also implement a ",(0,i.kt)("strong",{parentName:"p"},"quoter"),", a view function which gives at every time the value of the obtained assets with respect to the initial token used to obtain them. This is important for liquidations and for margins given in the asset token."),(0,i.kt)("p",null,"Since the liquidity transferred from the vault and locked in the form of assets in the strategies belongs to the LPs, every time a loan is taken the vault computes the ",(0,i.kt)("strong",{parentName:"p"},"interest rate")," at which the liquidity can be borrowed for that particular investment. The calculation of the interest rate takes into account the riskiness of the investment, the amount of liquidity taken and the amount of margin posted by the user."),(0,i.kt)("p",null,"We give here two examples of simple strategies, while ideally ",(0,i.kt)("strong",{parentName:"p"},"the strategies that can be implemented are potentially infinite and can vary in complexity and risk, covering pure DeFi to more structured TradFi-like ones"),"."),(0,i.kt)("h3",{id:"margin-trading"},"Margin trading"),(0,i.kt)("p",null,"Margin trading is the simplest form of a strategy, in which the investment logic is exchanging one token for another one on an external exchange platform."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Margin trading strategy",src:a(1476).Z,width:"3066",height:"1236"})),(0,i.kt)("p",null,"The strategy's quoter will keep track of the exchange rate of Token A with respect to Token B. When the position is closed, Token B is exchanged to obtain back Token A: the quantity of Token A obtained will determine if the investment has been profitable or not.\nLet us make a numerical example of a ",(0,i.kt)("strong",{parentName:"p"},"long position"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the Margin Trading Strategy (MTS) contract and decides to go ",(0,i.kt)("em",{parentName:"li"},"long")," with a x10 leverage on TKB."),(0,i.kt)("li",{parentName:"ul"},"Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 900 TKA from the vault, say at a daily interest rate of 0.1% and exchange 1000 TKA to obtain 20 TKB from an external protocol. This tokens are locked in the MTS and an onchain position is opened for the user."),(0,i.kt)("li",{parentName:"ul"},"If the user closes the position after 10 days, when the exchange rate has increased by 20% to 60 TKA/TKB, then exchanging 20 TKB back will provide 1200 TKA to the MTS. "),(0,i.kt)("li",{parentName:"ul"},"The MTS will repay the 909 TKA to the vault (900 borrowed plus 1% interest) and deliver the remaining 291 TKA to the user. With a market movement of only 20%, the user has realised a whopping 191% gain thanks to the 10x leverage.")),(0,i.kt)("p",null,"In the case of a ",(0,i.kt)("strong",{parentName:"p"},"short position")," the situation is similar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the MTS contract and decides to go ",(0,i.kt)("em",{parentName:"li"},"short")," with a x10 leverage on TKB."),(0,i.kt)("li",{parentName:"ul"},"Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 20 TKB from the vault, say at a daily interest rate of 0.1% and exchange them on an external protocol to obtain 1000 TKA. This tokens are locked in the MTS and an onchain position is opened for the user. At this point, 1100 TKA are locked in the MTS."),(0,i.kt)("li",{parentName:"ul"},"If the user closes the position after 10 days, when the exchange rate has decreased by 20% to 40 TKA/TKB, then only 808 TKA are necessary to obtain the 20.2 TKB back to repay the vault (20 borrowed plus 1% interest). "),(0,i.kt)("li",{parentName:"ul"},"The remaining 292 TKA are delivered to the user. A market movement of only 20% has made the trader earn 192% thanks to the 10x leverage.")),(0,i.kt)("p",null,"In both cases, the user can post the margin either in TKA or TKB and the MTS will adjust the amount of the loan to take from the vault accordingly.\nOf course, if the market moves unfavorably, the losses are equally aplified with respect of a non-leveraged trade. If the exchange falls below some critical level, the position will be liquidated."),(0,i.kt)("h3",{id:"leveraged-staking"},"Leveraged staking"),(0,i.kt)("p",null,"Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocol to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents the gain of the user."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Leveraged staking strategy",src:a(8709).Z,width:"3066",height:"1205"})),(0,i.kt)("p",null,"Let us make a numerical example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A user posts a margin of 100 TKA to the LSS contract and decides to stake TKA on an external staking protocol SP with a 10x leverage."),(0,i.kt)("li",{parentName:"ul"},"The LSS contract will borrow 900 TKA from the vault and stake the 1000 TKA on SP, obtaining say 1000 lTKA, the wrapped tokens representing the stake."),(0,i.kt)("li",{parentName:"ul"},"Assume that, after one month, the rolling APR of SP hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. "),(0,i.kt)("li",{parentName:"ul"},"If the user closes its position, the 1000 lTKA will be redeemed on SP to obtain 1050 TKA, while the vault has to be repaied of 927 TKA (900 TKA borrowed, plus 3%). The remaining 123 TKA are given back to the user, who will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.")),(0,i.kt)("p",null,"In both cases, the user can post the margin either in TKA or lTKA and the MTS will adjust the amount of the loan to take from the vault accordingly.\nOf course, if the price per share increases less than the applied interest rate, the user may lose money. If the interest accrued go above some critical level, the position will be liquidated."))}u.isMDXComponent=!0},7905:function(e,t,a){t.Z=a.p+"assets/images/borrow-process-c1e0b4532e5ab4c54a322c36c9a67d2d.png"},6766:function(e,t,a){t.Z=a.p+"assets/images/repay-process-12cf996431993326bf552ba2602ceae4.png"},7465:function(e,t,a){t.Z=a.p+"assets/images/strategies-8ef0ed5c35acf244113b6aa008337f9d.png"},8709:function(e,t,a){t.Z=a.p+"assets/images/leveraged-staking-877958a3b68c3f603f5a1d81ed146567.png"},1476:function(e,t,a){t.Z=a.p+"assets/images/margin-trading-d906f3b174b853f81a6a79144ae23dfd.png"},6962:function(e,t,a){t.Z=a.p+"assets/images/strategy-approval-process-713e46df9e458062a3994488faad4999.png"}}]);