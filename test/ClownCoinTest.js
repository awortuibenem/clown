
const ClownCoin = artifacts.require("ClownCoin");

contract("ClownCoin", accounts => {
  it("should deploy the contract", async () => {
    const instance = await ClownCoin.deployed();
    assert(instance.address !== '');
  });

  it("should have a total supply of 1 billion tokens", async () => {
    const instance = await ClownCoin.deployed();
    const totalSupply = await instance.totalSupply();
    assert.equal(totalSupply.toString(), '10000000000000000000000000000');
  });
});
