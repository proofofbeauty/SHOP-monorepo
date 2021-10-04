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

interface MetadataRegistryInterface extends ethers.utils.Interface {
  functions: {
    'mintableErc1155()': FunctionFragment;
    'owner()': FunctionFragment;
    'permissedWriters(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'tokenIdToDocumentMap(uint256,string)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updatePermissedWriterStatus(address,bool)': FunctionFragment;
    'writeDocuments(uint256,string[],string[])': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'mintableErc1155',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'permissedWriters',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenIdToDocumentMap',
    values: [BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePermissedWriterStatus',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'writeDocuments',
    values: [BigNumberish, string[], string[]],
  ): string;

  decodeFunctionResult(
    functionFragment: 'mintableErc1155',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'permissedWriters',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenIdToDocumentMap',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updatePermissedWriterStatus',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'writeDocuments',
    data: BytesLike,
  ): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'UpdatedDocument(uint256,address,string,string,uint256,bytes)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdatedDocument'): EventFragment;
}

export class MetadataRegistry extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': MetadataRegistryInterface;

  'functions': {
    mintableErc1155(overrides?: CallOverrides): Promise<[string]>;

    'mintableErc1155()'(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    permissedWriters(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'permissedWriters(address)'(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    tokenIdToDocumentMap(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber] & {
        writer: string;
        text: string;
        creationTime: BigNumber;
      }
    >;

    'tokenIdToDocumentMap(uint256,string)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber] & {
        writer: string;
        text: string;
        creationTime: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    updatePermissedWriterStatus(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'updatePermissedWriterStatus(address,bool)'(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    writeDocuments(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'writeDocuments(uint256,string[],string[])'(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

  'mintableErc1155'(overrides?: CallOverrides): Promise<string>;

  'mintableErc1155()'(overrides?: CallOverrides): Promise<string>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'permissedWriters'(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  'permissedWriters(address)'(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'tokenIdToDocumentMap'(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, BigNumber] & {
      writer: string;
      text: string;
      creationTime: BigNumber;
    }
  >;

  'tokenIdToDocumentMap(uint256,string)'(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, BigNumber] & {
      writer: string;
      text: string;
      creationTime: BigNumber;
    }
  >;

  'transferOwnership'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'updatePermissedWriterStatus'(
    _writer: string,
    status: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'updatePermissedWriterStatus(address,bool)'(
    _writer: string,
    status: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'writeDocuments'(
    tokenId: BigNumberish,
    keys: string[],
    texts: string[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'writeDocuments(uint256,string[],string[])'(
    tokenId: BigNumberish,
    keys: string[],
    texts: string[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'callStatic': {
    mintableErc1155(overrides?: CallOverrides): Promise<string>;

    'mintableErc1155()'(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    permissedWriters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    'permissedWriters(address)'(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    tokenIdToDocumentMap(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber] & {
        writer: string;
        text: string;
        creationTime: BigNumber;
      }
    >;

    'tokenIdToDocumentMap(uint256,string)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber] & {
        writer: string;
        text: string;
        creationTime: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    updatePermissedWriterStatus(
      _writer: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    'updatePermissedWriterStatus(address,bool)'(
      _writer: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    writeDocuments(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: CallOverrides,
    ): Promise<void>;

    'writeDocuments(uint256,string[],string[])'(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  'filters': {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter;

    UpdatedDocument(
      tokenId: BigNumberish | null,
      writer: string | null,
      key: string | null,
      text: null,
      salt: null,
      signature: null,
    ): EventFilter;
  };

  'estimateGas': {
    mintableErc1155(overrides?: CallOverrides): Promise<BigNumber>;

    'mintableErc1155()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    permissedWriters(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'permissedWriters(address)'(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    tokenIdToDocumentMap(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'tokenIdToDocumentMap(uint256,string)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    updatePermissedWriterStatus(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'updatePermissedWriterStatus(address,bool)'(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    writeDocuments(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'writeDocuments(uint256,string[],string[])'(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<BigNumber>;
  };

  'populateTransaction': {
    mintableErc1155(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'mintableErc1155()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permissedWriters(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'permissedWriters(address)'(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    tokenIdToDocumentMap(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'tokenIdToDocumentMap(uint256,string)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    updatePermissedWriterStatus(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'updatePermissedWriterStatus(address,bool)'(
      _writer: string,
      status: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    writeDocuments(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'writeDocuments(uint256,string[],string[])'(
      tokenId: BigNumberish,
      keys: string[],
      texts: string[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;
  };
}
