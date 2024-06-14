// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClownCoin is ERC20 {
    address public faucet;
    mapping(address => bool) public restricted;

    constructor(uint256 initialSupply) ERC20("Poco The Clown", "$CLOWN") {
        _mint(msg.sender, initialSupply);
        faucet = msg.sender;
    }

    function distribute(address to, uint256 amount) external {
        require(msg.sender == faucet, "Only faucet can distribute");
        _transfer(faucet, to, amount);
        restricted[to] = true;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(!restricted[msg.sender], "Tokens are restricted");
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        require(!restricted[sender], "Tokens are restricted");
        return super.transferFrom(sender, recipient, amount);
    }
}
