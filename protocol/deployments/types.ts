export interface Deployment {
  erc20: string;
  multisig: string;
  deployer: string;
  printService: string;
}

export type Deployments = { [chainId: number]: Deployment };
