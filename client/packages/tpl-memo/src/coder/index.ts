import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplMemoAccountsCoder } from "./accounts";
import { TplMemoEventsCoder } from "./events";
import { TplMemoInstructionCoder } from "./instructions";
import { TplMemoStateCoder } from "./state";
import { TplMemoTypesCoder } from "./types";

/**
 * Coder for TplMemo
 */
export class TplMemoCoder implements Coder {
  readonly accounts: TplMemoAccountsCoder;
  readonly events: TplMemoEventsCoder;
  readonly instruction: TplMemoInstructionCoder;
  readonly state: TplMemoStateCoder;
  readonly types: TplMemoTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplMemoAccountsCoder(idl);
    this.events = new TplMemoEventsCoder(idl);
    this.instruction = new TplMemoInstructionCoder(idl);
    this.state = new TplMemoStateCoder(idl);
    this.types = new TplMemoTypesCoder(idl);
  }
}
