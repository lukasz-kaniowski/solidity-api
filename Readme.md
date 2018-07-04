# Solidity api

Simple api that allows to compile solidity contracts using [solc][solc.github] 

It can be deployed to aws lambda using [apex up][apex up url]

It's deployed [here][api url]

Try it in your console 

```bash
$ curl -X POST \
  https://4thq7kdi30.execute-api.eu-west-1.amazonaws.com/staging/ \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: beb30e7b-1aed-4bec-8341-a556a976bfb5' \
  -d '{
	"contract": "contract x {  }"
}'
```

# API

`POST /`

Request 
```json
{
	"contract": "contract x { function g() {} }"
}
```

Response
```json
{
    "contracts": {
        ":x": {
            "assembly": {
                ".code": [
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH",
                        "value": "80"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH",
                        "value": "40"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "MSTORE"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "CALLVALUE"
                    },
                    {
                        "begin": 8,
                        "end": 17,
                        "name": "DUP1"
                    },
                    {
                        "begin": 5,
                        "end": 7,
                        "name": "ISZERO"
                    },
                    {
                        "begin": 5,
                        "end": 7,
                        "name": "PUSH [tag]",
                        "value": "1"
                    },
                    {
                        "begin": 5,
                        "end": 7,
                        "name": "JUMPI"
                    },
                    {
                        "begin": 30,
                        "end": 31,
                        "name": "PUSH",
                        "value": "0"
                    },
                    {
                        "begin": 27,
                        "end": 28,
                        "name": "DUP1"
                    },
                    {
                        "begin": 20,
                        "end": 32,
                        "name": "REVERT"
                    },
                    {
                        "begin": 5,
                        "end": 7,
                        "name": "tag",
                        "value": "1"
                    },
                    {
                        "begin": 5,
                        "end": 7,
                        "name": "JUMPDEST"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "POP"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH #[$]",
                        "value": "0000000000000000000000000000000000000000000000000000000000000000"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "DUP1"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH [$]",
                        "value": "0000000000000000000000000000000000000000000000000000000000000000"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH",
                        "value": "0"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "CODECOPY"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "PUSH",
                        "value": "0"
                    },
                    {
                        "begin": 0,
                        "end": 30,
                        "name": "RETURN"
                    }
                ],
                ".data": {
                    "0": {
                        ".auxdata": "a165627a7a7230582024eb812480a4573eb787bf3a89d98391a2e53887fb1b869a5ca74a2f6cf14c3b0029",
                        ".code": [
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "80"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "40"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "MSTORE"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "4"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "CALLDATASIZE"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "LT"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH [tag]",
                                "value": "1"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "JUMPI"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "FFFFFFFF"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "100000000000000000000000000000000000000000000000000000000"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "0"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "CALLDATALOAD"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "DIV"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "AND"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "E2179B8E"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "DUP2"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "EQ"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH [tag]",
                                "value": "2"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "JUMPI"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "tag",
                                "value": "1"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "JUMPDEST"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "PUSH",
                                "value": "0"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "DUP1"
                            },
                            {
                                "begin": 0,
                                "end": 30,
                                "name": "REVERT"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "tag",
                                "value": "2"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "JUMPDEST"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "CALLVALUE"
                            },
                            {
                                "begin": 8,
                                "end": 17,
                                "name": "DUP1"
                            },
                            {
                                "begin": 5,
                                "end": 7,
                                "name": "ISZERO"
                            },
                            {
                                "begin": 5,
                                "end": 7,
                                "name": "PUSH [tag]",
                                "value": "3"
                            },
                            {
                                "begin": 5,
                                "end": 7,
                                "name": "JUMPI"
                            },
                            {
                                "begin": 30,
                                "end": 31,
                                "name": "PUSH",
                                "value": "0"
                            },
                            {
                                "begin": 27,
                                "end": 28,
                                "name": "DUP1"
                            },
                            {
                                "begin": 20,
                                "end": 32,
                                "name": "REVERT"
                            },
                            {
                                "begin": 5,
                                "end": 7,
                                "name": "tag",
                                "value": "3"
                            },
                            {
                                "begin": 5,
                                "end": 7,
                                "name": "JUMPDEST"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "POP"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "PUSH [tag]",
                                "value": "4"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "PUSH [tag]",
                                "value": "5"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "JUMP"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "tag",
                                "value": "4"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "JUMPDEST"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "STOP"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "tag",
                                "value": "5"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "JUMPDEST"
                            },
                            {
                                "begin": 13,
                                "end": 28,
                                "name": "JUMP",
                                "value": "[out]"
                            }
                        ]
                    }
                }
            },
            "bytecode": "6080604052348015600f57600080fd5b5060858061001e6000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663e2179b8e81146043575b600080fd5b348015604e57600080fd5b5060556057565b005b5600a165627a7a7230582024eb812480a4573eb787bf3a89d98391a2e53887fb1b869a5ca74a2f6cf14c3b0029",
            "functionHashes": {
                "g()": "e2179b8e"
            },
            "gasEstimates": {
                "creation": [
                    81,
                    26600
                ],
                "external": {
                    "g()": 130
                },
                "internal": {}
            },
            "interface": "[{\"constant\":false,\"inputs\":[],\"name\":\"g\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
            "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"g\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"x\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x4dd2749c4a88fc27c25be168efe5ea5918a701d744e337a118d80fe95684bde8\",\"urls\":[\"bzzr://0c70293f54e16566a982872ea56941fa11c827ba532dcba365ac5f486724e502\"]}},\"version\":1}",
            "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x85 DUP1 PUSH2 0x1E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3E JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xE2179B8E DUP2 EQ PUSH1 0x43 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x4E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x55 PUSH1 0x57 JUMP JUMPDEST STOP JUMPDEST JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x24 0xeb DUP2 0x24 DUP1 LOG4 JUMPI RETURNDATACOPY 0xb7 DUP8 0xbf GASPRICE DUP10 0xd9 DUP4 SWAP2 LOG2 0xe5 CODESIZE DUP8 CREATE2 SHL DUP7 SWAP11 0x5c 0xa7 0x4a 0x2f PUSH13 0xF14C3B00290000000000000000 ",
            "runtimeBytecode": "608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663e2179b8e81146043575b600080fd5b348015604e57600080fd5b5060556057565b005b5600a165627a7a7230582024eb812480a4573eb787bf3a89d98391a2e53887fb1b869a5ca74a2f6cf14c3b0029",
            "srcmap": "0:30:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;0:30:0;;;;;;;",
            "srcmapRuntime": "0:30:0:-;;;;;;;;;;;;;;;;;;;;;;;13:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;13:15:0;;;;;;;:::o"
        }
    },
    "errors": [
        ":1:1: Warning: Source file does not specify required compiler version!Consider adding \"pragma solidity ^0.4.24;\"\ncontract x { function g() {} }\n^----------------------------^\n",
        ":1:14: Warning: No visibility specified. Defaulting to \"public\". \ncontract x { function g() {} }\n             ^-------------^\n",
        ":1:14: Warning: Function state mutability can be restricted to pure\ncontract x { function g() {} }\n             ^-------------^\n"
    ],
    "sourceList": [
        ""
    ],
    "sources": {
        "": {
            "AST": {
                "attributes": {
                    "absolutePath": "",
                    "exportedSymbols": {
                        "x": [
                            5
                        ]
                    }
                },
                "children": [
                    {
                        "attributes": {
                            "baseContracts": [
                                null
                            ],
                            "contractDependencies": [
                                null
                            ],
                            "contractKind": "contract",
                            "documentation": null,
                            "fullyImplemented": true,
                            "linearizedBaseContracts": [
                                5
                            ],
                            "name": "x",
                            "scope": 6
                        },
                        "children": [
                            {
                                "attributes": {
                                    "constant": false,
                                    "documentation": null,
                                    "implemented": true,
                                    "isConstructor": false,
                                    "modifiers": [
                                        null
                                    ],
                                    "name": "g",
                                    "payable": false,
                                    "scope": 5,
                                    "stateMutability": "nonpayable",
                                    "superFunction": null,
                                    "visibility": "public"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "parameters": [
                                                null
                                            ]
                                        },
                                        "children": [],
                                        "id": 1,
                                        "name": "ParameterList",
                                        "src": "23:2:0"
                                    },
                                    {
                                        "attributes": {
                                            "parameters": [
                                                null
                                            ]
                                        },
                                        "children": [],
                                        "id": 2,
                                        "name": "ParameterList",
                                        "src": "26:0:0"
                                    },
                                    {
                                        "attributes": {
                                            "statements": [
                                                null
                                            ]
                                        },
                                        "children": [],
                                        "id": 3,
                                        "name": "Block",
                                        "src": "26:2:0"
                                    }
                                ],
                                "id": 4,
                                "name": "FunctionDefinition",
                                "src": "13:15:0"
                            }
                        ],
                        "id": 5,
                        "name": "ContractDefinition",
                        "src": "0:30:0"
                    }
                ],
                "id": 6,
                "name": "SourceUnit",
                "src": "0:30:0"
            }
        }
    }
}
```

## Build

    $ yarn install
    $ npm start



[solc.github]: https://github.com/ethereum/solc-js
[apex up url]: https://up.docs.apex.sh/#introduction
[api url]: https://4thq7kdi30.execute-api.eu-west-1.amazonaws.com/staging/
