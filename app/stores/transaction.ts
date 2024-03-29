import create from 'zustand';
import produce from 'immer';
import { TransactionReceipt } from '@ethersproject/providers';
import { useToastsStore } from './toasts';

export type TransactionStatus = 'in-progress' | 'success' | 'failed';

export interface ApprovalTransactionMetadata {
  type: 'approval';
}

export type TransactionMetadata = ApprovalTransactionMetadata;

export interface TransactionObject {
  hash: string;
  status: TransactionStatus;
  metadata: TransactionMetadata;
  receipt?: TransactionReceipt;
  lastBlockNumChecked?: number;
}

export type TransactionMap = { [hash: string]: TransactionObject };

type State = {
  transactionMap: TransactionMap;
  updateTransactionMap: (updateFn: (update: any) => void) => void;
  addTransaction: (hash: string, metadata: TransactionMetadata) => void;
};

export const useTransactionsStore = create<State>((set, get) => ({
  transactionMap: {},
  updateTransactionMap: (updateFn: (update: any) => void) => {
    set(
      produce((update) => {
        updateFn(update.transactionMap);
      }),
    );
  },
  addTransaction: (hash: string, metadata: TransactionMetadata) => {
    get().updateTransactionMap((u) => {
      u[hash] = {
        hash,
        status: 'in-progress',
        metadata,
      } as TransactionObject;
    });
  },
}));
