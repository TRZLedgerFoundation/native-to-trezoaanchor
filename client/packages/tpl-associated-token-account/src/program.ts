import { PublicKey } from "@trezoa/web3.js";
import { Program, TrezoaAnchorProvider } from "@trezoa-serum/trezoaanchor";

import { TplAssociatedTokenAccountCoder } from "./coder";

export const TPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

interface GetProgramParams {
  programId?: PublicKey;
  provider?: TrezoaAnchorProvider;
}

export function tplAssociatedTokenAccountProgram(
  params?: GetProgramParams
): Program<TplAssociatedTokenAccount> {
  return new Program<TplAssociatedTokenAccount>(
    IDL,
    params?.programId ?? TPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    params?.provider,
    new TplAssociatedTokenAccountCoder(IDL)
  );
}

type TplAssociatedTokenAccount = {
  version: "1.1.1";
  name: "tpl_associated_token_account";
  instructions: [
    {
      name: "create";
      accounts: [
        {
          name: "fundingAddress";
          isMut: true;
          isSigner: true;
        },
        {
          name: "associatedAccountAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "walletAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createIdempotent";
      accounts: [
        {
          name: "fundingAddress";
          isMut: true;
          isSigner: true;
        },
        {
          name: "associatedAccountAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "walletAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "recoverNested";
      accounts: [
        {
          name: "nestedAssociatedAccountAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nestedTokenMintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationAssociatedAccountAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "ownerAssociatedAccountAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "ownerTokenMintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "walletAddress";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  errors: [
    {
      code: 0;
      name: "InvalidOwner";
      msg: "Associated token account owner does not match address derivation";
    }
  ];
};

const IDL: TplAssociatedTokenAccount = {
  version: "1.1.1",
  name: "tpl_associated_token_account",
  instructions: [
    {
      name: "create",
      accounts: [
        {
          name: "fundingAddress",
          isMut: true,
          isSigner: true,
        },
        {
          name: "associatedAccountAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "walletAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createIdempotent",
      accounts: [
        {
          name: "fundingAddress",
          isMut: true,
          isSigner: true,
        },
        {
          name: "associatedAccountAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "walletAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "recoverNested",
      accounts: [
        {
          name: "nestedAssociatedAccountAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nestedTokenMintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationAssociatedAccountAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "ownerAssociatedAccountAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "ownerTokenMintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "walletAddress",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  errors: [
    {
      code: 0,
      name: "InvalidOwner",
      msg: "Associated token account owner does not match address derivation",
    },
  ],
};
