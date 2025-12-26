import { Idl, Coder } from "@trezoa-serum/trezoaanchor";

import { TplGovernanceAccountsCoder } from "./accounts";
import { TplGovernanceEventsCoder } from "./events";
import { TplGovernanceInstructionCoder } from "./instructions";
import { TplGovernanceStateCoder } from "./state";
import { TplGovernanceTypesCoder } from "./types";

/**
 * Coder for TplGovernance
 */
export class TplGovernanceCoder implements Coder {
  readonly accounts: TplGovernanceAccountsCoder;
  readonly events: TplGovernanceEventsCoder;
  readonly instruction: TplGovernanceInstructionCoder;
  readonly state: TplGovernanceStateCoder;
  readonly types: TplGovernanceTypesCoder;

  constructor(idl: Idl) {
    this.accounts = new TplGovernanceAccountsCoder(idl);
    this.events = new TplGovernanceEventsCoder(idl);
    this.instruction = new TplGovernanceInstructionCoder(idl);
    this.state = new TplGovernanceStateCoder(idl);
    this.types = new TplGovernanceTypesCoder(idl);
  }
}
