(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[214],{7933:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return N},default:function(){return h}});var m=t(7462),n=t(3366),s=(t(7294),t(3905)),r=t(3456),p=["components"],o={sidebar_position:2},i="Lending",l={unversionedId:"protocol-overview/lending",id:"protocol-overview/lending",title:"Lending",description:"Undercollateralised loans are the core of Ithil",source:"@site/docs/protocol-overview/lending.md",sourceDirName:"protocol-overview",slug:"/protocol-overview/lending",permalink:"/docs/protocol-overview/lending",editUrl:"https://github.com/ithil-protocol/docs/docs/protocol-overview/lending.md",tags:[],version:"current",lastUpdatedAt:1659628746,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/protocol-overview/how-it-works"},next:{title:"Borrowing",permalink:"/docs/protocol-overview/borrowing"}},N=[{value:"The Vault",id:"the-vault",children:[],level:3},{value:"LP tokens",id:"lp-tokens",children:[],level:3},{value:"APY Boost",id:"apy-boost",children:[{value:"An example",id:"an-example",children:[],level:3}],level:2}],k={toc:N};function h(a){var e=a.components,t=(0,n.Z)(a,p);return(0,s.kt)("wrapper",(0,m.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lending"},"Lending"),(0,s.kt)("p",null,"Undercollateralised loans are the core of Ithil"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"In order to allow the users to perform leveraged investments, Ithil adopts a system of ",(0,s.kt)("strong",{parentName:"p"},"internal undercollateralised loans"),", in which the amount internally transferred from the Vault to the strategy is higher than the margin posted by the user. This is possible because the assets resulting from this loan are locked into the strategy: they do not go outside Ithil's contracts."),(0,s.kt)("p",null,"Any user can supply any supported ERC20 token to the protocol, regardless of which chain their tokens live upon. The fees generated by the traders' activity will be redistributed to LPs, so that their staked assets will increase in number. If you give DAI, you will receive more DAI. No synth assets or strange tokens to swap.\nLPs will receive a yield-bearing token representing their deposit, that can be exchanged on dexes, used as collateral or put into farming on other DeFi protocols. When a LP wants to redeem their staked tokens, their yield-bearing tokens will be burned and the underlying liquidity will be transfered with the fees accrued."),(0,s.kt)("h3",{id:"the-vault"},"The Vault"),(0,s.kt)("p",null,"The lending contract is the ",(0,s.kt)("strong",{parentName:"p"},"Vault"),", where ",(0,s.kt)("strong",{parentName:"p"},"liquidity providers")," (LPs) can stake their tokens and get the fees and interest generated by the investments. The list of supported, or ",(0,s.kt)("strong",{parentName:"p"},"whitelisted")," tokens is managed by the governance following security and market criteria. All whitelisted tokens can be staked in the Vault, thus making Ithil a good choice to get APY ",(0,s.kt)("em",{parentName:"p"},"in virtually any token"),"."),(0,s.kt)(r.Mermaid,{config:{},chart:"graph TD\n    A[LP] --\x3e |Deposit| B(Vault)\n    B --\x3e |Loan| C[Strategy]\n    C --\x3e |Invest| D[Protocol]\n    D --\x3e C\n    C --\x3e |Loan+fees| B\n    B --\x3e |Deposit+fees| A",mdxType:"Mermaid"}),(0,s.kt)("p",null,"The liquidity given to the strategy in the form of loans is protected by the user's margin and by ",(0,s.kt)("strong",{parentName:"p"},"liquidators"),", which close the positions whose margin has been eroded by more than a strategy-specific ",(0,s.kt)("strong",{parentName:"p"},"risk factor"),", and get rewarded for this. Since, due to very unfavorable market conditions, liquidators may fail to properly liquidate a given position, the Vault's liquidity is further protected via the ",(0,s.kt)("strong",{parentName:"p"},"insurance reserve"),": governance-owned liquidity which is used to restore a liquidity loss due to a bad liquidation. The amount of the insurance reserve is adjusted ",(0,s.kt)("em",{parentName:"p"},"algorithmically")," to insure good capital protection and at the same time a competitive interest rate for liquidity providers."),(0,s.kt)("p",null,"When a loan is taken from a strategy, the Vault computes the interest rate at which the loan is taken. This is calculated taking several factors into account:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The riskiness of an investment, captured in a number called ",(0,s.kt)("strong",{parentName:"li"},"risk factor"),". "),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("strong",{parentName:"li"},"usage"),", which is the amount of open loans with respect to the free liquidity."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("strong",{parentName:"li"},"uninsured portion")," of the Vault, which is the percentage of the total balance which is not insurance reserve."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("strong",{parentName:"li"},"collateralisation")," of the position, which is the ratio between the borrowed amount and the margin (denominated in borrowed tokens).\nThe final interest rate is then directly proportional to these four numbers, i.e. it's the multiplication of all of them renormalised by a global factor. The interest rate is computed considering the Vault state at the opening of a position, while the due fees are calculated at the closure of the same position.")),(0,s.kt)("p",null,"Finally, a small ",(0,s.kt)("strong",{parentName:"p"},"fixed fee")," is set by the governance and it is charged as a percentage of the borrowed amount, regardless of the duration of the position. This reduces the economic rationale of potential attacks in which positions are open and closed immediately, like in flash-loans."),(0,s.kt)("p",null,"Since taking a loan when the Vault is almost totally used is extremely costly, this formula assures that there will likely be some amount of free liquidity which can be ",(0,s.kt)("em",{parentName:"p"},"redeemed")," at any time by liquidity providers. If all free liquidity has been withdrawn by LPs, as some positions are closed it will be costly to open new ones, thus again assuring, after a short period of time, the availability of further liquidity to support withdrawals, in a positive feedback cycle."),(0,s.kt)("p",null,"When a position is closed and fees are paid to the Vault, a portion of them go to the insurance reserve. This portion is algorithmically computed to make the insurance reserve ratio converge towards an ",(0,s.kt)("strong",{parentName:"p"},"optimal ratio"),": at the optimal ratio, the fees going to the insurance reserve are at a minimum, and the governance has the right of redeeming the excess insurance reserve (but not beyond the optimal ratio)."),(0,s.kt)("h3",{id:"lp-tokens"},"LP tokens"),(0,s.kt)("p",null,"In order to assure a fair and gas-efficient fees distribution method, Ithils adopts the classical method of LP tokens, which are minted to liquidity providers in a quantity reflecting the ",(0,s.kt)("em",{parentName:"p"},"share price")," of the given LP token. The ",(0,s.kt)("strong",{parentName:"p"},"total wealth")," of the Vault is the quantity of tokens deposited in total by liquidity providers, plus all fees generated and not claimed. This can be calculated as the total balance excluding governance-owned liquidity, plus the open loans. When a liquidity provider deposits some amount of (for instance) DAI, then some amount of LP tokens iDAI will be minted, calculated as follows."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"y"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s")))),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Minted\\ iTokens = deposit\\ amount * \\frac{Total\\ Supply_{\\, iTokens}}{Total\\ Wealth}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"os"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"am"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"lt"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"ppl"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("p",null,"Similarly, an holder of iDAI can burn at any time its tokens, thus receiving a transfer of DAI calculated as follows."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"y"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s")))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Transfer\\ amount = burned\\ iTokens * \\frac{Total\\ Wealth}{Total\\ Supply_{\\, iTokens}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"am"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"ppl"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mspace mtight",style:{marginRight:"0.1952em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"lt"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8804em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("p",null,"The factor of the burned amount in the previous formula is the ",(0,s.kt)("strong",{parentName:"p"},"share price")," of the LP token considered.\nIn this way, a liquidity provider trying to deposit and withdraw immediately some funds, will receive exactly the same amount deposited, and only the fees generated ",(0,s.kt)("em",{parentName:"p"},"after")," the deposit will contribute to the provider's APY: no arbitrage is possible. Moreover, a simple calculation shows that neither deposits nor withdrawals change the share price, thus the effect of a liquidity provider withdrawing or deposit is not seen by others."),(0,s.kt)("h2",{id:"apy-boost"},"APY Boost"),(0,s.kt)("p",null,"We use an innovative model to ",(0,s.kt)("strong",{parentName:"p"},"encourage staking on the platform in a non-dilutive way"),".\nAnyone can ",(0,s.kt)("em",{parentName:"p"},"boost")," a specific token by staking and renouncing to the APY. By doing so, the other early stakers will benefit from an increased APY and the booster can withdraw their deposit at any point in time."),(0,s.kt)("p",null,"This model is very interesting for DAOs and protocols looking to promote their token and integration with Ithil."),(0,s.kt)("h3",{id:"an-example"},"An example"),(0,s.kt)("p",null,"Uniswap wants to promote staking of their UNI token, they put 1000 UNI in the Vault and renounce to the 10% APY. A user stakes 10 UNI. They will experience an APY equal to staking 1010 UNI. Obviously, this system works for the early stakers, the more TVL is attracted the more the APY boost is diluted across all stakers."))}h.isMDXComponent=!0},1748:function(a,e,t){var m={"./locale":9234,"./locale.js":9234};function n(a){var e=s(a);return t(e)}function s(a){if(!t.o(m,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return m[a]}n.keys=function(){return Object.keys(m)},n.resolve=s,a.exports=n,n.id=1748}}]);