require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name renew night social grid nation equal genuine'; 
let testAccounts = [
"0x4c6317a8cce4ffbba65956fc8cd2194d2133816fccb86c2798e343c5ffe57793",
"0x77ae519cce3cce3ba2fcd82142455655fe9036e835ab836411b871304d963636",
"0xf6fb44eb20dcdd68ae9f458dd99375a209816a9cd840b54476afd2aceaffb397",
"0x21058cf6855f8b36739c95174ddd6c1fe50889cc09dcce7da09d46b879f53c15",
"0xd1c1840b13ae2a3273db41fe8f9e3f75af9920d26edfe1778f207c73bd5e11c8",
"0xfdd963d24887a327ba08302d33d7b96457b72ca74f79d0d4af80bc9a220f7724",
"0x10210734492636f2449f89e72cd36ba8ee6ea239980328ef98a55352d15561e5",
"0x78015e6a5e5b4545e1ed5c3311e823cb79cc6117a41ef607db39578a8774f7f1",
"0x6b398d56525dff71656485fe41b0aa1653b17aea368d17db8c9ca258a3bfa4be",
"0x515697aba84a41cf7f4944335b89d994318e9700e9df5348da4ef57b7cc526e7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

