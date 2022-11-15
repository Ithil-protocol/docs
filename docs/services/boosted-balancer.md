---
sidebar_position: 3
---

# Boosted balancer
Enjoy boosted APY with Balancer and Aura

---

Balancer is a very popular dex that, since the launch in 2020, has accrued a couple billions in TVL thanks to its flexible pools that can support two or more assets and different weights to minimise impermanent loss.
Aura finance, on the other hand, is a protocol that maximises Balancer rewards by pooling together all `BAL` deposits and `AURA` native tokens.

```mermaid
sequenceDiagram
    User->>+Strategy: Open position
    Strategy->>+Balancer: Add liquidity
    Balancer-->>-Strategy: Obtain LP tokens
    Strategy->>+Aura: Stake Balancer LP tokens
    User->>+Strategy: Close position
    Strategy->>+Aura: Unstake
    Aura-->>-Strategy: Obtain Balancer LP tokens + rewards
    Strategy->>+Balancer: Remove liquidity
    Balancer-->>-Strategy: Get tokens back
    Strategy->>+Dex: Swap reward tokens
    Dex-->>-Strategy: Obtain tokens
    Strategy->>-User: Take eventual profit
```
## Implementations
* Under development
