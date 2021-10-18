/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { PosterCheckout } from '../PosterCheckout';

export class PosterCheckout__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _payableErc20: string,
    _treasury: string,
    overrides?: Overrides,
  ): Promise<PosterCheckout> {
    return super.deploy(
      _payableErc20,
      _treasury,
      overrides || {},
    ) as Promise<PosterCheckout>;
  }
  getDeployTransaction(
    _payableErc20: string,
    _treasury: string,
    overrides?: Overrides,
  ): TransactionRequest {
    return super.getDeployTransaction(
      _payableErc20,
      _treasury,
      overrides || {},
    );
  }
  attach(address: string): PosterCheckout {
    return super.attach(address) as PosterCheckout;
  }
  connect(signer: Signer): PosterCheckout__factory {
    return super.connect(signer) as PosterCheckout__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): PosterCheckout {
    return new Contract(address, _abi, signerOrProvider) as PosterCheckout;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_payableErc20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_treasury',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_customerWallet',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_orderID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_productID',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amountPaid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_orderDetails',
        type: 'bytes',
      },
    ],
    name: 'PosterOrderReceived',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_orderDetails',
        type: 'bytes',
      },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'products',
    outputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'inStock',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'inStock',
            type: 'bool',
          },
        ],
        internalType: 'struct PosterCheckout.Product',
        name: '_product',
        type: 'tuple',
      },
    ],
    name: 'setProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_inStock',
        type: 'bool',
      },
    ],
    name: 'setProductInStock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'setProductPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_treasury',
        type: 'address',
      },
    ],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a060405260006003553480156200001657600080fd5b5060405162001adb38038062001adb83398181016040528101906200003c91906200018b565b60006200004e6200016c60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200021a565b600033905090565b600081519050620001858162000200565b92915050565b600080604083850312156200019f57600080fd5b6000620001af8582860162000174565b9250506020620001c28582860162000174565b9150509250929050565b6000620001d982620001e0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200020b81620001cc565b81146200021757600080fd5b50565b60805160601c61189462000247600039600081816103c9015281816104bd01526105ae01526118946000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806381203d031161007157806381203d03146101405780638da5cb5b1461015e578063ef928c451461017c578063f0f4426014610198578063f2fde38b146101b4578063fac9046d146101d0576100a9565b806344d3498a146100ae578063560a2852146100ca57806361d027b3146100e6578063715018a6146101045780637acc0b201461010e575b600080fd5b6100c860048036038101906100c391906111c1565b6101ec565b005b6100e460048036038101906100df91906110b1565b6102a0565b005b6100ee61070f565b6040516100fb91906113f6565b60405180910390f35b61010c610735565b005b6101286004803603810190610123919061105f565b610888565b60405161013793929190611471565b60405180910390f35b610148610947565b604051610155919061154f565b60405180910390f35b61016661094d565b60405161017391906113f6565b60405180910390f35b61019660048036038101906101919190611131565b610976565b005b6101b260048036038101906101ad919061100d565b610a3d565b005b6101ce60048036038101906101c9919061100d565b610b16565b005b6101ea60048036038101906101e5919061116d565b610cd8565b005b6101f4610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610281576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102789061150f565b60405180910390fd5b8060026000848152602001908152602001600020600101819055505050565b6000600260008781526020019081526020016000206040518060600160405290816000820180546102d090611749565b80601f01602080910402602001604051908101604052809291908181526020018280546102fc90611749565b80156103495780601f1061031e57610100808354040283529160200191610349565b820191906000526020600020905b81548152906001019060200180831161032c57829003601f168201915b50505050508152602001600182015481526020016002820160009054906101000a900460ff161515151581525050905060008160200151905081604001516103c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bd9061152f565b60405180910390fd5b807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e61040b610dcf565b306040518363ffffffff1660e01b8152600401610429929190611411565b60206040518083038186803b15801561044157600080fd5b505afa158015610455573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104799190611088565b10156104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b1906114cf565b60405180910390fd5b807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a082316104ff610dcf565b6040518263ffffffff1660e01b815260040161051b91906113f6565b60206040518083038186803b15801561053357600080fd5b505afa158015610547573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056b9190611088565b10156105ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a3906114ef565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd6105f0610dcf565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b81526004016106329392919061143a565b602060405180830381600087803b15801561064c57600080fd5b505af1158015610660573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106849190611036565b506001600360008282546106989190611669565b925050819055506106a7610dcf565b73ffffffffffffffffffffffffffffffffffffffff167fc076e3155b93c2b46bde13c5bb89d07910407b07f86d3907820ed8c0e5b0b0526003548460000151848a8a8a8a6040516106fe979695949392919061156a565b60405180910390a250505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61073d610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c19061150f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60026020528060005260406000206000915090508060000180546108ab90611749565b80601f01602080910402602001604051908101604052809291908181526020018280546108d790611749565b80156109245780601f106108f957610100808354040283529160200191610924565b820191906000526020600020905b81548152906001019060200180831161090757829003601f168201915b5050505050908060010154908060020160009054906101000a900460ff16905083565b60035481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61097e610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a029061150f565b60405180910390fd5b806002600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055505050565b610a45610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ad2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac99061150f565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610b1e610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610bab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba29061150f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c12906114af565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610ce0610dcf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d649061150f565b60405180910390fd5b80600260008481526020019081526020016000206000820151816000019080519060200190610d9d929190610dd7565b506020820151816001015560408201518160020160006101000a81548160ff0219169083151502179055509050505050565b600033905090565b828054610de390611749565b90600052602060002090601f016020900481019282610e055760008555610e4c565b82601f10610e1e57805160ff1916838001178555610e4c565b82800160010185558215610e4c579182015b82811115610e4b578251825591602001919060010190610e30565b5b509050610e599190610e5d565b5090565b5b80821115610e76576000816000905550600101610e5e565b5090565b6000610e8d610e888461160c565b6115db565b905082815260208101848484011115610ea557600080fd5b610eb0848285611707565b509392505050565b600081359050610ec781611819565b92915050565b600081359050610edc81611830565b92915050565b600081519050610ef181611830565b92915050565b60008083601f840112610f0957600080fd5b8235905067ffffffffffffffff811115610f2257600080fd5b602083019150836001820283011115610f3a57600080fd5b9250929050565b600082601f830112610f5257600080fd5b8135610f62848260208601610e7a565b91505092915050565b600060608284031215610f7d57600080fd5b610f8760606115db565b9050600082013567ffffffffffffffff811115610fa357600080fd5b610faf84828501610f41565b6000830152506020610fc384828501610fe3565b6020830152506040610fd784828501610ecd565b60408301525092915050565b600081359050610ff281611847565b92915050565b60008151905061100781611847565b92915050565b60006020828403121561101f57600080fd5b600061102d84828501610eb8565b91505092915050565b60006020828403121561104857600080fd5b600061105684828501610ee2565b91505092915050565b60006020828403121561107157600080fd5b600061107f84828501610fe3565b91505092915050565b60006020828403121561109a57600080fd5b60006110a884828501610ff8565b91505092915050565b6000806000806000608086880312156110c957600080fd5b60006110d788828901610fe3565b95505060206110e888828901610eb8565b94505060406110f988828901610fe3565b935050606086013567ffffffffffffffff81111561111657600080fd5b61112288828901610ef7565b92509250509295509295909350565b6000806040838503121561114457600080fd5b600061115285828601610fe3565b925050602061116385828601610ecd565b9150509250929050565b6000806040838503121561118057600080fd5b600061118e85828601610fe3565b925050602083013567ffffffffffffffff8111156111ab57600080fd5b6111b785828601610f6b565b9150509250929050565b600080604083850312156111d457600080fd5b60006111e285828601610fe3565b92505060206111f385828601610fe3565b9150509250929050565b611206816116bf565b82525050565b611215816116d1565b82525050565b60006112278385611647565b9350611234838584611707565b61123d83611808565b840190509392505050565b60006112538261163c565b61125d8185611658565b935061126d818560208601611716565b61127681611808565b840191505092915050565b600061128e602683611658565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006112f4602083611658565b91507f4e6f7420656e6f75676820616c6c6f77616e636520666f72207061796d656e746000830152602082019050919050565b6000611334601c83611658565b91507f4e6f7420656e6f75676820746f6b656e20666f72207061796d656e74000000006000830152602082019050919050565b6000611374602083611658565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006113b4601483611658565b91507f50726f64756374206f7574206f662073746f636b0000000000000000000000006000830152602082019050919050565b6113f0816116fd565b82525050565b600060208201905061140b60008301846111fd565b92915050565b600060408201905061142660008301856111fd565b61143360208301846111fd565b9392505050565b600060608201905061144f60008301866111fd565b61145c60208301856111fd565b61146960408301846113e7565b949350505050565b6000606082019050818103600083015261148b8186611248565b905061149a60208301856113e7565b6114a7604083018461120c565b949350505050565b600060208201905081810360008301526114c881611281565b9050919050565b600060208201905081810360008301526114e8816112e7565b9050919050565b6000602082019050818103600083015261150881611327565b9050919050565b6000602082019050818103600083015261152881611367565b9050919050565b60006020820190508181036000830152611548816113a7565b9050919050565b600060208201905061156460008301846113e7565b92915050565b600060c08201905061157f600083018a6113e7565b81810360208301526115918189611248565b90506115a060408301886113e7565b6115ad60608301876111fd565b6115ba60808301866113e7565b81810360a08301526115cd81848661121b565b905098975050505050505050565b6000604051905081810181811067ffffffffffffffff82111715611602576116016117d9565b5b8060405250919050565b600067ffffffffffffffff821115611627576116266117d9565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611674826116fd565b915061167f836116fd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116b4576116b361177b565b5b828201905092915050565b60006116ca826116dd565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611734578082015181840152602081019050611719565b83811115611743576000848401525b50505050565b6000600282049050600182168061176157607f821691505b60208210811415611775576117746117aa565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611822816116bf565b811461182d57600080fd5b50565b611839816116d1565b811461184457600080fd5b50565b611850816116fd565b811461185b57600080fd5b5056fea26469706673582212207940110a41aab1cf292016cf3d65e9262bc051c131e6bd4fefaba61564ca222264736f6c63430008000033';
