import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplStakePoolAccountsCoder } from "./accounts";
import { TplStakePoolEventsCoder } from "./events";
import { TplStakePoolInstructionCoder } from "./instructions";
import { TplStakePoolStateCoder } from "./state";
import { TplStakePoolTypesCoder } from "./types";

/**
 * Coder for TplStakePool
 */
export class TplStakePoolCoder implements Coder {
  readonly accounts: TplStakePoolAccountsCoder;
  readonly events: TplStakePoolEventsCoder;
  readonly instruction: TplStakePoolInstructionCoder;
  readonly state: TplStakePoolStateCoder;
  readonly types: TplStakePoolTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplStakePoolAccountsCoder(idl);
    this.events = new TplStakePoolEventsCoder(idl);
    this.instruction = new TplStakePoolInstructionCoder(idl);
    this.state = new TplStakePoolStateCoder(idl);
    this.types = new TplStakePoolTypesCoder(idl);
  }
}
