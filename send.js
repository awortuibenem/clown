const path = require('path');
const ClownCoin = artifacts.require("ClownCoin");

module.exports = async function(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const deployer = accounts[0];
    console.log("Deployer account:", deployer);

    // Get the deployed contract instance
    const instance = await ClownCoin.at('0xF5Dd0e87e581f201320ea2b5d955774094482784');
    console.log("Contract instance address:", instance.address);

    // Check the balance of the deployer
    const deployerBalance = await instance.balanceOf(deployer);
    console.log("Deployer balance:", deployerBalance.toString());

    // Define the recipient and amount
    const recipient = "0xc66498DF2f0Aec9FA841bec53BBBbF080223a888"; // Replace with your actual wallet address
    const amount = web3.utils.toWei('1000', 'ether'); // 1000 tokens

    // Check if deployer has enough balance
    if (deployerBalance.lt(web3.utils.toBN(amount))) {
      throw new Error("Deployer does not have enough tokens");
    }

    // Send tokens
    const receipt = await instance.transfer(recipient, amount, { from: deployer });
    console.log("Transaction receipt: ", receipt);

    callback();
  } catch (error) {
    console.error("Error sending tokens: ", error);
    callback(error);
  }
};
