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

interface ERC1155Interface extends ethers.utils.Interface {
  functions: {
    'ERC1155_BATCH_RECEIVED()': FunctionFragment;
    'ERC1155_RECEIVED()': FunctionFragment;
    'balanceOf(address,uint256)': FunctionFragment;
    'balanceOfBatch(address[],uint256[])': FunctionFragment;
    'exchangesRegistry()': FunctionFragment;
    'getNonFungibleBaseType(uint256)': FunctionFragment;
    'getNonFungibleIndex(uint256)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'isFungible(uint256)': FunctionFragment;
    'isNonFungible(uint256)': FunctionFragment;
    'isNonFungibleBaseType(uint256)': FunctionFragment;
    'isNonFungibleItem(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'ownerOf(uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'setExchangesRegistry(address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'ERC1155_BATCH_RECEIVED',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'ERC1155_RECEIVED',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfBatch',
    values: [string[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangesRegistry',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getNonFungibleBaseType',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getNonFungibleIndex',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'isFungible',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'isNonFungible',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'isNonFungibleBaseType',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'isNonFungibleItem',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'safeBatchTransferFrom',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangesRegistry',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;

  decodeFunctionResult(
    functionFragment: 'ERC1155_BATCH_RECEIVED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ERC1155_RECEIVED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfBatch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'exchangesRegistry',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNonFungibleBaseType',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNonFungibleIndex',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'isFungible', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'isNonFungible',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isNonFungibleBaseType',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isNonFungibleItem',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeBatchTransferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setExchangesRegistry',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;

  events: {
    'ApprovalForAll(address,address,bool)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'TransferBatch(address,address,address,uint256[],uint256[])': EventFragment;
    'TransferSingle(address,address,address,uint256,uint256)': EventFragment;
    'URI(string,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferBatch'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferSingle'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'URI'): EventFragment;
}

export class ERC1155 extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': ERC1155Interface;

  'functions': {
    ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<[string]>;

    'ERC1155_BATCH_RECEIVED()'(overrides?: CallOverrides): Promise<[string]>;

    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<[string]>;

    'ERC1155_RECEIVED()'(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'balanceOf(address,uint256)'(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { balances_: BigNumber[] }>;

    'balanceOfBatch(address[],uint256[])'(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { balances_: BigNumber[] }>;

    exchangesRegistry(overrides?: CallOverrides): Promise<[string]>;

    'exchangesRegistry()'(overrides?: CallOverrides): Promise<[string]>;

    getNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'getNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getNonFungibleIndex(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'getNonFungibleIndex(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isFungible(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    'isFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isNonFungible(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isNonFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isNonFungibleItem(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isNonFungibleItem(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    'ownerOf(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    setExchangesRegistry(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setExchangesRegistry(address)'(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'supportsInterface(bytes4)'(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

  'ERC1155_BATCH_RECEIVED'(overrides?: CallOverrides): Promise<string>;

  'ERC1155_BATCH_RECEIVED()'(overrides?: CallOverrides): Promise<string>;

  'ERC1155_RECEIVED'(overrides?: CallOverrides): Promise<string>;

  'ERC1155_RECEIVED()'(overrides?: CallOverrides): Promise<string>;

  'balanceOf'(
    owner: string,
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'balanceOf(address,uint256)'(
    owner: string,
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'balanceOfBatch'(
    owners: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  'balanceOfBatch(address[],uint256[])'(
    owners: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  'exchangesRegistry'(overrides?: CallOverrides): Promise<string>;

  'exchangesRegistry()'(overrides?: CallOverrides): Promise<string>;

  'getNonFungibleBaseType'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'getNonFungibleBaseType(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'getNonFungibleIndex'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'getNonFungibleIndex(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'isApprovedForAll'(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isApprovedForAll(address,address)'(
    owner: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isFungible'(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  'isFungible(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungible'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungible(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungibleBaseType'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungibleBaseType(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungibleItem'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isNonFungibleItem(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'ownerOf'(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  'ownerOf(uint256)'(
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'safeBatchTransferFrom'(
    from: string,
    to: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
    from: string,
    to: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'safeTransferFrom'(
    from: string,
    to: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256,uint256,bytes)'(
    from: string,
    to: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setApprovalForAll'(
    operator: string,
    approved: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setApprovalForAll(address,bool)'(
    operator: string,
    approved: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setExchangesRegistry'(
    newExchangesRegistry: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setExchangesRegistry(address)'(
    newExchangesRegistry: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'supportsInterface'(
    _interfaceID: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'supportsInterface(bytes4)'(
    _interfaceID: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'transferOwnership'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'callStatic': {
    ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<string>;

    'ERC1155_BATCH_RECEIVED()'(overrides?: CallOverrides): Promise<string>;

    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<string>;

    'ERC1155_RECEIVED()'(overrides?: CallOverrides): Promise<string>;

    balanceOf(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfBatch(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    'balanceOfBatch(address[],uint256[])'(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    exchangesRegistry(overrides?: CallOverrides): Promise<string>;

    'exchangesRegistry()'(overrides?: CallOverrides): Promise<string>;

    getNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getNonFungibleIndex(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getNonFungibleIndex(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isFungible(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'isFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isNonFungible(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isNonFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isNonFungibleItem(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isNonFungibleItem(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    'ownerOf(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    setExchangesRegistry(
      newExchangesRegistry: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setExchangesRegistry(address)'(
      newExchangesRegistry: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'supportsInterface(bytes4)'(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  'filters': {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null,
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _values: null,
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _value: null,
    ): EventFilter;

    URI(_value: null, _id: BigNumberish | null): EventFilter;
  };

  'estimateGas': {
    ERC1155_BATCH_RECEIVED(overrides?: CallOverrides): Promise<BigNumber>;

    'ERC1155_BATCH_RECEIVED()'(overrides?: CallOverrides): Promise<BigNumber>;

    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<BigNumber>;

    'ERC1155_RECEIVED()'(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfBatch(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOfBatch(address[],uint256[])'(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    exchangesRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    'exchangesRegistry()'(overrides?: CallOverrides): Promise<BigNumber>;

    getNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getNonFungibleIndex(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getNonFungibleIndex(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isFungible(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'isFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isNonFungible(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isNonFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isNonFungibleItem(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isNonFungibleItem(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'ownerOf(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    setExchangesRegistry(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'setExchangesRegistry(address)'(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'supportsInterface(bytes4)'(
      _interfaceID: BytesLike,
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
  };

  'populateTransaction': {
    ERC1155_BATCH_RECEIVED(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'ERC1155_BATCH_RECEIVED()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    ERC1155_RECEIVED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'ERC1155_RECEIVED()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOf(address,uint256)'(
      owner: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOfBatch(address[],uint256[])'(
      owners: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    exchangesRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'exchangesRegistry()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getNonFungibleIndex(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getNonFungibleIndex(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isFungible(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isNonFungible(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isNonFungible(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isNonFungibleBaseType(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isNonFungibleBaseType(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isNonFungibleItem(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isNonFungibleItem(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'ownerOf(uint256)'(
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    setExchangesRegistry(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setExchangesRegistry(address)'(
      newExchangesRegistry: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'supportsInterface(bytes4)'(
      _interfaceID: BytesLike,
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
  };
}
