Enabling traders to go long or short on any token pair

---

Margin trading is a way of trading assets using funds provided by a third party lender. Compared to regular trading where traders use their own assets, margin accounts allow to access greater sums of capital, so that they can leverage their positions increasing market exposure. Essentially, margin trading amplifies trading results so that traders can get bigger profits on successful trades.
It is the first and foremost strategy of Ithil and the best way to get into investing in a simple way.

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

## Risk Factor
The risk factor of r for a given token pair, means that for a position with that token pair to be liquidable, must incur a loss of at least (100-r)%.
Such number is dependant on the specific token: a more volatile token will have a higher risk factor. Then the actual risk factor of the pair, which is applied for liquidation, will be some sort of average (arithmetic, geometric, p-means...) of the two risk factors. The logic behind is that, the higher the token volatility, the more likely the value of the entitlement will fall below the threshold defined by the risk factor, and we do not want that a more likely event will trigger a liquidation (otherwise, too many positions will be liquidable, which we want to avoid).

## Notes
### Taxed and rebasing tokens
Tokens like Floki Inu have a system where on each transfer a percentage from the transfer is redistributed to all token holders and a percentage is sent to the token creator. This way the holders' token balance increases day by day while transactions don't give the exact amount to the recipient. Rebasing tokens, on the other hand, regularly increase the amount of all token holders. An example of that is the Origin Dollar OUSD algorithmic stablecoin.
Thanks to an internal accounting system, Ithil supports this type of tokens and ensures accrued rebasing fees are properly distributed to LPs or traders, depending on the case.