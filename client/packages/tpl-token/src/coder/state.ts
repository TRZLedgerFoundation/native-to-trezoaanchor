import { Idl, StateCoder } from "@trezoa-serum/trezoaanchor";

export class TplTokenStateCoder implements StateCoder {
  constructor(_idl: Idl) {}

  encode<T = any>(_name: string, _account: T): Promise<Buffer> {
    throw new Error("TplToken does not have state");
  }
  decode<T = any>(_ix: Buffer): T {
    throw new Error("TplToken does not have state");
  }
}
