import { encodeFunctionData } from "viem";
import { Attribution } from "ox/erc8021";

const builderCode = process.env.NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE?.trim();
const suffixEnv = process.env.NEXT_PUBLIC_GRUZGAME09_BUILDER_CODE_DATA_SUFFIX?.trim();

const abi = [
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
];

const tap = encodeFunctionData({ abi, functionName: "tap", args: [3n] });
const checkIn = encodeFunctionData({ abi, functionName: "checkIn" });

const derivedSuffix = builderCode
  ? Attribution.toDataSuffix({ codes: [builderCode] })
  : null;

const suffix = suffixEnv?.startsWith("0x") ? suffixEnv.slice(2) : null;

const withSuffix = (data) => (suffix ? `${data}${suffix}` : data);

console.log("Builder code:", builderCode ?? "(not set)");
console.log("Env suffix:", suffixEnv ?? "(not set)");
if (derivedSuffix) {
  console.log("Derived suffix (ox):", derivedSuffix);
  if (suffixEnv && derivedSuffix.toLowerCase() !== suffixEnv.toLowerCase()) {
    console.warn("WARNING: env suffix does not match ox derivation");
  }
}
console.log("");
console.log("tap(3):", withSuffix(tap));
console.log("checkIn():", withSuffix(checkIn));
