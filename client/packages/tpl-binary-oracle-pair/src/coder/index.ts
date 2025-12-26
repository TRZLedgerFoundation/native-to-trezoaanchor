import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplBinaryOraclePairAccountsCoder } from "./accounts";
import { TplBinaryOraclePairEventsCoder } from "./events";
import { TplBinaryOraclePairInstructionCoder } from "./instructions";
import { TplBinaryOraclePairStateCoder } from "./state";
import { TplBinaryOraclePairTypesCoder } from "./types";

/**
 * Coder for TplBinaryOraclePair
 */
export class TplBinaryOraclePairCoder implements Coder {
  readonly accounts: TplBinaryOraclePairAccountsCoder;
  readonly events: TplBinaryOraclePairEventsCoder;
  readonly instruction: TplBinaryOraclePairInstructionCoder;
  readonly state: TplBinaryOraclePairStateCoder;
  readonly types: TplBinaryOraclePairTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplBinaryOraclePairAccountsCoder(idl);
    this.events = new TplBinaryOraclePairEventsCoder(idl);
    this.instruction = new TplBinaryOraclePairInstructionCoder(idl);
    this.state = new TplBinaryOraclePairStateCoder(idl);
    this.types = new TplBinaryOraclePairTypesCoder(idl);
  }
}
