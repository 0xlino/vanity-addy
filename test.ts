import { getVanityWallet } from "./index";

const prefix = '999';
const suffix = '';
const isChecksum = false;

getVanityWallet(500, prefix, suffix, isChecksum, (wallet: any) => {
    console.log(wallet);
})
