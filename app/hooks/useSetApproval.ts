import { BigNumber } from 'ethers';
import { useState, useCallback, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { TransactionStatus, useTransactionsStore } from '../stores/transaction';
import { useLondonContract, usePosterContract } from './useContracts';
import { deployments } from '@pob/protocol';
import { CHAIN_ID, MAX_APPROVAL } from '../constants';
import { useTokensStore } from '../stores/token';

export const useLondonApprove = () => {
  const { account } = useWeb3React();
  const london = useLondonContract();

  const addTransaction = useTransactionsStore((s) => s.addTransaction);
  const transactionMap = useTransactionsStore((s) => s.transactionMap);
  const setPrintServiceLondonApprovalBalance = useTokensStore(
    (s) => s.setPrintServiceLondonApprovalBalance,
  );

  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);

  const approve = useCallback(
    async (gasPrice?: BigNumber) => {
      if (!account || !london) {
        return;
      }
      try {
        setIsApproving(true);
        const res = await london.approve(
          deployments[CHAIN_ID].printServiceV2,
          MAX_APPROVAL,
        );

        setPrintServiceLondonApprovalBalance(MAX_APPROVAL);

        addTransaction(res.hash, {
          type: 'approval',
        });
        setError(undefined);
        setTimeout(() => {
          setIsApproving(false);
        }, 30 * 1000);
      } catch (e) {
        console.error(e);
        setIsApproving(false);
        setError(e);
      }
    },
    [london, account],
  );

  const tx = useMemo(() => {
    const justAddedTxs = Object.values(transactionMap).filter(
      (tx) => !tx.lastBlockNumChecked && tx.metadata.type === 'approval',
    );
    const updatedTxs = Object.values(transactionMap)
      .filter(
        (tx) => !!tx.lastBlockNumChecked && tx.metadata.type === 'approval',
      )
      .sort(
        (a, b) =>
          (b.lastBlockNumChecked as number) - (a.lastBlockNumChecked as number),
      );
    const possibleTxs = [...justAddedTxs, ...updatedTxs];
    return possibleTxs[0];
  }, [transactionMap]);

  const txStatus: TransactionStatus | undefined = useMemo(
    () => tx?.status,
    [tx],
  );

  return useMemo(
    () => ({
      txStatus,
      approve,
      isApproving,
      tx,
      error,
    }),
    [approve, txStatus, isApproving, tx, error],
  );
};

export const usePosterApprove = () => {
  const { account } = useWeb3React();
  const poster = usePosterContract();

  const addTransaction = useTransactionsStore((s) => s.addTransaction);
  const transactionMap = useTransactionsStore((s) => s.transactionMap);
  const setPrintServicePosterApprovalBalance = useTokensStore(
    (s) => s.setPrintServicePosterApprovalBalance,
  );

  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);

  const approve = useCallback(
    async (gasPrice?: BigNumber) => {
      if (!account || !poster) {
        return;
      }
      try {
        setIsApproving(true);
        const res = await poster.approve(
          deployments[CHAIN_ID].printServiceV2,
          MAX_APPROVAL,
        );

        setPrintServicePosterApprovalBalance(MAX_APPROVAL);

        addTransaction(res.hash, {
          type: 'approval',
        });
        setError(undefined);
        setTimeout(() => {
          setIsApproving(false);
        }, 30 * 1000);
      } catch (e) {
        console.error(e);
        setIsApproving(false);
        setError(e);
      }
    },
    [poster, account],
  );

  const tx = useMemo(() => {
    const justAddedTxs = Object.values(transactionMap).filter(
      (tx) => !tx.lastBlockNumChecked && tx.metadata.type === 'approval',
    );
    const updatedTxs = Object.values(transactionMap)
      .filter(
        (tx) => !!tx.lastBlockNumChecked && tx.metadata.type === 'approval',
      )
      .sort(
        (a, b) =>
          (b.lastBlockNumChecked as number) - (a.lastBlockNumChecked as number),
      );
    const possibleTxs = [...justAddedTxs, ...updatedTxs];
    return possibleTxs[0];
  }, [transactionMap]);

  const txStatus: TransactionStatus | undefined = useMemo(
    () => tx?.status,
    [tx],
  );

  return useMemo(
    () => ({
      txStatus,
      approve,
      isApproving,
      tx,
      error,
    }),
    [approve, txStatus, isApproving, tx, error],
  );
};
