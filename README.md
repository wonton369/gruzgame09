# Forest Hedgehog Tap (gruzgame09)

Base App mini app on [Base](https://base.org): tap the hedgehog, batch taps onchain, check-in every 2 minutes, local leaderboard.

## Environment

Copy `.example.env` → `.env.local`:

```bash
NEXT_PUBLIC_URL=http://localhost:3009
NEXT_PUBLIC_GRUZGAME09_CONTRACT_ADDRESS=0x054b776ECe686546Ad23A8e2C6a9D66e0f963315
NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE=bc_...
NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX=0x62635f...
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
```

### Vercel

| Variable | Notes |
|----------|--------|
| `NEXT_PUBLIC_URL` | Optional; production URL from `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` if unset |
| `NEXT_PUBLIC_GRUZGAME09_CONTRACT_ADDRESS` | Optional; defaults in `lib/contracts/gruzgame09Onchain.ts` |
| `NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX` | Required for onchain attribution |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect Cloud project ID |

## Onchain

`tap` / `checkIn` calldata = `encodeFunctionData(...)` + builder suffix from env.

```bash
npm run verify:calldata
```

## Run

```bash
npm install
npm run dev
```

http://localhost:3009

## Contract

`contracts/GruzGame09Onchain.sol` — Base Mainnet: `0x054b776ECe686546Ad23A8e2C6a9D66e0f963315`

## Git (wonton369)

```bash
git config user.email "wonton336699@gmail.com"
git config user.name "wonton369"
```
