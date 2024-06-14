const ClownCoin = artifacts.require("ClownCoin");

module.exports = function(deployer) {
  const initialSupply = web3.utils.toWei('100000000000', 'ether'); 
  deployer.deploy(ClownCoin, initialSupply);
};
