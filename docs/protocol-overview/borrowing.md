---
sidebar_position: 3
---

# Borrowing
Access the web3 space with more capital than the one at your disposal

---

With Ithil, anyone can enjoy the web3 space thanks to its financial services; the seamless workflow allows the user to enter into any service with few clicks, letting Ithil deal with all the complex procedures necessary to implement it.
A *true* capital boost is made possible by an internal system of uncollateralised loans, in which the funds are borrowed from Ithil's liquidity vault to be invested and the result of the particular service is *locked* in the service contract.
In order for a user to be able to perform, there must be some *margin* posted into the service smart contract; this is necessary to cover for potential losses the vault could incur in the case of an unfavorable market movement.


## Take Loan

The opening of a position is done in three steps:
- The user posts some margin into the service and sets the desired investment parameters
- The service borrows funds from the vault, if the desired amount to be invested is higher than the margin posted
- The service performs all the internal and external calls to invest (eventually borrowed) assets on other protocols while resulting assets (LP tokens, NFTs, ...) stay locked within the service contract itself.

Since the amount used might be higher than the user's initial capital, the investment can be *leveraged*: in this way, the assets obtained will have a much higher value than if the user directly buys them from an external protocol.

```mermaid
graph TD
    A[User] -->|Add margin| B{Is amount > margin?}
    B -->|Yes| C(Take a loan<br> from the Vault)
    C --> D(Invest)
    B -->|No| D[Strategy]
    D --> E(Invest)
```

## Repay

The closure of a position is likewise done in three steps:
- The assets are exchanged internally or through an external protocol, to obtain the initial token used for the investment
- The service repays the loan taken from the vault, plus interest rates and fees
- The remaining part of the payoff is given back to the trader.

```mermaid
graph TD
    A[User] -->|Close position| B{Is PnL > margin?}
    B -->|Yes| C(Take profit)
    B -->|No| D(Incur loss)
```

A side note, the *profit and loss* or PnL is computed as follows 
$$
PnL = amount - loan - fees
$$