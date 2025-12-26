import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplTokenSwapAccountsCoder } from "./accounts";
import { TplTokenSwapEventsCoder } from "./events";
import { TplTokenSwapInstructionCoder } from "./instructions";
import { TplTokenSwapStateCoder } from "./state";
import { TplTokenSwapTypesCoder } from "./types";

/**
 * Coder for TplTokenSwap
 */
export class TplTokenSwapCoder implements Coder {
  readonly accounts: TplTokenSwapAccountsCoder;
  readonly events: TplTokenSwapEventsCoder;
  readonly instruction: TplTokenSwapInstructionCoder;
  readonly state: TplTokenSwapStateCoder;
  readonly types: TplTokenSwapTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplTokenSwapAccountsCoder(idl);
    this.events = new TplTokenSwapEventsCoder(idl);
    this.instruction = new TplTokenSwapInstructionCoder(idl);
    this.state = new TplTokenSwapStateCoder(idl);
    this.types = new TplTokenSwapTypesCoder(idl);
  }
}
