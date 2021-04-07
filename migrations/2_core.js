const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(UniswapV2ERC20);
  deployer.deploy(UniswapV2Factory,'0x1d4cc1a851adb750c40404718061de23577ab355');
  deployer.deploy(UniswapV2Pair);
};
