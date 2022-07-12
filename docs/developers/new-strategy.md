---
sidebar_position: 1
---

# Create a new strategy
Built on top of Ithil

---

To create a new strategy simply extend the [BaseStrategy.sol](https://github.com/Ithil-protocol/v1-core/blob/master/contracts/strategies/BaseStrategy.sol) smart contract.

A strategy consists of three main functions.
* The `_openPosition` function is responsible for executing the core interaction logic with other protocols 
* The `_closePosition` function unstakes/swaps/withdraws tokens from external protocols and send them to the vault to repay the loan (if the invested amount is greater than the collateral posted, i.e. leverage > 1x)
* The `quote` function is a stateless pricing function that must give a specific numeric value to the overall investment according to the supplied inputs; it is a fundamental piece of any strategy contract and it is used by both users and liquidators.

The constructor is the place where to put extra required arguments and perform the init logic like token approvals. It is also possible to add other functions responsible for whitelisting or any other governance-tied logic. By design **we prefer to keep strategies token-agnostic** and make sure they can seamlessly work for all tokens supported by a specific protocol.

## Handling positions

It is relevant to start by taking a look at the Order object, the one passed by the user to the `_openPosition` function from the [IStrategy.sol](https://github.com/Ithil-protocol/v1-core/blob/master/contracts/interfaces/IStrategy.sol) file.

```javascript
    /// @param spentToken the token we spend to enter the investment
    /// @param obtainedToken the token obtained as result of the investment
    /// @param collateral the amount of tokens to reserve as collateral
    /// @param collateralIsSpentToken if true collateral is in spentToken,
    //                                if false it is in obtainedToken
    /// @param minObtained the min amount of obtainedToken to obtain
    /// @param maxSpent the max amount of spentToken to spend
    /// @param deadline this order must be executed before deadline
    struct Order {
        address spentToken;
        address obtainedToken;
        uint256 collateral;
        bool collateralIsSpentToken;
        uint256 minObtained;
        uint256 maxSpent;
        uint256 deadline;
    }
```

All token transfer logic from the user, borrow and repayment from the Vault is buried in the *BaseStrategy* and you can assume that at the beginning of `_openPosition` you already have the tokens needed inside the strategy contract.

## An Example

This is a minimal working strategy that does nothing and returns tokens to the user when they close the position.

```solidity
// SPDX-License-Identifier: BUSL-1.1
pragma solidity >=0.8.12;

import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { BaseStrategy } from "./BaseStrategy.sol";

contract ExampleStrategy is BaseStrategy {
    using SafeERC20 for IERC20;

    constructor(
        address _vault,
        address _liquidator
    ) BaseStrategy(_vault, _liquidator, "ExampleStrategy", "ITHIL-ES-POS") {}

    function _openPosition(Order calldata order) internal override returns (uint256 amountIn) {}

    function _closePosition(Position memory position, uint256 expectedCost)
        internal
        override
        returns (uint256 amountIn, uint256 amountOut)
    {
        IERC20(position.owedToken).safeTransfer(address(vault), amountIn);
    }

    function quote(
        address src,
        address dst,
        uint256 amount
    ) public view override returns (uint256, uint256) {
        return (amount, amount);
    }
}
```
