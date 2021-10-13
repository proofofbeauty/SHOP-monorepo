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

interface PosterCheckoutInterface extends ethers.utils.Interface {
  functions: {
    'buy(uint256,address,uint256)': FunctionFragment;
    'inStock()': FunctionFragment;
    'orderNum()': FunctionFragment;
    'owner()': FunctionFragment;
    'prices(uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setInStock(bool)': FunctionFragment;
    'setPrice(uint256,uint256)': FunctionFragment;
    'setTreasury(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'treasury()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'buy',
    values: [BigNumberish, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'inStock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'orderNum', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'prices',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'setInStock', values: [boolean]): string;
  encodeFunctionData(
    functionFragment: 'setPrice',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'setTreasury', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'buy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'inStock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'orderNum', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'prices', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setInStock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPrice', data: BytesLike): Result;
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
    'PosterOrderReceived(address,uint256,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PosterOrderReceived'): EventFragment;
}

export class PosterCheckout extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': PosterCheckoutInterface;

  'functions': {
    buy(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'buy(uint256,address,uint256)'(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    inStock(overrides?: CallOverrides): Promise<[boolean]>;

    'inStock()'(overrides?: CallOverrides): Promise<[boolean]>;

    orderNum(overrides?: CallOverrides): Promise<[BigNumber]>;

    'orderNum()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    'prices(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    setInStock(
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setInStock(bool)'(
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setPrice(
      _price: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setPrice(uint256,uint256)'(
      _price: BigNumberish,
      _index: BigNumberish,
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
    _priceIndex: BigNumberish,
    _collection: string,
    _tokenid: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'buy(uint256,address,uint256)'(
    _priceIndex: BigNumberish,
    _collection: string,
    _tokenid: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'inStock'(overrides?: CallOverrides): Promise<boolean>;

  'inStock()'(overrides?: CallOverrides): Promise<boolean>;

  'orderNum'(overrides?: CallOverrides): Promise<BigNumber>;

  'orderNum()'(overrides?: CallOverrides): Promise<BigNumber>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'prices'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  'prices(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'setInStock'(
    _inStock: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setInStock(bool)'(
    _inStock: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setPrice'(
    _price: BigNumberish,
    _index: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setPrice(uint256,uint256)'(
    _price: BigNumberish,
    _index: BigNumberish,
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
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'buy(uint256,address,uint256)'(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    inStock(overrides?: CallOverrides): Promise<boolean>;

    'inStock()'(overrides?: CallOverrides): Promise<boolean>;

    orderNum(overrides?: CallOverrides): Promise<BigNumber>;

    'orderNum()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'prices(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    setInStock(_inStock: boolean, overrides?: CallOverrides): Promise<void>;

    'setInStock(bool)'(
      _inStock: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    setPrice(
      _price: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setPrice(uint256,uint256)'(
      _price: BigNumberish,
      _index: BigNumberish,
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

    PosterOrderReceived(
      _customerWallet: string | null,
      _orderNum: null,
      _collection: null,
      _tokenid: null,
    ): EventFilter;
  };

  'estimateGas': {
    buy(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'buy(uint256,address,uint256)'(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    inStock(overrides?: CallOverrides): Promise<BigNumber>;

    'inStock()'(overrides?: CallOverrides): Promise<BigNumber>;

    orderNum(overrides?: CallOverrides): Promise<BigNumber>;

    'orderNum()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'prices(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    setInStock(_inStock: boolean, overrides?: Overrides): Promise<BigNumber>;

    'setInStock(bool)'(
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setPrice(
      _price: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setPrice(uint256,uint256)'(
      _price: BigNumberish,
      _index: BigNumberish,
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
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'buy(uint256,address,uint256)'(
      _priceIndex: BigNumberish,
      _collection: string,
      _tokenid: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    inStock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'inStock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'orderNum()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prices(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'prices(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    setInStock(
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setInStock(bool)'(
      _inStock: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setPrice(
      _price: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setPrice(uint256,uint256)'(
      _price: BigNumberish,
      _index: BigNumberish,
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
