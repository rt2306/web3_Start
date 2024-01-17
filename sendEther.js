import Web3 from "web3";


async function sendEther(){
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");   // connect with block chain
    const web3 = new Web3(provider);

    const transcation = await web3.eth.sendTransaction({
        from:'0x566A26c98822672ad6827A25c2255D75C936eDa6',
        to:'0x3aa3fc4927194FCad553Cb784101b604fE219E29',
        value:web3.utils.toWei("10","ether")
    })
    console.log(transcation);
}

sendEther();