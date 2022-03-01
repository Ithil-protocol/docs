---
sidebar_position: 5
---

# Liquidations
If you know them, you avoid them

---

Liquidations are a fundamental part in the echosystem: closing positions getting too close to having their margin completely eroded (more precisely, beyond a strategy-specific percentage called the **risk factor**), they protect the vault's liquidity and prevent the share price of LP tokens to decrease. In this way, liquidity providers are guaranteed to receive a positive APY with a very low risk.

Ithil's liquidation system is completely decentralised and onchain: anyone which holds a sufficient amount of Ithil's governance token can launch Ithil's liquidation functions which will check onchain, using the *quoter* function of the particular strategy, if a given position is liquidable. Liquidators can close one or more positions in one go, thus saving gas and performing a faster liquidation. Once a position is liquidated, the part of the margin which is not eroded is transferred in full to the liquidator: in this way, a faster liquidation will assure the liquidator a higher reward. If the margin is not sufficient to reward the liquidator, we consider this a **bad liquidation**: in this case, a part of the insurance reserve is used to restore the eventual liquidity loss and to compensate the liquidator.

Liquidation is therefore a profitable activity: the best liquidator will have fast and precise bots which quickly identify liquidable positions and launch the liquidation process. Precision is important because, if a liquidator tries to close a non-liquidable position, the liquidation does not take place and the gas is lost.+

There are three possible liquidations to be performed on Ithil.
- **Closing positions**: the liquidator closes one or more positions in behalf of the users, getting the users' margins or part of the insurance reserve if this is not enough. This is the most gas-intensive and risky (closing big positions can have a large market impact, thus reducing the reward), but the potential gains are higher.
- **Margin calls**: the liquidator tops up the position's margin and becomes the owner of the position. This is the cheapest and less gas-intensive form of liquidation, moreover in this way the liquidator can enter the same investment as the previous user, thus if market moves favorably an easy gain can be done. However, the risk for the liquidator is to be in turn liquidated if the market moves unfavorably.
- **Total cover**: the liquidator repays the loan and the fees to the vault and receives the assets locked in the strategy in her or his wallet. This stands in the middle in terms of gas and leaves to the liquidator the choice to arbitrage by immediately selling the received assets, or keeping them for another purpose.

In order to liquidate, liquidators need to stake their Ithil's governance tokens in the liquidation contract: when a good amount of liquidations have been performed, such governance tokens can be withdrawn.