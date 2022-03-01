---
sidebar_position: 1
---

# Leveraged staking
Allowing traders to multiply their staking returns

---

Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocol to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents the gain of the user.

![Leveraged staking strategy](/img/strategies/leveraged-staking.png)

Let us make a numerical example.
- A user posts a margin of 100 TKA to the LSS contract and decides to stake TKA on an external staking protocol SP with a 10x leverage.
- The LSS contract will borrow 900 TKA from the vault and stake the 1000 TKA on SP, obtaining say 1000 lTKA, the wrapped tokens representing the stake.
- Assume that, after one month, the rolling APR of SP hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. 
- If the user closes its position, the 1000 lTKA will be redeemed on SP to obtain 1050 TKA, while the vault has to be repaied of 927 TKA (900 TKA borrowed, plus 3%). The remaining 123 TKA are given back to the user, who will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.

In both cases, the user can post the margin either in TKA or lTKA and the MTS will adjust the amount of the loan to take from the vault accordingly.
Of course, if the price per share increases less than the applied interest rate, the user may lose money. If the interest accrued go above some critical level, the position will be liquidated.