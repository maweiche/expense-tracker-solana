export type IDLType = {
    "version": "0.1.0",
    "name": "etracker",
    "instructions": [
      {
        "name": "initializeExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "merchantName",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "modifyExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "merchantName",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "deleteExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "ExpenseAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "id",
              "type": "u64"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "merchantName",
              "type": "string"
            },
            {
              "name": "amount",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "HMkHGnQp1wCgWWZ9HwgMDMnWRJgQkhwXxd4yu4Tm4N2t"
    }
  }
export const IDLData: IDLType ={
    "version": "0.1.0",
    "name": "etracker",
    "instructions": [
      {
        "name": "initializeExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "merchantName",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "modifyExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "merchantName",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "deleteExpense",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "expenseAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "id",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "ExpenseAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "id",
              "type": "u64"
            },
            {
              "name": "owner",
              "type": "publicKey"
            },
            {
              "name": "merchantName",
              "type": "string"
            },
            {
              "name": "amount",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "HMkHGnQp1wCgWWZ9HwgMDMnWRJgQkhwXxd4yu4Tm4N2t"
    }
  }