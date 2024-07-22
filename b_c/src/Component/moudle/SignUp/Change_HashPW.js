import { HmacSHA256 } from "crypto-js";
const sockets = require("../sockets.js");

export async function Change_HashPW(PW) {
  const key = await sockets.Make_Hash_Server();
  const HashPW = HmacSHA256(PW, key.key).toString();
  const result_HashPW = {
    key: key,
    HashPW: HashPW,
  };

  return result_HashPW;
}
