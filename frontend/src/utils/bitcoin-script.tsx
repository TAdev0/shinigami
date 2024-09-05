import { IMonarchLanguage } from "@monaco-editor/react";

export const bitcoinScriptLanguage: IMonarchLanguage = {
  tokenizer: {
    root: [
      [/OP_CAT/, "special-keyword"],
      [/OP_[A-Z0-9_]+/, "keyword"],
      [/<[^>]+>/, "string"],
      [/"[^"]+"/, "string"],
      [/'[^']+'/, "string"],
      [/0x[0-9a-fA-f]+/, "number"],
      [/[0-9]+/, "number"],
      [/-[0-9]+/, "number"],
      [/[a-zA-Z_]\w*/, "identifier"],
    ],
  },
};

// TODO: Pull from compiler instead of opcodes
export const bitcoinScriptOpcodes = [
  "OP_0",
  "OP_DATA_1",
  "OP_DATA_2",
  "OP_DATA_3",
  "OP_DATA_4",
  "OP_DATA_5",
  "OP_DATA_6",
  "OP_DATA_7",
  "OP_DATA_8",
  "OP_DATA_9",
  "OP_DATA_10",
  "OP_DATA_11",
  "OP_DATA_12",
  "OP_DATA_13",
  "OP_DATA_14",
  "OP_DATA_15",
  "OP_DATA_16",
  "OP_DATA_17",
  "OP_DATA_18",
  "OP_DATA_19",
  "OP_DATA_20",
  "OP_DATA_21",
  "OP_DATA_22",
  "OP_DATA_23",
  "OP_DATA_24",
  "OP_DATA_25",
  "OP_DATA_26",
  "OP_DATA_27",
  "OP_DATA_28",
  "OP_DATA_29",
  "OP_DATA_30",
  "OP_DATA_31",
  "OP_DATA_32",
  "OP_DATA_33",
  "OP_DATA_34",
  "OP_DATA_35",
  "OP_DATA_36",
  "OP_DATA_37",
  "OP_DATA_38",
  "OP_DATA_39",
  "OP_DATA_40",
  "OP_DATA_41",
  "OP_DATA_42",
  "OP_DATA_43",
  "OP_DATA_44",
  "OP_DATA_45",
  "OP_DATA_46",
  "OP_DATA_47",
  "OP_DATA_48",
  "OP_DATA_49",
  "OP_DATA_50",
  "OP_DATA_51",
  "OP_DATA_52",
  "OP_DATA_53",
  "OP_DATA_54",
  "OP_DATA_55",
  "OP_DATA_56",
  "OP_DATA_57",
  "OP_DATA_58",
  "OP_DATA_59",
  "OP_DATA_60",
  "OP_DATA_61",
  "OP_DATA_62",
  "OP_DATA_63",
  "OP_DATA_64",
  "OP_DATA_65",
  "OP_DATA_66",
  "OP_DATA_67",
  "OP_DATA_68",
  "OP_DATA_69",
  "OP_DATA_70",
  "OP_DATA_71",
  "OP_DATA_72",
  "OP_DATA_73",
  "OP_DATA_74",
  "OP_DATA_75",
  "OP_PUSHDATA1",
  "OP_PUSHDATA2",
  "OP_PUSHDATA4",
  "OP_1NEGATE",
  "OP_RESERVED",
  "OP_TRUE",
  "OP_1",
  "OP_2",
  "OP_3",
  "OP_4",
  "OP_5",
  "OP_6",
  "OP_7",
  "OP_8",
  "OP_9",
  "OP_10",
  "OP_11",
  "OP_12",
  "OP_13",
  "OP_14",
  "OP_15",
  "OP_16",
  "OP_NOP",
  "OP_VER",
  "OP_IF",
  "OP_NOTIF",
  "OP_VERIF",
  "OP_VERNOTIF",
  "OP_ELSE",
  "OP_ENDIF",
  "OP_VERIFY",
  "OP_RETURN",
  "OP_TOALTSTACK",
  "OP_FROMALTSTACK",
  "OP_2DROP",
  "OP_2DUP",
  "OP_3DUP",
  "OP_2OVER",
  "OP_2ROT",
  "OP_2SWAP",
  "OP_IFDUP",
  "OP_DEPTH",
  "OP_DROP",
  "OP_DUP",
  "OP_NIP",
  "OP_OVER",
  "OP_PICK",
  "OP_ROLL",
  "OP_ROT",
  "OP_SWAP",
  "OP_TUCK",
  "OP_CAT",
  "OP_SUBSTR",
  "OP_LEFT",
  "OP_RIGHT",
  "OP_SIZE",
  "OP_INVERT",
  "OP_AND",
  "OP_OR",
  "OP_XOR",
  "OP_EQUAL",
  "OP_EQUALVERIFY",
  "OP_RESERVED1",
  "OP_RESERVED2",
  "OP_1ADD",
  "OP_1SUB",
  "OP_2MUL",
  "OP_2DIV",
  "OP_NEGATE",
  "OP_ABS",
  "OP_NOT",
  "OP_0NOTEQUAL",
  "OP_ADD",
  "OP_SUB",
  "OP_MUL",
  "OP_DIV",
  "OP_MOD",
  "OP_LSHIFT",
  "OP_RSHIFT",
  "OP_BOOLAND",
  "OP_BOOLOR",
  "OP_NUMEQUAL",
  "OP_NUMEQUALVERIFY",
  "OP_NUMNOTEQUAL",
  "OP_LESSTHAN",
  "OP_GREATERTHAN",
  "OP_LESSTHANOREQUAL",
  "OP_GREATERTHANOREQUAL",
  "OP_MIN",
  "OP_MAX",
  "OP_WITHIN",
  "OP_RIPEMD160",
  "OP_SHA1",
  "OP_SHA256",
  "OP_HASH160",
  "OP_HASH256",
  "OP_CODESEPARATOR",
  "OP_CHECKSIG",
  "OP_CHECKSIGVERIFY",
  "OP_CHECKMULTISIG",
  "OP_CHECKMULTISIGVERIFY",
  "OP_NOP1",
  "OP_CHECKLOCKTIMEVERIFY",
  "OP_CHECKSEQUENCEVERIFY",
  "OP_NOP4",
  "OP_NOP5",
  "OP_NOP6",
  "OP_NOP7",
  "OP_NOP8",
  "OP_NOP9",
  "OP_NOP10"
];
