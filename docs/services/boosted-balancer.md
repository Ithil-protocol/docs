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
    User->>+Service: Open position
    Service->>+Balancer: Add liquidity
    Balancer-->>-Service: Obtain LP tokens
    Service->>+Aura: Stake Balancer LP tokens
    User->>+Service: Close position
    Service->>+Aura: Unstake
    Aura-->>-Service: Obtain Balancer LP tokens + rewards
    Service->>+Balancer: Remove liquidity
    Balancer-->>-Service: Get tokens back
    Service->>+Dex: Swap reward tokens
    Dex-->>-Service: Obtain tokens
    Service->>-User: Take eventual profit
```
## Implementations
It is required for the user to enter the pool using proportional token amounts, so Ithil enforces that on a contract level. The user can choose to enter the pool with a single token, but the service will automatically convert it to the other token using the Balancer pool weights.
