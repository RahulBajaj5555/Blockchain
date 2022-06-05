//RahulBajaj -> Blockchain(Data Structure)
//constructor function ->func that creates an object class and allows us to create multiple instances.//can also use class.

//importing sha-256 hash function
//sha256 hashing function as sha256 variable
const sha256 = require('sha256');

//constructor function(to make object class)
function Blockchain(){
	this.chain=[];//all blocks created or mined
	this.pendingTransactions=[];//all new(pending) trans. before block is mined

	//Genesis Block -> first block, no need of prrof of work, arbitrary parameters.
	this.createNewBlock(10,'0','0');
}

//create New Block Method
Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
	const newBlock = {
		index: this.chain.length+1, //block no,
		timestamp: Date.now(),
		transactions: this.pendingTransactions, 
		nonce: nonce,
		hash: hash,
		previousBlockHash:previousBlockHash
	};
	this.pendingTransactions=[]; //once block is created,clearing pending transactions array
	this.chain.push(newBlock);
	return newBlock;
}

//get last block method
Blockchain.prototype.getLastBlock=function(){
	return this.chain[this.chain.length-1];
}

//create new transaction method
Blockchain.prototype.createNewTransaction = function(amount,sender,recipient){
	//transaction object
	const newTransaction ={
		amount: amount,
		sender: sender,
		recipient: recipient
	};
	//adding in pending transaction array
	this.pendingTransactions.push(newTransaction);

	//number of block this transaction will be added to // will be returned
	return this.getLastBlock().index+1;
}

//Hash Block method -> blockdata -> fixed length sha-256 hash string
//import sha-256 func as npm library
Blockchain.prototype.hashBlock=function(previousBlockHash,currentBlockData,nonce){
	//previousBlockHash + nonce + cuurentBlockData(array of all transactions in currentBlock)
	// -> to single string -sha256 function-> hash 
	const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataAsString);
	return hash;
}

//Proof of work method -> to check if block is legit.
/*=>repeatedly hash block until it finds correct hash(ANY HASH STARTING WITH 4 ZEROES) =>'0000'
  =>uses current block data for the hash and previous block Hash.
  =>continuously changes nonce value until it finds correct hash(using hashBlock method).
  =>run hashBlock method many many times(enormous computation) to create correct hash.
  =>returns to us the nonce value that creates correct hash.
*/
Blockchain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
	let nonce = 0;
	let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
	//requires enormous calculation and energy, can take any random number of time.
	while(hash.substring(0,4)!=='0000'){
		nonce++;
		hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
		// console.log(hash);
	}
	//So, proof of work is done to calculate desired nonce value. nonce == proof
	return nonce;

}

//exporting Blockchain constructor function for testing
module.exports=Blockchain;
