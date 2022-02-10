---
sidebar_position: 1
---

# How it works
Take a look under the hood

---

## Core Architecture

The protocol at its core consists of a lending and borrowing engine that empowers strategies added on top of it.
* **Vault**: collects staked tokens from LPs and issues loans to traders;
* **Strategy**: performs a set of actions to generate a revenue for the user
* **Liquidator** bots: tied to strategies, ensure all leveraged positions are covered, liquidating them if not
