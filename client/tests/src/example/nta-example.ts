import assert from "assert";
import { BN } from "@trezoa-serum/trezoaanchor";
import { Keypair, PublicKey } from "@trezoa/web3.js";

import { getProvider, loadKp, test, confirmTx } from "../utils";

export async function ntaExampleTests() {
  const provider = await getProvider();
  const kp = await loadKp();
}
