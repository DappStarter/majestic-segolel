require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind hole guess kiwi bone such'; 
let testAccounts = [
"0xec209d62dc654de4c118b341340f0d434ddb9672816d167ce1083e529b42d77c",
"0x739b6bcee67141d969cc5be273eef6746c49926ea075b0007e948e6cf357ece7",
"0xe79bf12812cdbb2d456fa6d1c8ed6ef60a5e2ea30eb76f7ea4814e18c99347c8",
"0x3fdd49b7768c6ac6d325c2d31d7843df1b15594f8c4c3d8d8cef436630f6b306",
"0x2f67d186e1d13fd04fa1fef0244bb8f12410255fe5b093900fa5434c5eb075f8",
"0xbbcfa2fa55bf147c009c8147338b6242d627289bf3a058dd87ba811744ba1fde",
"0x03c72ae4752dddb7b78ea77c1f287c49a68da09df4b2184168fdc2d4b05c40f1",
"0x4acf21b8ed5d6c0ec071031acf606b6b0c787d2deded866732dcf16bc5460c76",
"0x8bff6563fabdf8f430097fb6a8863a28cfeb4df009fd11b501fd2846667a8519",
"0x14dbd0a0d9e446bec3e12c82dd8ed8f0d13fe81df6fffa51065b26abdbb2f5dc"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
