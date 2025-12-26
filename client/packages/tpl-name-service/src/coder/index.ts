import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplNameServiceAccountsCoder } from "./accounts";
import { TplNameServiceEventsCoder } from "./events";
import { TplNameServiceInstructionCoder } from "./instructions";
import { TplNameServiceStateCoder } from "./state";
import { TplNameServiceTypesCoder } from "./types";

/**
 * Coder for TplNameService
 */
export class TplNameServiceCoder implements Coder {
  readonly accounts: TplNameServiceAccountsCoder;
  readonly events: TplNameServiceEventsCoder;
  readonly instruction: TplNameServiceInstructionCoder;
  readonly state: TplNameServiceStateCoder;
  readonly types: TplNameServiceTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplNameServiceAccountsCoder(idl);
    this.events = new TplNameServiceEventsCoder(idl);
    this.instruction = new TplNameServiceInstructionCoder(idl);
    this.state = new TplNameServiceStateCoder(idl);
    this.types = new TplNameServiceTypesCoder(idl);
  }
}
