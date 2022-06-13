# simplygo-node

API wrapper to access TransitLink SimplyGo Transactions of the
Singapore Public Transit System.

### Installation

...

### Usage

```typescript
import {SimplyGoApi} from "simplygo-node";

const simplyGo = new SimplyGoApi();

await simplyGo.login({
    user_email: "aniruddha@foobar.net",
    user_password: "foobar"
});

const cards = await simplyGo.getCards();

const transactions = await simplyGo.getTransactions({
    card_id: cards.data[0].UniqueCode, start_date: "13-06-2022", end_date: "13-06-2022"
});

console.table(
    transactions.data.Histories.map(history => ({
        fare: history.Fare,
        pickup: history.EntryLocationName,
        dropOff: history.ExitLocationName
    }))
);

await simplyGo.logout();
```

```text
┌─────────┬─────────┬──────────────────────┬───────────────────────┐
│ (index) │  fare   │        pickup        │        dropOff        │
├─────────┼─────────┼──────────────────────┼───────────────────────┤
│    0    │ '$0.95' │  'Federals Pk Stn'   │    'Catsonn Gdns'     │
│    1    │ '$0.95' │ 'Fukushi Residences' │ 'Opp Federals Pk Stn' │
└─────────┴─────────┴──────────────────────┴───────────────────────┘
```