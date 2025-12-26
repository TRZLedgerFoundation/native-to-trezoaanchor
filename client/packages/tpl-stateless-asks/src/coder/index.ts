import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplStatelessAsksAccountsCoder } from "./accounts";
import { TplStatelessAsksEventsCoder } from "./events";
import { TplStatelessAsksInstructionCoder } from "./instructions";
import { TplStatelessAsksStateCoder } from "./state";
import { TplStatelessAsksTypesCoder } from "./types";

/**
 * Coder for TplStatelessAsks
 */
export class TplStatelessAsksCoder implements Coder {
  readonly accounts: TplStatelessAsksAccountsCoder;
  readonly events: TplStatelessAsksEventsCoder;
  readonly instruction: TplStatelessAsksInstructionCoder;
  readonly state: TplStatelessAsksStateCoder;
  readonly types: TplStatelessAsksTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplStatelessAsksAccountsCoder(idl);
    this.events = new TplStatelessAsksEventsCoder(idl);
    this.instruction = new TplStatelessAsksInstructionCoder(idl);
    this.state = new TplStatelessAsksStateCoder(idl);
    this.types = new TplStatelessAsksTypesCoder(idl);
  }
}
