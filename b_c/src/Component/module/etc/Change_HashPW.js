import { HmacSHA256 } from "crypto-js";

export async function Change_HashPW(PW, key) {
  const HashPW = HmacSHA256(PW, key).toString();
  return HashPW;
}
