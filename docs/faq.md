---
sidebar_position: 6
---

# FAQ
What you wanted to know, but never had the opportunity to ask

---

### Web3
As specified in [this tweet](https://twitter.com/himgajria/status/1266415636789334016), web3 is the creator economy where user data is owned by users themselves and value is created and transferred in a more transparent and fair way.

### Metaverse
The metaverse is a concept of a persistent, online, 3D universe that combines multiple different virtual spaces where users can work, meet, game, and socialize together in these 3D spaces.
They also allow for creating a digital economy with different types of utility tokens and virtual collectibles (NFTs) as well as decentralised governance layers.

### DeFi
DeFi protocols are being built to perform the key functions of a financial system, just in a better way. They are pieces of software (i.e. smart contracts) running on public, permissionless blockchain systems that do not rely on trusted intermediaries (e.g. banks, brokers, clearing houses) to facilitate financial transactions and reduce financial risk between counterparties. These smart contracts operate autonomously as programmed and their performance is verified by the decentralised network of nodes supporting the blockchain. Smart contracts encode the terms, conditions and logic of the financial product or service, or plainly the rules that participants of a financial transaction agree to. The autonomous nature of smart contracts renders intermediaries as we know them redundant because an inherent state of "trustlessness" is created. The only thing standing between multiple counterparties of financial transactions is public software executed in a deterministic, trustless and censorship-resistant manner. The individual is granted verifiability, control and sovereignty.

### Leverage
This is the ratio between the amount invested, and the margin you deposited. 
For example, if you deposited 100 `DAI` worth of margin, and your position has a 5x leverage, 100 x 5 = 500 `DAI` are invested on your behalf.

### Principal
This is the part of Ithil's liquidity used to open your investment. 
For example, if the value of your investment at inception was 500 `DAI`, and you deposited 100 `DAI` worth of margin, then the principal is 500 - 100 = 400 `DAI`.

### TVL
It is the total value locked in the vault, including the currently given loans and excluding the insurance reserve.

### Collateral
The margin you have deposited to open the current position. This serves as a guarantee for the loan taken to open the position, and will be transferred back to you if the position is closed with a gain.

### APY
This is the yearly rate you would obtain by staking on this vault, if the current state persists. For example, by staking 1000 `DAI` on a vault with 20% APY, you would be able to withdraw 1200 `DAI` one year from now.

### What's the difference between APR and APY?
APR (Annual Percentage Rate) is the yearly interest, minus fees. This does not include compounding effects that occur from reinvesting profits. If you were to invest 100 `DAI` with 100% APR, you would make 100 `DAI` in profit in a year time.
If you however reinvest your profits regularly, you will compound your interest. This calculated over a year gives you your APY (Annual Percentage Yield). The more often you compound your interest, the greater the difference between APR and APY.

### How does APY work?
APY is the annual percentage yield offered from a particular investment. This takes into account compound interest, giving you an accurate idea of your returns compared to simple interest.
Large APYs in the percentage of thousands are possible with investments that provide daily yields of 1% or more. Due to your liquidity pool rewards being constantly farmed and reinvested, the interest compounds on larger and larger amounts.
Who can whitelist tokens?
Adding a new supported token is a governance-based decision and needs a global evaluation on the specific token to be added. Currently, we support almost any type of ERC20 tokens, including taxed, rebasing and tokens with hodler reflection tax.

### A liquidity provider wants to withdraw but all funds are deployed, what happens?
They will need to wait that a position is closed or liquidated to unstake funds. At the same time, the more the Vault is used, the less it becomes profitable to open a position, thus freeing funds automatically.
