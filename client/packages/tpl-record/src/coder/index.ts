import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplRecordAccountsCoder } from "./accounts";
import { TplRecordEventsCoder } from "./events";
import { TplRecordInstructionCoder } from "./instructions";
import { TplRecordStateCoder } from "./state";
import { TplRecordTypesCoder } from "./types";

/**
 * Coder for TplRecord
 */
export class TplRecordCoder implements Coder {
  readonly accounts: TplRecordAccountsCoder;
  readonly events: TplRecordEventsCoder;
  readonly instruction: TplRecordInstructionCoder;
  readonly state: TplRecordStateCoder;
  readonly types: TplRecordTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplRecordAccountsCoder(idl);
    this.events = new TplRecordEventsCoder(idl);
    this.instruction = new TplRecordInstructionCoder(idl);
    this.state = new TplRecordStateCoder(idl);
    this.types = new TplRecordTypesCoder(idl);
  }
}
