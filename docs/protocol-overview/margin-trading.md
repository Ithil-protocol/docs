Enabling traders to go long or short on any token pair

---

Margin trading is a way of trading assets using funds provided by a third party lender. Compared to regular trading where traders use their own assets, margin accounts allow to access greater sums of capital, so that they can leverage their positions increasing market exposure. Essentially, margin trading amplifies trading results so that traders can get bigger profits on successful trades.
It is the first and foremost strategy of Ithil and the best way to get into investing in a simple way.

## Risk Factor
The risk factor of r for a given token pair, means that for a position with that token pair to be liquidable, must incur a loss of at least (100-r)%.
Such number is dependant on the specific token: a more volatile token will have a higher risk factor. Then the actual risk factor of the pair, which is applied for liquidation, will be some sort of average (arithmetic, geometric, p-means...) of the two risk factors. The logic behind is that, the higher the token volatility, the more likely the value of the entitlement will fall below the threshold defined by the risk factor, and we do not want that a more likely event will trigger a liquidation (otherwise, too many positions will be liquidable, which we want to avoid).

## Notes
### Taxed and rebasing tokens
Tokens like Floki Inu have a system where on each transfer a percentage from the transfer is redistributed to all token holders and a percentage is sent to the token creator. This way the holders' token balance increases day by day while transactions don't give the exact amount to the recipient. Rebasing tokens, on the other hand, regularly increase the amount of all token holders. An example of that is the Origin Dollar OUSD algorithmic stablecoin.
Thanks to an internal accounting system, Ithil supports this type of tokens and ensures accrued rebasing fees are properly distributed to LPs or traders, depending on the case.