const ClownCoin = artifacts.require("ClownCoin");

module.exports = async function(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const deployer = accounts[0];
    console.log("Deployer account:", deployer);

    const instance = await ClownCoin.at('0xF5Dd0e87e581f201320ea2b5d955774094482784');
    console.log("Contract instance address:", instance.address);

    const deployerBalance = await instance.balanceOf(deployer);
    console.log("Deployer balance:", web3.utils.fromWei(deployerBalance, 'ether'));

    callback();
  } catch (error) {
    console.error("Error checking balance: ", error);
    callback(error);
  }
};
