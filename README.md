# simplygo-node

API wrapper to access TransitLink SimplyGo Transactions of the
Singapore Public Transit System.

### Installation

...

### Usage

```typescript
const {data: {data: {user_sess_key}}} = await login({
    user_email: "aniruddha@foo.net",
    user_password: "helloworld"
});

const cards = await getCards({user_sess_key});

const transactions = await getTransactions({
    user_sess_key,
    card_id: "hello",
    start_date: "13-06-2022",
    end_date: "13-06-2022"
});
```

```text
┌─────────┬─────────┬──────────────────────┬───────────────────────┐
│ (index) │  fare   │        pickup        │        dropOff        │
├─────────┼─────────┼──────────────────────┼───────────────────────┤
│    0    │ '$0.95' │  'Federals Pk Stn'   │    'Catsonn Gdns'     │
│    1    │ '$0.95' │ 'Fukushi Residences' │ 'Opp Federals Pk Stn' │
└─────────┴─────────┴──────────────────────┴───────────────────────┘
```