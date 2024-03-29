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

interface MixinMetadataRegistryTokenURIInterface
  extends ethers.utils.Interface {
  functions: {
    'baseMetadataURI()': FunctionFragment;
    'metadataKey()': FunctionFragment;
    'metadataRegistry()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setBaseMetadataURI(string)': FunctionFragment;
    'setMetadataKey(string)': FunctionFragment;
    'setMetadataRegistry(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'uri(uint256)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'baseMetadataURI',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'metadataKey',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'metadataRegistry',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'setBaseMetadataURI',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'setMetadataKey',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'setMetadataRegistry',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'uri', values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: 'baseMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'metadataKey',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'metadataRegistry',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setBaseMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setMetadataKey',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setMetadataRegistry',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'uri', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class MixinMetadataRegistryTokenURI extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': MixinMetadataRegistryTokenURIInterface;

  'functions': {
    baseMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    'baseMetadataURI()'(overrides?: CallOverrides): Promise<[string]>;

    metadataKey(overrides?: CallOverrides): Promise<[string]>;

    'metadataKey()'(overrides?: CallOverrides): Promise<[string]>;

    metadataRegistry(overrides?: CallOverrides): Promise<[string]>;

    'metadataRegistry()'(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    setBaseMetadataURI(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setBaseMetadataURI(string)'(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setMetadataKey(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setMetadataKey(string)'(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setMetadataRegistry(
      newMetadataRegistry: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setMetadataRegistry(address)'(
      newMetadataRegistry: string,
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

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    'uri(uint256)'(
      _id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;
  };

  'baseMetadataURI'(overrides?: CallOverrides): Promise<string>;

  'baseMetadataURI()'(overrides?: CallOverrides): Promise<string>;

  'metadataKey'(overrides?: CallOverrides): Promise<string>;

  'metadataKey()'(overrides?: CallOverrides): Promise<string>;

  'metadataRegistry'(overrides?: CallOverrides): Promise<string>;

  'metadataRegistry()'(overrides?: CallOverrides): Promise<string>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'setBaseMetadataURI'(
    newBaseMetadataURI: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setBaseMetadataURI(string)'(
    newBaseMetadataURI: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setMetadataKey'(
    newMetadataKey: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setMetadataKey(string)'(
    newMetadataKey: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setMetadataRegistry'(
    newMetadataRegistry: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setMetadataRegistry(address)'(
    newMetadataRegistry: string,
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

  'uri'(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  'uri(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  'callStatic': {
    baseMetadataURI(overrides?: CallOverrides): Promise<string>;

    'baseMetadataURI()'(overrides?: CallOverrides): Promise<string>;

    metadataKey(overrides?: CallOverrides): Promise<string>;

    'metadataKey()'(overrides?: CallOverrides): Promise<string>;

    metadataRegistry(overrides?: CallOverrides): Promise<string>;

    'metadataRegistry()'(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    setBaseMetadataURI(
      newBaseMetadataURI: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setBaseMetadataURI(string)'(
      newBaseMetadataURI: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setMetadataKey(
      newMetadataKey: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setMetadataKey(string)'(
      newMetadataKey: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setMetadataRegistry(
      newMetadataRegistry: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setMetadataRegistry(address)'(
      newMetadataRegistry: string,
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

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    'uri(uint256)'(
      _id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  'filters': {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter;
  };

  'estimateGas': {
    baseMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    'baseMetadataURI()'(overrides?: CallOverrides): Promise<BigNumber>;

    metadataKey(overrides?: CallOverrides): Promise<BigNumber>;

    'metadataKey()'(overrides?: CallOverrides): Promise<BigNumber>;

    metadataRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    'metadataRegistry()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    setBaseMetadataURI(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setBaseMetadataURI(string)'(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setMetadataKey(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setMetadataKey(string)'(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setMetadataRegistry(
      newMetadataRegistry: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setMetadataRegistry(address)'(
      newMetadataRegistry: string,
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

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'uri(uint256)'(
      _id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  'populateTransaction': {
    baseMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'baseMetadataURI()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    metadataKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'metadataKey()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    metadataRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'metadataRegistry()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    setBaseMetadataURI(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setBaseMetadataURI(string)'(
      newBaseMetadataURI: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setMetadataKey(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setMetadataKey(string)'(
      newMetadataKey: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setMetadataRegistry(
      newMetadataRegistry: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setMetadataRegistry(address)'(
      newMetadataRegistry: string,
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

    uri(
      _id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'uri(uint256)'(
      _id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
