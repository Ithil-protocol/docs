---
sidebar_position: 1
---

# Litepaper

---

## Introduction

Ithil is a **generalized leveraged investments protocol**, which offers the possibility to liquidity providers to stake any ERC20 token and earn fees in that same token, and to investors to use the available liquidity to perform investment with a higher capital than their initial one. This is possible thanks to internal **undercollateralized loans** where the *vault* lends its liquidity to the *strategies*, which will eventually repay the loan and deliver the gains to the investor. In order to use the vault's liquidity, the investor needs to pay a **margin** to the desired strategy: this will cover eventual losses, but is given back to the investor in full in the case of a profitable investment. When the value of an investment falls behind some critical threshold, external **liquidators** can close the position forcefully, getting rewards by doing so. **Governance token** holders can provide liquidity to boost the vault's APY and earn rewards in stablecoins, or can stake their tokens to perform a decentralized liquidation and get rewards in the vault's tokens, besides being able to vote in the DAO's decisions. A simple and solid backing system mathematically insures the dollar value of the governance token never to go below an always increasing floor, thus privileging holders committing to Ithil's community for a long time.

<!-- Ithil protocol is a **permissionless trading aggregator** created to help users optimise their income via a multitude of vetted strategies running cross-chain.
Users can choose a specific strategy depending on the possible profit vs risks, tweak a few parameters and easily place it via the frontend without worrying about which chain they will be executed. Open positions can be closed at any time and can benefit from an undercollateralised leverage up to 10X for the bravest.
Ithil supports almost any ERC20 tokens and offers a stable yield for liquidity providers willing to lend their assets to traders. The protocol takes a fixed and a percentual fee on borrowed assets and redistributes it to governance token holders and a small percentage to the developers behind it. We make strategies simple and intuitive for any investor to take part in: via a set of smart contracts and several investment strategies, Ithil help users maximise their rewards from various liquidity pools (LPs), automated market makers (AMM), yield aggregators, staking pools and other income bearing opportunities in the DeFi ecosystem. This way we provide a huge advantage over attempting to do this manually yourself and risking losing all your assets. -->

## Leveraged investments

With Ithil, anyone can profit from a wide variety of DeFi market scenarios by performing leveraged investments; the seamless workflow allows the investor to enter into any investment strategy with few clicks, letting Ithil's code to deal with all the complex passages necessary to implement the particular strategy.
A high leverage is made possible by an internal system of uncollateralized loans, in which the funds are "borrowed" from Ithil's liquidity vault to be invested, and the result of the particular investment is *locked* in the strategy contract.
In order for a user to be able to perform a leveraged investment through a strategy, there must be some *margin* posted into the strategy. This is necessary to cover for potential losses the vault could incur in the case of an unfavorable market movement.

INSERIRE QUI IMMAGINE OPEN POSITION

The opening of a position is done in three steps:
- The user posts some margin into the strategy and sets the desired investment parameters
- The strategy borrows funds from the vault, if the desired investment is higher than the margin posted
- The strategy performs all the internal and external calls to get *assets* which are then locked into the strategy itself.

Since the amount invested might be higher than the user's initial capital, the investment can be *leveraged*: in this way, the assets obtained will have a much higher value than if the user directly buys them from an external protocol.

INSERIRE QUI IMMAGINE CLOSE POSITION

The closure of a position is likewise done in three steps:
- The assets are exchanged internally or through an external DeFi protocol, to obtain the initial token used for the investment
- The strategy repays the loan taken from the vault, plus interest rates and fees
- The remaining part of the payoff is given back to the trader.

The strategies which can be implemented are in principle very general: Ithil's community can implement a new strategy at any time, and the governance can approve it to use the vault's funds.

INSERIRE QUI IMMAGINE STRATEGY APPROVAL

In order to prevent the governance to make faulty logics which would put the vault's liquidity at risk, all strategies must inherit from a common **base strategy**, which is an *abstract* contract which implements the borrow and repay logic agnostically from the particular investment logic. This has the double advantage of giving a "golden standard" to assure the vault's liquidity is protected, and making the development of new strategies much simpler.

INSERIRE QUI IMMAGINE BASE STRATEGY

Besides calling the relevant external contracts to perform the particular investment, the specific strategies must also implement a **quoter**, a view function which gives at every time the value of the obtained assets with respect to the initial token used to obtain them. This is important for liquidations and cross-margin investments (INSERIRE HYPERLINK).

Since the liquidity transferred from the vault and locked in the form of assets in the strategies belongs to the LPs, every time a loan is taken the vault computes the **interest rate** at which the liquidity can be borrowed for that particular investment. The calculation INSERIRE HYPERLINK of the interest rate takes into account the riskiness of the investment, the amount of liquidity taken, and the amount of margin posted by the user.

We give here two examples of simple strategies, reminding that the actual strategies which can be implemented are potentially infinite and can vary in complexity and risk.

### Margin trading

Margin trading is the simplest form of a strategy, in which the investment logic is exchanging one token for another one on an external exchange platform.

INSERIRE QUI IMMAGINE MTS

The strategy's quoter will keep track of the exchange rate of Token A with respect to Token B. When the position is closed, Token B is exchanged to obtain back Token A: the quantity of Token A obtained will determine if the investment has been profitable or not.
Let us make a numerical example of a **long position**:
- A user posts a margin of 100 TKA to the Margin Trading Strategy (MTS) contract, and decides to go *long* with a x10 leverage on TKB.
- Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 900 TKA from the vault, say at a daily interest rate of 0.1%, and exchange 1000 TKA to obtain 20 TKB from an external protocol. This tokens are locked in the MTS and an onchain position is opened for the user.
- If the user closes the position after 10 days, when the exchange rate has increased by 20% to 60 TKA/TKB, then exchanging 20 TKB back will provide 1200 TKA to the MTS. 
- The MTS will repay the 909 TKA to the vault (900 borrowed plus 1% interest) and deliver the remaining 291 TKA to the user. With a market movement of only 20%, the user has realised a whopping 191% gain thanks to the 10x leverage.

In the case of a **short position** the situation is similar:
- A user posts a margin of 100 TKA to the MTS contract, and decides to go *short* with a x10 leverage on TKB.
- Assuming an exchange rate of 50 TKA/TKB, the MTS will then borrow 20 TKB from the vault, say at a daily interest rate of 0.1%, and exchange them on an external protocol to obtain 1000 TKA. This tokens are locked in the MTS and an onchain position is opened for the user. At this point, 1100 TKA are locked in the MTS.
- If the user closes the position after 10 days, when the exchange rate has decreased by 20% to 40 TKA/TKB, then only 808 TKA are necessary to obtain the 20.2 TKB back to repay the vault (20 borrowed plus 1% interest). 
- The remaining 292 TKA are delivered to the user. A market movement of only 20% has made the trader earn 192% thanks to the 10x leverage.

In both cases, the user can post the margin either in TKA or TKB, and the MTS will adjust the amount of the loan to take from the vault accordingly.
Of course, if the market moves unfavorably, the losses are equally aplified with respect of a non-leveraged trade. If the exchange falls below some critical level, the position will be liquidated INSERIRE HYPERLINK

### Leveraged staking

Through the Leveraged Staking Strategy (LSS), the vault's liquidity can be borrowed and staked on an external protocol to get a leveraged yield. If the yield obtained from the staking protocol is higher than the interest rate necessary to borrow the funds, the difference represents the gain of the user.

INSERIRE QUI IMMAGINE STAKING PROTOCOL

Let us make a numerical example.
- A user posts a margin of 100 TKA to the LSS contract, and decides to stake TKA on an external staking protocol SP with a 10x leverage.
- The LSS contract will borrow 900 TKA from the vault and stake the 1000 TKA on SP, obtaining say 1000 lTKA, the wrapped tokens representing the stake.
- Assume that, after one month, the rolling APR of SP hah been 60%, thus giving a monthly gain of 5%. Assume also that the monthly interest rate applied by Ithil's vault has been 3%. 
- If the user closes its position, the 1000 lTKA will be redeemed on SP to obtain 1050 TKA, while the vault has to be repaied of 927 TKA (900 TKA borrowed, plus 3%). The remaining 123 TKA are given back to the user, which will see a 23% gain in one month using a staking protocol which has only given 5% of yield. This is possible thanks to the x10 leverage.


In both cases, the user can post the margin either in TKA or lTKA, and the MTS will adjust the amount of the loan to take from the vault accordingly.
Of course, if the price per share increases less than the applied interest rate, the user may lose money. If the interest accrued go above some critical level, the position will be liquidated INSERIRE HYPERLINK

## Undercollateralized loans

### Ithil's vault

### LP tokens and liquidity mining

## Liquidations

## Governance token

### Liquidity mining

### Liquidations

### Rewards

## Ithil's DAO

### Key takeaways
* Internal undercollateralised leverage system
* Trade any ERC20 token, including meme/gaming tokens and fractionalised NFTs
* Fully on-chain, can be integrated in other protocols
* Gas optimisation and liquidity aggregation via multi-chain routing
* Efficient liquidation via a network of bots that anyone can run
* Several strategies to choose from, with different risk and reward levels

### Long-term vision
We envision to build a self-sovereign DAO - a decentralised autonomous organisation - with a thriving community of traders, LPs as well as people who put in work for the advancement of the protocol itself. As a reward, these contributors will be paid in governance tokens. We foresee onboard designers, developers, financial experts, traders and marketers to work on several different side-projects and spin-offs like adding new strategies. Thanks to the community, the protocol will constantly enrich with new strategies by using community inputs as a way to democratise and distribute the development and progress of Ithil itself.

### Why is Ithil different from other protocols on the market
* **Cross-chain** diversified portfolio of popular DeFi **strategies**.
* **Undercollateralised leverage** to boost your profits.
* The protocol is chain-independent, you can execute a strategy on Polygon while having your assets on Ethereum mainnet
* Liquidity providers get **rewarded with their favourite token**, thus allowing them to stake virtually any crypto asset (supported by Ithil). Usually, other protocols reward liquidity providers with governance tokens.
* Flexible trading experience with (almost) **any type of token allowed as margin**, sophisticated charts, and good market rates will attract more traders to us. Typical margin trading platforms are hard to use, gas intensive, and ultimately unattractive or just support a handful of tokens.
* The **governance token will be inflationary**: backed by the protocol earnings and giving opportunity to earn even more by providing support to the platform.

## Who is behind it
The idea started when three developers with diverse backgrounds met during a hackathon. In our discussions, it was clear that the DeFi world lacked a consistent way to provide liquidity and earn income in the same token staked and that the existing protocols are so rigid in nature, that they struggle to keep pace with the fast growing DeFi world. At the same time, most investors were struggling to find easy ways to execute repetitive strategies on multiple chains. 
We iterated on that, took some ideas from traditional finance and translated them into crypto language: our goal was initially to create a platform which only allowed margin trading, but we then realized that our project had much bigger potential since the earning system of the vault (the core of our protocol) is agnostic of the investment activity. Now that the core is robust and well-refined, we are heading to creating the largest diversified investment platform available in the market.
We prefer to stay anonymous as want the project and its DAO to be the real and public facade and by being anon the team can totally focus on providing value to the community.

### How can I get in touch with you
We are available on Discord or Twitter, ping us there and we will be happy to answer!