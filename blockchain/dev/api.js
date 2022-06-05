const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

//removing '-' from uuid (node address)
const nodeAddress = uuidv4().split('-').join('');

const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction',function(req,res){
  const blockIndex = bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient);
  //in postman
  res.json({note:`Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine',function(req,res){
  //previous Block Hash
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions:bitcoin.pendingTransactions,
    index: lastBlock['index']+1
  };

  const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);

  const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

  bitcoin.createNewTransaction(12.5,"00",nodeAddress);

//new block object
  const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);

  res.json({
    note: "New block mined successfully",
    block: newBlock
  });

});


//when our port is running we will know that in terminal.
app.listen(3000,function(){
  console.log('Listening on port 3000 ...')
});