import { isAddress } from "viem";

export const GRUZGAME09_CHECKIN_PRICE_ETH = "0.00001";

const ZERO = "0x0000000000000000000000000000000000000000" as const;

/** Deployed on Base Mainnet — https://basescan.org/address/0x054b776ECe686546Ad23A8e2C6a9D66e0f963315 */
export const GRUZGAME09_CONTRACT_ADDRESS_DEFAULT =
  "0x054b776ECe686546Ad23A8e2C6a9D66e0f963315" as const;
export const GRUZGAME09_BUILDER_CODE_DEFAULT = "bc_4mesnvaw";
export const GRUZGAME09_BUILDER_CODE_DATA_SUFFIX_DEFAULT =
  "0x62635f346d65736e7661770b0080218021802180218021802180218021" as const;

export const gruzGame09OnchainAbi = [
  {
    inputs: [{ internalType: "uint256", name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkIn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

/** Env override; falls back to deployed mainnet address. */
export function getGruzGame09ContractAddress(): `0x${string}` {
  const raw = process.env.NEXT_PUBLIC_GRUZGAME09_CONTRACT_ADDRESS?.trim();
  if (raw && isAddress(raw) && raw.toLowerCase() !== ZERO) {
    return raw as `0x${string}`;
  }
  return GRUZGAME09_CONTRACT_ADDRESS_DEFAULT;
}

export function isGruzGame09ContractConfigured(): boolean {
  return isAddress(getGruzGame09ContractAddress());
}

/**
 * Appends ERC-8021 builder data suffix from env (base.dev Builder Code).
 * NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX must start with 0x.
 */
export function withGruzGame09BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  const suffix =
    process.env.NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX?.trim() ||
    GRUZGAME09_BUILDER_CODE_DATA_SUFFIX_DEFAULT;
  if (!suffix?.startsWith("0x") || suffix.length <= 2) {
    return data;
  }
  return `${data}${suffix.slice(2)}` as `0x${string}`;
}

export function isGruzGame09BuilderConfigured(): boolean {
  const suffix =
    process.env.NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX?.trim() ||
    GRUZGAME09_BUILDER_CODE_DATA_SUFFIX_DEFAULT;
  return Boolean(suffix?.startsWith("0x") && suffix.length > 2);
}

export function getGruzGame09BuilderCode(): string | null {
  const code = process.env.NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE?.trim() || GRUZGAME09_BUILDER_CODE_DEFAULT;
  return code && code.length > 0 ? code : null;
}
