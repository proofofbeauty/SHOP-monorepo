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
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface MixinSignatureInterface extends ethers.utils.Interface {
  functions: {
    'isSigned(address,bytes32,uint8,bytes32,bytes32)': FunctionFragment;
    'splitSignature(bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'isSigned',
    values: [string, BytesLike, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'splitSignature',
    values: [BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'isSigned', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'splitSignature',
    data: BytesLike,
  ): Result;

  events: {};
}

export class MixinSignature extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': MixinSignatureInterface;

  'functions': {
    isSigned(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isSigned(address,bytes32,uint8,bytes32,bytes32)'(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;
  };

  'isSigned'(
    _address: string,
    messageHash: BytesLike,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isSigned(address,bytes32,uint8,bytes32,bytes32)'(
    _address: string,
    messageHash: BytesLike,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'splitSignature'(
    sig: BytesLike,
    overrides?: CallOverrides,
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  'splitSignature(bytes)'(
    sig: BytesLike,
    overrides?: CallOverrides,
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  'callStatic': {
    isSigned(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isSigned(address,bytes32,uint8,bytes32,bytes32)'(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;
  };

  'filters': {};

  'estimateGas': {
    isSigned(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isSigned(address,bytes32,uint8,bytes32,bytes32)'(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  'populateTransaction': {
    isSigned(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isSigned(address,bytes32,uint8,bytes32,bytes32)'(
      _address: string,
      messageHash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'splitSignature(bytes)'(
      sig: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
