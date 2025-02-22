import { makeClient } from '../ipc/ipc';

export const clientStub = ipcRendererInjector => makeClient(ipcRendererInjector, 'Wallet', [
  'start',
  'getAPIKey',
  'getWalletInfo',
  'getAccountInfo',
  'getCoin',
  'getTX',
  'getNames',
  'createNewWallet',
  'importSeed',
  'generateReceivingAddress',
  'getAuctionInfo',
  'getTransactionHistory',
  'getPendingTransactions',
  'getBids',
  'getMasterHDKey',
  'hasAddress',
  'setPassphrase',
  'revealSeed',
  'estimateTxFee',
  'estimateMaxSend',
  'removeWalletById',
  'updateAccountDepth',
  'backup',
  'rescan',
  'deepClean',
  'reset',
  'sendOpen',
  'sendBid',
  'sendRegister',
  'sendUpdate',
  'sendReveal',
  'sendRedeem',
  'sendRenewal',
  'sendRevealAll',
  'sendRedeemAll',
  'sendTransfer',
  'cancelTransfer',
  'finalizeTransfer',
  'finalizeWithPayment',
  'claimPaidTransfer',
  'revokeName',
  'send',
  'lock',
  'unlock',
  'isLocked',
  'getNonce',
  'importNonce',
  'zap',
  'importName',
  'rpcGetWalletInfo',
  'listWallets'
]);
