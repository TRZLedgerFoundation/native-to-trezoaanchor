import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplAssociatedTokenAccountAccountsCoder } from "./accounts";
import { TplAssociatedTokenAccountEventsCoder } from "./events";
import { TplAssociatedTokenAccountInstructionCoder } from "./instructions";
import { TplAssociatedTokenAccountStateCoder } from "./state";
import { TplAssociatedTokenAccountTypesCoder } from "./types";

/**
 * Coder for TplAssociatedTokenAccount
 */
export class TplAssociatedTokenAccountCoder implements Coder {
  readonly accounts: TplAssociatedTokenAccountAccountsCoder;
  readonly events: TplAssociatedTokenAccountEventsCoder;
  readonly instruction: TplAssociatedTokenAccountInstructionCoder;
  readonly state: TplAssociatedTokenAccountStateCoder;
  readonly types: TplAssociatedTokenAccountTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplAssociatedTokenAccountAccountsCoder(idl);
    this.events = new TplAssociatedTokenAccountEventsCoder(idl);
    this.instruction = new TplAssociatedTokenAccountInstructionCoder(idl);
    this.state = new TplAssociatedTokenAccountStateCoder(idl);
    this.types = new TplAssociatedTokenAccountTypesCoder(idl);
  }
}
