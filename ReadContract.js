import Web3 from "web3";

async function ReadContract() {
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545"); // connect with block chain
  const web3 = new Web3(provider);

  const ABI = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "num",
          type: "uint256",
        },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "retrieve",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const contract_address = "0xd9145cce52d386f254917e481eb44e9943f39138";
  const contract = new web3.eth.Contract(ABI, contract_address);
  //   console.log(contract,'contractcontract');
  const data = await contract.methods.store("10").call();
  console.log(data, "data");
}
ReadContract();
