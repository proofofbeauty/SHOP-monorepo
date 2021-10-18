import { task } from 'hardhat/config';
import { deployments } from '../deployments';
import { PosterCheckout } from '../typechain/PosterCheckout';
import { NETWORK_NAME_CHAIN_ID, POSTER_CHECKOUT_PRODUCTS } from '../utils';

task('deploy-poster', 'Deploys PosterCheckout', async (args, hre) => {
  const owner = (await hre.ethers.getSigners())[0];

  await hre.run('compile');

  console.log(`deploying with ${await owner.getAddress()}`);

  // deploy erc1155
  const Erc20Mintable = await hre.ethers.getContractFactory('ERC20Mintable');

  const erc20 = await Erc20Mintable.attach(
    deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].erc20,
  );
  await erc20.deployed();

  // deploy PosterCheckout
  const PosterCheckout = await hre.ethers.getContractFactory('PosterCheckout');
  const posterCheckout = (await PosterCheckout.deploy(
    erc20.address,
  )) as PosterCheckout;
  await posterCheckout.deployed();
  console.log('PosterCheckout deployed to: ', posterCheckout.address);

  console.log('wiring metadata: setTreasury');
  await posterCheckout.setTreasury(
    deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
  );

  console.log('wiring metadata: setProduct');
  for (const [index, product] of POSTER_CHECKOUT_PRODUCTS.entries()) {
    await posterCheckout.setProduct(index, product);
  }

  // MAINNET ONLY
  console.log('wiring metadata: transferOwnership to POB Multisig');
  await posterCheckout.transferOwnership(
    deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
  );
});

task(
  'verify-poster',
  'Verifies PosterCheckout Deployment',
  async (args, hre) => {
    // connect to PosterCheckout
    const PosterCheckout = await hre.ethers.getContractFactory(
      'PosterCheckout',
    );
    const posterCheckout = (await PosterCheckout.attach(
      deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].poster,
    )) as PosterCheckout;

    const contractOwner = await posterCheckout.owner();
    console.log(
      `Contract: ${
        deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].poster
      } is owned by ${contractOwner}`,
    );
  },
);

task(
  'update-poster-products',
  'Updates PosterCheckout Products',
  async (args, hre) => {
    // connect to PosterCheckout
    const PosterCheckout = await hre.ethers.getContractFactory(
      'PosterCheckout',
    );
    const posterCheckout = (await PosterCheckout.attach(
      deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].poster,
    )) as PosterCheckout;

    console.log('Setting new Products metadata');
    for (const [index, product] of POSTER_CHECKOUT_PRODUCTS.entries()) {
      await posterCheckout.setProduct(index, product);
    }

    console.log('Successfully set new Products ✓');
  },
);
