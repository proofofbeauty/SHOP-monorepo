/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { ERC20Mintable } from '../ERC20Mintable';

export class ERC20Mintable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    minter_: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides,
  ): Promise<ERC20Mintable> {
    return super.deploy(
      minter_,
      name_,
      symbol_,
      overrides || {},
    ) as Promise<ERC20Mintable>;
  }
  getDeployTransaction(
    minter_: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides,
  ): TransactionRequest {
    return super.getDeployTransaction(minter_, name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20Mintable {
    return super.attach(address) as ERC20Mintable;
  }
  connect(signer: Signer): ERC20Mintable__factory {
    return super.connect(signer) as ERC20Mintable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ERC20Mintable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mintable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'minter_',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
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
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
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
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minter',
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
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_minter',
        type: 'address',
      },
    ],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
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
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620020f7380380620020f78339818101604052810190620000379190620002a8565b818160006200004b6200016760201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508160049080519060200190620001019291906200016f565b5080600590805190602001906200011a9291906200016f565b50505082600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620004af565b600033905090565b8280546200017d9062000401565b90600052602060002090601f016020900481019282620001a15760008555620001ed565b82601f10620001bc57805160ff1916838001178555620001ed565b82800160010185558215620001ed579182015b82811115620001ec578251825591602001919060010190620001cf565b5b509050620001fc919062000200565b5090565b5b808211156200021b57600081600090555060010162000201565b5090565b600062000236620002308462000364565b62000330565b9050828152602081018484840111156200024f57600080fd5b6200025c848285620003cb565b509392505050565b600081519050620002758162000495565b92915050565b600082601f8301126200028d57600080fd5b81516200029f8482602086016200021f565b91505092915050565b600080600060608486031215620002be57600080fd5b6000620002ce8682870162000264565b935050602084015167ffffffffffffffff811115620002ec57600080fd5b620002fa868287016200027b565b925050604084015167ffffffffffffffff8111156200031857600080fd5b62000326868287016200027b565b9150509250925092565b6000604051905081810181811067ffffffffffffffff821117156200035a576200035962000466565b5b8060405250919050565b600067ffffffffffffffff82111562000382576200038162000466565b5b601f19601f8301169050602081019050919050565b6000620003a482620003ab565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003eb578082015181840152602081019050620003ce565b83811115620003fb576000848401525b50505050565b600060028204905060018216806200041a57607f821691505b6020821081141562000431576200043062000437565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620004a08162000397565b8114620004ac57600080fd5b50565b611c3880620004bf6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a457c2d711610071578063a457c2d7146102aa578063a9059cbb146102da578063dd62ed3e1461030a578063f2fde38b1461033a578063fca3b5aa146103565761010b565b806370a0823114610234578063715018a6146102645780638da5cb5b1461026e57806395d89b411461028c5761010b565b806323b872dd116100de57806323b872dd1461019a578063313ce567146101ca57806339509351146101e857806340c10f19146102185761010b565b806306fdde0314610110578063075461721461012e578063095ea7b31461014c57806318160ddd1461017c575b600080fd5b610118610372565b6040516101259190611881565b60405180910390f35b610136610404565b604051610143919061184b565b60405180910390f35b610166600480360381019061016191906113aa565b61042a565b6040516101739190611866565b60405180910390f35b610184610448565b6040516101919190611a03565b60405180910390f35b6101b460048036038101906101af919061135b565b610452565b6040516101c19190611866565b60405180910390f35b6101d261054a565b6040516101df9190611a1e565b60405180910390f35b61020260048036038101906101fd91906113aa565b610553565b60405161020f9190611866565b60405180910390f35b610232600480360381019061022d91906113aa565b6105ff565b005b61024e600480360381019061024991906112f6565b6106a4565b60405161025b9190611a03565b60405180910390f35b61026c6106ed565b005b610276610840565b604051610283919061184b565b60405180910390f35b610294610869565b6040516102a19190611881565b60405180910390f35b6102c460048036038101906102bf91906113aa565b6108fb565b6040516102d19190611866565b60405180910390f35b6102f460048036038101906102ef91906113aa565b6109e6565b6040516103019190611866565b60405180910390f35b610324600480360381019061031f919061131f565b610a04565b6040516103319190611a03565b60405180910390f35b610354600480360381019061034f91906112f6565b610a8b565b005b610370600480360381019061036b91906112f6565b610c4d565b005b60606004805461038190611b33565b80601f01602080910402602001604051908101604052809291908181526020018280546103ad90611b33565b80156103fa5780601f106103cf576101008083540402835291602001916103fa565b820191906000526020600020905b8154815290600101906020018083116103dd57829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061043e610437610d26565b8484610d2e565b6001905092915050565b6000600354905090565b600061045f848484610ef9565b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104aa610d26565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190611943565b60405180910390fd5b61053e85610536610d26565b858403610d2e565b60019150509392505050565b60006012905090565b60006105f5610560610d26565b84846002600061056e610d26565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f09190611a55565b610d2e565b6001905092915050565b610607610d26565b73ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068d90611923565b60405180910390fd5b6106a08282611172565b5050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106f5610d26565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610782576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077990611963565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606005805461087890611b33565b80601f01602080910402602001604051908101604052809291908181526020018280546108a490611b33565b80156108f15780601f106108c6576101008083540402835291602001916108f1565b820191906000526020600020905b8154815290600101906020018083116108d457829003601f168201915b5050505050905090565b6000806002600061090a610d26565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109be906119c3565b60405180910390fd5b6109db6109d2610d26565b85858403610d2e565b600191505092915050565b60006109fa6109f3610d26565b8484610ef9565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610a93610d26565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1790611963565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b87906118c3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610c55610d26565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ce2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd990611963565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d95906119a3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e05906118e3565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610eec9190611a03565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6090611983565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd0906118a3565b60405180910390fd5b610fe48383836112c7565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561106b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106290611903565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111009190611a55565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111649190611a03565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d9906119e3565b60405180910390fd5b6111ee600083836112c7565b80600360008282546112009190611a55565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112569190611a55565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112bb9190611a03565b60405180910390a35050565b505050565b6000813590506112db81611bd4565b92915050565b6000813590506112f081611beb565b92915050565b60006020828403121561130857600080fd5b6000611316848285016112cc565b91505092915050565b6000806040838503121561133257600080fd5b6000611340858286016112cc565b9250506020611351858286016112cc565b9150509250929050565b60008060006060848603121561137057600080fd5b600061137e868287016112cc565b935050602061138f868287016112cc565b92505060406113a0868287016112e1565b9150509250925092565b600080604083850312156113bd57600080fd5b60006113cb858286016112cc565b92505060206113dc858286016112e1565b9150509250929050565b6113ef81611aab565b82525050565b6113fe81611abd565b82525050565b600061140f82611a39565b6114198185611a44565b9350611429818560208601611b00565b61143281611bc3565b840191505092915050565b600061144a602383611a44565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114b0602683611a44565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611516602283611a44565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061157c602683611a44565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115e2601583611a44565b91507f4f6e6c79206d696e7465722063616e2063616c6c2e00000000000000000000006000830152602082019050919050565b6000611622602883611a44565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611688602083611a44565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006116c8602583611a44565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061172e602483611a44565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611794602583611a44565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006117fa601f83611a44565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61183681611ae9565b82525050565b61184581611af3565b82525050565b600060208201905061186060008301846113e6565b92915050565b600060208201905061187b60008301846113f5565b92915050565b6000602082019050818103600083015261189b8184611404565b905092915050565b600060208201905081810360008301526118bc8161143d565b9050919050565b600060208201905081810360008301526118dc816114a3565b9050919050565b600060208201905081810360008301526118fc81611509565b9050919050565b6000602082019050818103600083015261191c8161156f565b9050919050565b6000602082019050818103600083015261193c816115d5565b9050919050565b6000602082019050818103600083015261195c81611615565b9050919050565b6000602082019050818103600083015261197c8161167b565b9050919050565b6000602082019050818103600083015261199c816116bb565b9050919050565b600060208201905081810360008301526119bc81611721565b9050919050565b600060208201905081810360008301526119dc81611787565b9050919050565b600060208201905081810360008301526119fc816117ed565b9050919050565b6000602082019050611a18600083018461182d565b92915050565b6000602082019050611a33600083018461183c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611a6082611ae9565b9150611a6b83611ae9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611aa057611a9f611b65565b5b828201905092915050565b6000611ab682611ac9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611b1e578082015181840152602081019050611b03565b83811115611b2d576000848401525b50505050565b60006002820490506001821680611b4b57607f821691505b60208210811415611b5f57611b5e611b94565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611bdd81611aab565b8114611be857600080fd5b50565b611bf481611ae9565b8114611bff57600080fd5b5056fea26469706673582212205768429329a0d2b18bc8d791bc3f2cc845cf283ded4771d99c26d08bd19d61ab64736f6c63430008000033';