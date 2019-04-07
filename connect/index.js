const Web3 = require('web3');
var CONSTS = require('./constants'); //constants.js is gitignored to not expose credentials

console.log(`CONSTS.INFURA.ROPSTEN_URL = ${CONSTS.INFURA.ROPSTEN_URL}`);

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(CONSTS.INFURA.ROPSTEN_URL));
}

var number = web3.eth.blockNumber;
console.log(number);