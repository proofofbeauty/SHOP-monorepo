import { Deployments, ContractEvents } from './types';

export const deployments: Deployments = {
  1: {
    london: '0x491D6b7D6822d5d4BC88a1264E1b47791Fd8E904', // $LONDON
    multisig: '0x28558Ba4343FeB2709ed7A9531B72402a7794D8D', // POB Multisig
    deployer: '0x0B7056e2D9064f2ec8647F1ae556BAcc06da6Db4', // deployer.pob.eth
    printService: '0x7C8822D08A7A60500aa4b72F5417005D9fc270a2', // PrintService (OLD)
    printServiceEth: '0x0000000000000000000000000000000000000000', // PrintServiceEth (OLD)
    printServiceV2: '0xD8932fC665b692AA612F58b31841B10FFD8FE401', // PrintServiceV2
    poster: '0xA99757De24893FEC6B51610C754C62635b42AE13', // $POSTER token
  },
  4: {
    london: '0x243901455D1B8ef76678b32b4459602CC6B730ae', // $LONDON
    multisig: '0x28558Ba4343FeB2709ed7A9531B72402a7794D8D', // POB Multisig
    deployer: '0x0B7056e2D9064f2ec8647F1ae556BAcc06da6Db4', // deployer.pob.eth
    printService: '0x2eD18dF7240082E514F86C4CCdBD8DA2f615EC0e', // PrintService (OLD)
    printServiceEth: '0x0c6881bF552208F41367f0B55759d0269E43aad1', // PrintServiceEth (OLD)
    printServiceV2: '0x1773b735484FD48256902D7BbfB953a7e00A9636', // PrintServiceV2
    poster: '0xa394B401C18bFA24513b1b18048f8D900d3c9018', // $POSTER token
  },
};

export const PrintOrderReceivedEvent =
  '0x683b8e58d3b4c62460d6e6df4524f97da8c68e6fce307d96b224461ca40b6869';
