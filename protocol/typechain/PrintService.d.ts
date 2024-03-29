/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface PrintServiceInterface extends ethers.utils.Interface {
  functions: {
    'buy(uint256,address,uint256,bytes32)': FunctionFragment;
    'orderId()': FunctionFragment;
    'owner()': FunctionFragment;
    'payableErc20()': FunctionFragment;
    'products(uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setProduct(uint256,tuple)': FunctionFragment;
    'setProductInStock(uint256,bool)': FunctionFragment;
    'setProductPrice(uint256,uint256)': FunctionFragment;
    'setTreasury(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'treasury()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'buy',
    values: [BigNumberish, string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'orderId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'payableErc20',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'products',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'setProduct',
    values: [
      BigNumberish,
      { id: string; price: BigNumberish; inStock: boolean },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'setProductInStock',
    values: [BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'setProductPrice',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'setTreasury', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'buy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'orderId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'payableErc20',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'products', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setProduct', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setProductInStock',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setProductPrice',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTreasury',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'PrintOrderReceived(uint256,bytes32,uint256,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PrintOrderReceived'): EventFragment;
}

export class PrintService extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': PrintServiceInterface;

  'functions': {
    buy(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'buy(uint256,address,uint256,bytes32)'(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    orderId(overrides?: CallOverrides): Promise<[BigNumber]>;

    'orderId()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    payableErc20(overrides?: CallOverrides): Promise<[string]>;

    'payableErc20()'(overrides?: CallOverrides): Promise<[string]>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, boolean] & {
        id: string;
        price: BigNumber;
        inStock: boolean;
      }
    >;

    'products(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, boolean] & {
        id: string;
        price: BigNumber;
        inStock: boolean;
      }
    >;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    setProduct(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setProduct(uint256,(string,uint256,bool))'(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setProductInStock(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setProductInStock(uint256,bool)'(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setProductPrice(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setProductPrice(uint256,uint256)'(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setTreasury(address)'(
      _treasury: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    'treasury()'(overrides?: CallOverrides): Promise<[string]>;
  };

  'buy'(
    _productIndex: BigNumberish,
    _collection: string,
    _tokenId: BigNumberish,
    _orderHash: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'buy(uint256,address,uint256,bytes32)'(
    _productIndex: BigNumberish,
    _collection: string,
    _tokenId: BigNumberish,
    _orderHash: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'orderId'(overrides?: CallOverrides): Promise<BigNumber>;

  'orderId()'(overrides?: CallOverrides): Promise<BigNumber>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'payableErc20'(overrides?: CallOverrides): Promise<string>;

  'payableErc20()'(overrides?: CallOverrides): Promise<string>;

  'products'(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, boolean] & {
      id: string;
      price: BigNumber;
      inStock: boolean;
    }
  >;

  'products(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, boolean] & {
      id: string;
      price: BigNumber;
      inStock: boolean;
    }
  >;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'setProduct'(
    _index: BigNumberish,
    _product: { id: string; price: BigNumberish; inStock: boolean },
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setProduct(uint256,(string,uint256,bool))'(
    _index: BigNumberish,
    _product: { id: string; price: BigNumberish; inStock: boolean },
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setProductInStock'(
    _index: BigNumberish,
    _inStock: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setProductInStock(uint256,bool)'(
    _index: BigNumberish,
    _inStock: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setProductPrice'(
    _index: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setProductPrice(uint256,uint256)'(
    _index: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setTreasury'(
    _treasury: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setTreasury(address)'(
    _treasury: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferOwnership'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'treasury'(overrides?: CallOverrides): Promise<string>;

  'treasury()'(overrides?: CallOverrides): Promise<string>;

  'callStatic': {
    buy(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'buy(uint256,address,uint256,bytes32)'(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    orderId(overrides?: CallOverrides): Promise<BigNumber>;

    'orderId()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    payableErc20(overrides?: CallOverrides): Promise<string>;

    'payableErc20()'(overrides?: CallOverrides): Promise<string>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, boolean] & {
        id: string;
        price: BigNumber;
        inStock: boolean;
      }
    >;

    'products(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, boolean] & {
        id: string;
        price: BigNumber;
        inStock: boolean;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    setProduct(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: CallOverrides,
    ): Promise<void>;

    'setProduct(uint256,(string,uint256,bool))'(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: CallOverrides,
    ): Promise<void>;

    setProductInStock(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setProductInStock(uint256,bool)'(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    setProductPrice(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setProductPrice(uint256,uint256)'(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    'setTreasury(address)'(
      _treasury: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    'treasury()'(overrides?: CallOverrides): Promise<string>;
  };

  'filters': {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter;

    PrintOrderReceived(
      _orderId: BigNumberish | null,
      _orderHash: BytesLike | null,
      _productId: null,
      _collection: null,
      _tokenId: null,
    ): EventFilter;
  };

  'estimateGas': {
    buy(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'buy(uint256,address,uint256,bytes32)'(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    orderId(overrides?: CallOverrides): Promise<BigNumber>;

    'orderId()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    payableErc20(overrides?: CallOverrides): Promise<BigNumber>;

    'payableErc20()'(overrides?: CallOverrides): Promise<BigNumber>;

    products(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'products(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    setProduct(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setProduct(uint256,(string,uint256,bool))'(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setProductInStock(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setProductInStock(uint256,bool)'(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setProductPrice(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setProductPrice(uint256,uint256)'(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setTreasury(_treasury: string, overrides?: Overrides): Promise<BigNumber>;

    'setTreasury(address)'(
      _treasury: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    'treasury()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  'populateTransaction': {
    buy(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'buy(uint256,address,uint256,bytes32)'(
      _productIndex: BigNumberish,
      _collection: string,
      _tokenId: BigNumberish,
      _orderHash: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    orderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'orderId()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payableErc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'payableErc20()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'products(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    setProduct(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setProduct(uint256,(string,uint256,bool))'(
      _index: BigNumberish,
      _product: { id: string; price: BigNumberish; inStock: boolean },
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setProductInStock(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setProductInStock(uint256,bool)'(
      _index: BigNumberish,
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setProductPrice(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setProductPrice(uint256,uint256)'(
      _index: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setTreasury(address)'(
      _treasury: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'treasury()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
