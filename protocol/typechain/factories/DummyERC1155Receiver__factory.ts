/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { DummyERC1155Receiver } from '../DummyERC1155Receiver';

export class DummyERC1155Receiver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyERC1155Receiver> {
    return super.deploy(overrides || {}) as Promise<DummyERC1155Receiver>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyERC1155Receiver {
    return super.attach(address) as DummyERC1155Receiver;
  }
  connect(signer: Signer): DummyERC1155Receiver__factory {
    return super.connect(signer) as DummyERC1155Receiver__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DummyERC1155Receiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as DummyERC1155Receiver;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'tokenIds',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'tokenValues',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'BatchTokenReceived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'TokenReceived',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ERC1155_BATCH_RECEIVED',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ERC1155_RECEIVED',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldRejectTransfer',
        type: 'bool',
      },
    ],
    name: 'setRejectTransferFlag',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5060008060006101000a81548160ff0219169083151502179055506106f28061003a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063bc197c811461005c578063d9d4df3a146101f2578063e0a5c94914610222578063f23a6e611461025f578063fc67bf1c1461035f575b600080fd5b6101bd600480360360a081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100cf57600080fd5b8201836020820111156100e157600080fd5b8035906020019184602083028401116401000000008311171561010357600080fd5b90919293919293908035906020019064010000000081111561012457600080fd5b82018360208201111561013657600080fd5b8035906020019184602083028401116401000000008311171561015857600080fd5b90919293919293908035906020019064010000000081111561017957600080fd5b82018360208201111561018b57600080fd5b803590602001918460018302840111640100000000831117156101ad57600080fd5b909192939192939050505061039c565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6102206004803603602081101561020857600080fd5b81019080803515159060200190929190505050610543565b005b61022a61055f565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61032a600480360360a081101561027557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156102e657600080fd5b8201836020820111156102f857600080fd5b8035906020019184600183028401116401000000008311171561031a57600080fd5b909192939192939050505061056a565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6103676106b1565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b60008060009054906101000a900460ff1615610420576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f5452414e534645525f52454a454354454400000000000000000000000000000081525060200191505060405180910390fd5b7f91b26e6374fdb201aaa0877487c665827cf487ed656fe38bd444e549b78052708989898989898989604051808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528a8a82818152602001925060200280828437600081840152601f19601f8201169050808301925050508481038352888882818152602001925060200280828437600081840152601f19601f8201169050808301925050508481038252868682818152602001925080828437600081840152601f19601f8201169050808301925050509b50505050505050505050505060405180910390a163bc197c8160e01b905098975050505050505050565b806000806101000a81548160ff02191690831515021790555050565b63f23a6e6160e01b81565b60008060009054906101000a900460ff16156105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f5452414e534645525f52454a454354454400000000000000000000000000000081525060200191505060405180910390fd5b7fbae1a1e2d296283d81ccc21fb13e1dcb8937ce5108b5e31dbd96683cddc64431878787878787604051808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060405180910390a163f23a6e6160e01b90509695505050505050565b63bc197c8160e01b8156fea2646970667358221220dfc352f3c2bd3be707d4b5a32b0a9d24f1cfd76b5439744a1f5a5392fa739b0864736f6c63430007030033';
