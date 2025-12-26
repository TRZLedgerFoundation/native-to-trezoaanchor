import { Idl, TypesCoder } from "@trezoa-serum/trezoaanchor";

export class SolendProgramTypesCoder implements TypesCoder {
  constructor(_idl: Idl) {}

  encode<T = any>(_name: string, _type: T): Buffer {
    throw new Error("SolendProgram does not have user-defined types");
  }
  decode<T = any>(_name: string, _typeData: Buffer): T {
    throw new Error("SolendProgram does not have user-defined types");
  }
}
