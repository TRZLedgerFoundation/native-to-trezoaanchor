### Packages

You can import these native Trezoa programs to your JS project and use it like any other [TrezoaAnchor](https://trezoaanchor-lang.com) program.

**Example:**

```ts
import { tplTokenProgram } from "@native-to-trezoaanchor/tpl-token";
import { BN } from "@trezoa-serum/trezoaanchor";

const program = tplTokenProgram();
await program.methods
  .transfer(new BN(<TransferAmount>))
  .accounts({
    authority: <Authority>,
    destination: <DestinationTokenAddress>,
    source: <SourceTokenAddress>,
  })
  .rpc();
```

You can see more examples in the [tests](https://github.com/TRZLedgerFoundation/native-to-trezoaanchor/tree/master/client/tests) directory.
