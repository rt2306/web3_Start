import Web3 from "web3";  // import web3

async function connect() {
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");   // connect with block chain
  const web3 = new Web3(provider);
//   console.log(web3);

// fetch the accounts 
const accounts = await web3.eth.getAccounts();
// console.log(accounts);

//fetch the balance
const balances = await web3.eth.getBalance(accounts[0]);
// console.log(balances);  // in wei

//to convert into ether
const balnaceEther = web3.utils.fromWei(balances,"ether");
console.log(balnaceEther);

}

connect();
