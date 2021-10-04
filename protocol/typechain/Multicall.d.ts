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

interface MulticallInterface extends ethers.utils.Interface {
  functions: {
    'aggregate(tuple[])': FunctionFragment;
    'getBlockHash(uint256)': FunctionFragment;
    'getCurrentBlockCoinbase()': FunctionFragment;
    'getCurrentBlockDifficulty()': FunctionFragment;
    'getCurrentBlockGasLimit()': FunctionFragment;
    'getCurrentBlockTimestamp()': FunctionFragment;
    'getEthBalance(address)': FunctionFragment;
    'getLastBlockHash()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'aggregate',
    values: [{ target: string; callData: BytesLike }[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getBlockHash',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentBlockCoinbase',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentBlockDifficulty',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentBlockGasLimit',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentBlockTimestamp',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getEthBalance',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'getLastBlockHash',
    values?: undefined,
  ): string;

  decodeFunctionResult(functionFragment: 'aggregate', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getBlockHash',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockCoinbase',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockDifficulty',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockGasLimit',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCurrentBlockTimestamp',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getEthBalance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getLastBlockHash',
    data: BytesLike,
  ): Result;

  events: {};
}

export class Multicall extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': MulticallInterface;

  'functions': {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { blockHash: string }>;

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { blockHash: string }>;

    getCurrentBlockCoinbase(
      overrides?: CallOverrides,
    ): Promise<[string] & { coinbase: string }>;

    'getCurrentBlockCoinbase()'(
      overrides?: CallOverrides,
    ): Promise<[string] & { coinbase: string }>;

    getCurrentBlockDifficulty(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { difficulty: BigNumber }>;

    'getCurrentBlockDifficulty()'(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { difficulty: BigNumber }>;

    getCurrentBlockGasLimit(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { gaslimit: BigNumber }>;

    'getCurrentBlockGasLimit()'(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { gaslimit: BigNumber }>;

    getCurrentBlockTimestamp(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    'getCurrentBlockTimestamp()'(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getLastBlockHash(
      overrides?: CallOverrides,
    ): Promise<[string] & { blockHash: string }>;

    'getLastBlockHash()'(
      overrides?: CallOverrides,
    ): Promise<[string] & { blockHash: string }>;
  };

  'aggregate'(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'aggregate(tuple[])'(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'getBlockHash'(
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'getBlockHash(uint256)'(
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'getCurrentBlockCoinbase'(overrides?: CallOverrides): Promise<string>;

  'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<string>;

  'getCurrentBlockDifficulty'(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentBlockDifficulty()'(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentBlockGasLimit'(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentBlockTimestamp'(overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>;

  'getEthBalance'(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getEthBalance(address)'(
    addr: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'getLastBlockHash'(overrides?: CallOverrides): Promise<string>;

  'getLastBlockHash()'(overrides?: CallOverrides): Promise<string>;

  'callStatic': {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string[]] & { blockNumber: BigNumber; returnData: string[] }
    >;

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string[]] & { blockNumber: BigNumber; returnData: string[] }
    >;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;

    'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<string>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockDifficulty()'(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<string>;

    'getLastBlockHash()'(overrides?: CallOverrides): Promise<string>;
  };

  'filters': {};

  'estimateGas': {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<BigNumber>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockCoinbase()'(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockDifficulty()'(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockGasLimit()'(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentBlockTimestamp()'(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;

    'getLastBlockHash()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  'populateTransaction': {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'aggregate(tuple[])'(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getBlockHash(uint256)'(
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentBlockCoinbase(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getCurrentBlockCoinbase()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentBlockDifficulty(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getCurrentBlockDifficulty()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentBlockGasLimit(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getCurrentBlockGasLimit()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentBlockTimestamp(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getCurrentBlockTimestamp()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getEthBalance(address)'(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getLastBlockHash()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
