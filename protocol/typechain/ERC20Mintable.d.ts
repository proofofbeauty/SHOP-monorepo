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
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface Erc20MintableInterface extends ethers.utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'minter()': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setMinter(address)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'minter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'setMinter', values: [string]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setMinter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export class Erc20Mintable extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'listeners'(eventName?: string): Array<Listener>;
  'off'(eventName: string, listener: Listener): this;
  'on'(eventName: string, listener: Listener): this;
  'once'(eventName: string, listener: Listener): this;
  'removeListener'(eventName: string, listener: Listener): this;
  'removeAllListeners'(eventName?: string): this;

  'listeners'<T, G>(
    eventFilter?: TypedEventFilter<T, G>,
  ): Array<TypedListener<T, G>>;
  'off'<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>,
  ): this;
  'on'<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>,
  ): this;
  'once'<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>,
  ): this;
  'removeListener'<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>,
  ): this;
  'removeAllListeners'<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  'queryFilter'<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<T & G>>>;

  'interface': Erc20MintableInterface;

  'functions': {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    'decimals()'(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'mint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    'minter()'(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    'name()'(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'setMinter(address)'(
      _minter: string,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    'symbol()'(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
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
  };

  'allowance'(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'allowance(address,address)'(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'approve'(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'balanceOf'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(
    account: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'decimals'(overrides?: CallOverrides): Promise<number>;

  'decimals()'(overrides?: CallOverrides): Promise<number>;

  'decreaseAllowance'(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'decreaseAllowance(address,uint256)'(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'increaseAllowance'(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'increaseAllowance(address,uint256)'(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'mint'(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'mint(address,uint256)'(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'minter'(overrides?: CallOverrides): Promise<string>;

  'minter()'(overrides?: CallOverrides): Promise<string>;

  'name'(overrides?: CallOverrides): Promise<string>;

  'name()'(overrides?: CallOverrides): Promise<string>;

  'owner'(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  'renounceOwnership'(overrides?: Overrides): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>;

  'setMinter'(
    _minter: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'setMinter(address)'(
    _minter: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'symbol'(overrides?: CallOverrides): Promise<string>;

  'symbol()'(overrides?: CallOverrides): Promise<string>;

  'totalSupply'(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  'transfer'(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transfer(address,uint256)'(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferFrom'(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    sender: string,
    recipient: string,
    amount: BigNumberish,
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

  'callStatic': {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    'decimals()'(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'mint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    minter(overrides?: CallOverrides): Promise<string>;

    'minter()'(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    'name()'(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    setMinter(_minter: string, overrides?: CallOverrides): Promise<void>;

    'setMinter(address)'(
      _minter: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    'symbol()'(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
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
    Approval(
      owner: string | null,
      spender: string | null,
      value: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null,
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Transfer(
      from: string | null,
      to: string | null,
      value: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  'estimateGas': {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    'decimals()'(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'mint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    'minter()'(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    'name()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>;

    setMinter(_minter: string, overrides?: Overrides): Promise<BigNumber>;

    'setMinter(address)'(
      _minter: string,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    'symbol()'(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
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
  };

  'populateTransaction': {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'decimals()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'mint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'minter()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'setMinter(address)'(
      _minter: string,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
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
  };
}
