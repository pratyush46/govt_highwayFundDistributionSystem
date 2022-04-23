import Web3 from 'web3'
import abi from './Abis'
import { abi2 } from './Abis'

var web3 = new Web3(window.ethereum)
var contractAddress = '0x8fC648D09824327642FD74542d8A66B306ec6446'
var contractAddress2 = '0x43f6842DAeB43f70d531B6A390a94c3Fb516fAB6'

var Mycontract = new web3.eth.Contract(abi, contractAddress)
var Mycontract2 = new web3.eth.Contract(abi2, contractAddress2)

async function Incrementscore(Address, Incrementscore) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var result = await Mycontract.methods.IncrementScore(Address, Incrementscore).send({
    from: accounts[0],
    gas: 3000000,
  })

  // return result
  console.log(result)
}

async function AllBidders(UID) {
  // var daata = Mycontract.methods.AllBidders(UID).encodeABI()
  // signAndSendTransaction(daata)
  console.log(`Called AllBidders`)
  if (UID === 0) {
    // console.log("Invalid Input UIDS start from 1")
    return 'Invalid Input UIDS start from 1'
  }
  var result = await Mycontract.methods.AllBidders(UID).call()
  console.log('Inside function : ', result)
  return result
}

async function RegisteredBiddersUid(Address) {
  console.log(`Called RegisteredBiddersUid`)

  let result = await Mycontract.methods.RegisteredBiddersUid(Address).call()
  return result
}

async function scorebyUID(UID) {
  // Try to check if the given UID exists or not
  var result = await Mycontract.methods.scorebyUID(UID).call()
  return result
}

async function numberofprojectsapplied(Address) {
  var result = await Mycontract.methods.numberofprojectsapplied(Address).call()
  return result
}

async function SetDetails(
  Name,
  Desc,
  Class,
  ContractNumber,
  Warranty,
  Days,
  Budget,
  Enddate,
  Reputation,
) {
  console.log(`SetDetails function called`)
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var result = await Mycontract.methods
    .SetDetails(Name, Desc, Class, ContractNumber, Warranty, Days, Budget, Enddate, Reputation)
    .send({
      from: accounts[0],
      gas: 3000000,
    })

  return result
}

async function addallowance(Address, Value) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var temp = await Mycontract2.methods.addallowance(Address, Value).send({
    from: accounts[0],
    gas: 3000000,
  })
  return temp
}

async function allowance(Address) {
  var temp = await Mycontract2.methods.allowance(Address).call()
  return temp
}

async function reduceallowance(Address, Value) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var temp = await Mycontract2.methods.reduceallowance(Address, Value).send({
    from: accounts[0],
    gas: 3000000,
  })
  return temp
}

async function withdraw(Address, value) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var temp = await Mycontract2.methods.withdraw(Address, value).send({
    from: accounts[0],
    gas: 3000000,
  })

  return temp
}

async function transferOwnership2(Address) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  var temp = await Mycontract2.methods.transferOwnership(Address).send({
    from: accounts[0],
    gas: 3000000,
  })

  return temp
}

export default Incrementscore
export {
  AllBidders,
  RegisteredBiddersUid,
  scorebyUID,
  numberofprojectsapplied,
  SetDetails,
  transferOwnership2,
  withdraw,
  reduceallowance,
  allowance,
  addallowance,
}
