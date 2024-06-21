# Poco The Clown ($clown) Token

This repository contains the smart contract code for Poco The Clown ($clown) token. The smart contract has been deployed to the Sepolia network.

## Getting Started

These instructions will help you set up and deploy the smart contract on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm
- Truffle

### Installation

1. Clone this repository to your local machine:
    ```sh
    git clone https://github.com/awortuibenem/clown.git
    cd clown
    ```

2. Install the dependencies:
    ```sh
    npm install will install the packages that the project needs to run
    ```

### Deployment

1. Compile the smart contracts into a build/contracts folder:
    ```sh
    truffle compile
    ```

2. Deploy the smart contracts to the Sepolia network:
    ```sh
    truffle migrate --network sepolia
    ```

3. Verify the deployment:
    ```sh
    truffle console --network sepolia
    ```

### Usage

You can interact with the deployed smart contract using Truffle console or by building a frontend application. Below is an example of how to interact with the contract in Truffle console:

1. Open Truffle console:
    ```sh
    truffle console --network sepolia
    ```

 2. ### Check Deployer Balance:
    
    Specify The Contract Address Of Your Token Then run
    ```sh
    truffle exec check.js --network sepolia
    ```

4. ### Send Token:
   
   Specify The Recipient Wallet Address, The Amount Of Tokens You Want To Send and The Contract Address Of Your Token Then run
   ```sh
    truffle exec send.js --network sepolia
    ```

### Contributing

Feel free to submit pull requests or open issues to help improve this project. Contributions are always welcome.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
