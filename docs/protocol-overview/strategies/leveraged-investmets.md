---
sidebar_position: 2
---

## Leveraged investments

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

### Margin trading

Margin trading is the simplest form of a strategy, in which the investment logic is exchanging one token for another one on an external exchange platform.

![Margin trading strategy](/img/strategies/margin-trading.png)

The strategy's quoter will keep track of the exchange rate of Token A with respect to Token B. When the position is closed, Token B is exchanged to obtain back Token A: the quantity of Token A obtained will determine if the investment has been profitable or not.
Let us make a numerical example of a **long position**:
- A user posts a margin of 100 TKA to the Margin Trading Strategy (MTS) contract and decides to go *long* with a x10 leverage on TKB.
- Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 900 TKA from the vault, say at a daily interest rate of 0.1% and exchange 1000 TKA to obtain 20 TKB from an external protocol. This tokens are locked in the MTS and an onchain position is opened for the user.
- If the user closes the position after 10 days, when the exchange rate has increased by 20% to 60 TKA/TKB, then exchanging 20 TKB back will provide 1200 TKA to the MTS. 
- The MTS will repay the 909 TKA to the vault (900 borrowed plus 1% interest) and deliver the remaining 291 TKA to the user. With a market movement of only 20%, the user has realised a whopping 191% gain thanks to the 10x leverage.

In the case of a **short position** the situation is similar:
- A user posts a margin of 100 TKA to the MTS contract and decides to go *short* with a x10 leverage on TKB.
- Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 20 TKB from the vault, say at a daily interest rate of 0.1% and exchange them on an external protocol to obtain 1000 TKA. This tokens are locked in the MTS and an onchain position is opened for the user. At this point, 1100 TKA are locked in the MTS.
- If the user closes the position after 10 days, when the exchange rate has decreased by 20% to 40 TKA/TKB, then only 808 TKA are necessary to obtain the 20.2 TKB back to repay the vault (20 borrowed plus 1% interest). 
- The remaining 292 TKA are delivered to the user. A market movement of only 20% has made the trader earn 192% thanks to the 10x leverage.

In both cases, the user can post the margin either in TKA or TKB and the MTS will adjust the amount of the loan to take from the vault accordingly.
Of course, if the market moves unfavorably, the losses are equally aplified with respect of a non-leveraged trade. If the exchange falls below some critical level, the position will be liquidated.

### Leveraged staking

Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocol to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents the gain of the user.

![Leveraged staking strategy](/img/strategies/leveraged-staking.png)

Let us make a numerical example.
- A user posts a margin of 100 TKA to the LSS contract and decides to stake TKA on an external staking protocol SP with a 10x leverage.
- The LSS contract will borrow 900 TKA from the vault and stake the 1000 TKA on SP, obtaining say 1000 lTKA, the wrapped tokens representing the stake.
- Assume that, after one month, the rolling APR of SP hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. 
- If the user closes its position, the 1000 lTKA will be redeemed on SP to obtain 1050 TKA, while the vault has to be repaied of 927 TKA (900 TKA borrowed, plus 3%). The remaining 123 TKA are given back to the user, who will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.


In both cases, the user can post the margin either in TKA or lTKA and the MTS will adjust the amount of the loan to take from the vault accordingly.
Of course, if the price per share increases less than the applied interest rate, the user may lose money. If the interest accrued go above some critical level, the position will be liquidated.