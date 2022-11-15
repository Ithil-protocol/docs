"use strict";(self.webpackChunk_ithil_protocol_docs=self.webpackChunk_ithil_protocol_docs||[]).push([[871],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Create a new strategy",p={unversionedId:"developers/new-strategy",id:"developers/new-strategy",title:"Create a new strategy",description:"Built on top of Ithil",source:"@site/docs/developers/new-strategy.md",sourceDirName:"developers",slug:"/developers/new-strategy",permalink:"/docs/developers/new-strategy",editUrl:"https://github.com/ithil-protocol/docs/docs/developers/new-strategy.md",tags:[],version:"current",lastUpdatedAt:1668504178,formattedLastUpdatedAt:"11/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Curve wars",permalink:"/docs/strategies/curve-wars"},next:{title:"Testnet setup",permalink:"/docs/how-to/testnet-setup"}},u=[{value:"Handling positions",id:"handling-positions",children:[],level:2},{value:"An Example",id:"an-example",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-new-strategy"},"Create a new strategy"),(0,a.kt)("p",null,"Built on top of Ithil"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To create a new strategy simply extend the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ithil-protocol/v1-core/blob/master/contracts/strategies/BaseStrategy.sol"},"BaseStrategy.sol")," smart contract."),(0,a.kt)("p",null,"A strategy consists of three main functions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"_openPosition")," function is responsible for executing the core interaction logic with other protocols "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"_closePosition")," function unstakes/swaps/withdraws tokens from external protocols and send them to the vault to repay the loan (if the invested amount is greater than the collateral posted, i.e. leverage > 1x)"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"quote")," function is a stateless pricing function that must give a specific numeric value to the overall investment according to the supplied inputs; it is a fundamental piece of any strategy contract and it is used by both users and liquidators.")),(0,a.kt)("p",null,"The constructor is the place where to put extra required arguments and perform the init logic like token approvals. It is also possible to add other functions responsible for whitelisting or any other governance-tied logic. By design ",(0,a.kt)("strong",{parentName:"p"},"we prefer to keep strategies token-agnostic")," and make sure they can seamlessly work for all tokens supported by a specific protocol."),(0,a.kt)("h2",{id:"handling-positions"},"Handling positions"),(0,a.kt)("p",null,"It is relevant to start by taking a look at the Order object, the one passed by the user to the ",(0,a.kt)("inlineCode",{parentName:"p"},"_openPosition")," function from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ithil-protocol/v1-core/blob/master/contracts/interfaces/IStrategy.sol"},"IStrategy.sol")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    /// @param spentToken the token we spend to enter the investment\n    /// @param obtainedToken the token obtained as result of the investment\n    /// @param collateral the amount of tokens to reserve as collateral\n    /// @param collateralIsSpentToken if true collateral is in spentToken,\n    //                                if false it is in obtainedToken\n    /// @param minObtained the min amount of obtainedToken to obtain\n    /// @param maxSpent the max amount of spentToken to spend\n    /// @param deadline this order must be executed before deadline\n    struct Order {\n        address spentToken;\n        address obtainedToken;\n        uint256 collateral;\n        bool collateralIsSpentToken;\n        uint256 minObtained;\n        uint256 maxSpent;\n        uint256 deadline;\n    }\n")),(0,a.kt)("p",null,"All token transfer logic from the user, borrow and repayment from the Vault is buried in the ",(0,a.kt)("em",{parentName:"p"},"BaseStrategy")," and you can assume that at the beginning of ",(0,a.kt)("inlineCode",{parentName:"p"},"_openPosition")," you already have the tokens needed inside the strategy contract."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"This is a minimal working strategy that does nothing and returns tokens to the user when they close the position."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// SPDX-License-Identifier: MIT\npragma solidity >=0.8.12;\n\nimport { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";\nimport { BaseStrategy } from "./BaseStrategy.sol";\n\ncontract ExampleStrategy is BaseStrategy {\n    using SafeERC20 for IERC20;\n\n    constructor(\n        address _vault,\n        address _liquidator\n    ) BaseStrategy(_vault, _liquidator, "ExampleStrategy", "ITHIL-ES-POS") {}\n\n    /// @notice open a position\n    /// @param order the structure with the order parameters\n    /// @return amountIn the amount of tokens obtained from an external protocol\n    function _openPosition(Order calldata order) internal override returns (uint256 amountIn) {}\n\n    /// @notice close the position\n    /// @param positionId the id of the position to be closed\n    /// @param expectedCost the acceptable slippage\n    /// @return (amountIn, amountOut) the amount obtained and spent when closing the position\n    function _closePosition(Position memory position, uint256 expectedCost)\n        internal\n        override\n        returns (uint256 amountIn, uint256 amountOut)\n    {\n        IERC20(position.owedToken).safeTransfer(address(vault), amountIn);\n    }\n\n    /// @notice gives the amount of destination tokens the external protocol\n    ///         would produce by spending an amount of source token\n    /// @param src the token to give to the external strategy\n    /// @param dst the token expected from the external strategy\n    /// @param amount the amount of src tokens to be given\n    /// @return (min, max) the min and max amounts\n    function quote(\n        address src,\n        address dst,\n        uint256 amount\n    ) public view override returns (uint256, uint256) {\n        return (amount, amount);\n    }\n}\n')))}d.isMDXComponent=!0}}]);