---
sidebar_position: 3
---

# Leveraged investments
Multiplying the capital at your disposal

---

With Ithil, anyone can profit from a wide variety of DeFi market scenarios by performing leveraged investments; the seamless workflow allows the trader to enter into any investment strategy with few clicks, letting Ithil deal with all the complex procedures necessary to implement a particular strategy.
A *true* leverage is made possible by an internal system of uncollateralised loans, in which the funds are borrowed from Ithil's liquidity vault to be invested and the result of the particular investment is *locked* in the strategy contract.
In order for a user to be able to perform a leveraged investment via a selected strategy, there must be some *margin* posted into the strategy smart contract; this is necessary to cover for potential losses the vault could incur in the case of an unfavorable market movement.

![Borrowing process](/img/core/borrow-process.png)

The opening of a position is done in three steps:
- The user posts some margin into the strategy and sets the desired investment parameters
- The strategy borrows funds from the vault, if the desired investment is higher than the margin posted
- The strategy performs all the internal and external calls to get *assets* which are then locked into the strategy itself.

Since the amount invested might be higher than the user's initial capital, the investment can be *leveraged*: in this way, the assets obtained will have a much higher value than if the user directly buys them from an external protocol.

![Repayment process](/img/core/repay-process.png)

The closure of a position is likewise done in three steps:
- The assets are exchanged internally or through an external DeFi protocol, to obtain the initial token used for the investment
- The strategy repays the loan taken from the vault, plus interest rates and fees
- The remaining part of the payoff is given back to the trader.

The strategies which can be implemented are in principle very general: Ithil's community can implement a new strategy at any time and the governance can approve it to use the vault's funds.

![Strategy approval process](/img/strategies/strategy-approval-process.png)

In order to prevent the governance to take faulty decisions which would put the protocol's liquidity at risk, all strategies must inherit from a common **base strategy**, an *abstract* contract which implements the borrow and repay logic agnostically from the particular investment logic. Such measure has the double advantage of setting a precise standard to assure the vault's liquidity is protected and to make the development of new strategies much simpler and faster.

![Base strategy](/img/core/strategies.png)

Besides calling the relevant external contracts to perform the particular investment, the specific strategies must also implement a **quoter**, a view function which gives at every time the value of the obtained assets with respect to the initial token used to obtain them. This is important for liquidations and for margins given in the asset token.

Since the liquidity transferred from the vault and locked in the form of assets in the strategies belongs to the LPs, every time a loan is taken the vault computes the **interest rate** at which the liquidity can be borrowed for that particular investment. The calculation of the interest rate takes into account the riskiness of the investment, the amount of liquidity taken and the amount of margin posted by the user.

We give here two examples of simple strategies, while ideally **the strategies that can be implemented are potentially infinite and can vary in complexity and risk, covering pure DeFi to more structured TradFi-like ones**.

