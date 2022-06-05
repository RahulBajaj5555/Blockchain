const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2345,'sagahhtaeea','wsayeayhb');
bitcoin.createNewBlock(14141,'gyuiSGHUW','SGGTAWHAE');

bitcoin.createNewTransaction(200,'Rahul Bajaj','harsh');
bitcoin.createNewTransaction(134,'Krishna','harsh');
bitcoin.createNewTransaction(406,'Sumit','Raj');

bitcoin.createNewBlock(14141,'gyuiSGHUW','SGGTAWHAE');

console.log(bitcoin.chain[3]);
// const ph = '0u8fiuahiuahi';
// const cbd = [
// {
// 	amount:10,
// 	sender:'safdaf',
// 	recipient:'adfaf'
// },
// {
// 	amount:110,
// 	sender:'safdaf',
// 	recipient:'adfaf'
// }
// ];

// const nonce =100;

// console.log(bitcoin.hashBlock(ph,cbd,9051));

// bitcoin.createNewBlock(2342,'02h3uikjfjkabkj','74gafkbjkafbk');
// // bitcoin.createNewBlock(123,'74gafkbjkafbk','yagdugiuqrfg');
// // bitcoin.createNewBlock(333,'yagdugiuqrfg','atrarduaff345');

// bitcoin.createNewTransaction(100,'alexagfkiauhfi','jennjhfakjhbaaaa');

// bitcoin.createNewBlock(11111,'uiwhtiuhtwi','assdfiohiufg');
// // console.log(bitcoin.getLastBlock());
// bitcoin.createNewTransaction(1030,'alexagfkiauhfi','jennjhfakjhbaaaa');
// bitcoin.createNewTransaction(1003,'alexagfkiauhfi','jennjhfakjhbaaaa');
// bitcoin.createNewTransaction(1300,'alexagfkiauhfi','jennjhfakjhbaaaa');

// bitcoin.createNewBlock(12343,'arfgiuaf','2098ufkaf');

// console.log(bitcoin.hashBlock(ph,cbd,nonce)); 