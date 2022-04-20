var Web3 = require('web3')
// const HDWalletProvider = require("@truffle/hdwallet-provider");

// var Url = "https://mainnet.infura.io/v3/892563e8fb854f85a97da90d1a920c58"
// var Url = 'http://127.0.0.1:8545'

// var web3 = new Web3(Url)

// var interactingAddress = '0x22e15c654bEE5883D825d157bf9D2947EA5cA761'
// var interactingAddressPrivateKey =
//   'febeea5b4711bfc2329fefaf82e8c7f254dacc3d0644da85008a551e31e2118d'

// var interactingAddress = "0x01EC3D74244CAF9e9E4C4CBF02d4004C8257615F"
// var interactingAddressPrivateKey = "7f4bb1654c916ef8a90d2ef7bd8df926cb9317133873dd931e0f91a31e228234"

var Abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'Name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'Class',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'WarrantyPeriod',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Uid',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'Bidderaddress',
            type: 'address',
          },
        ],
        indexed: true,
        internalType: 'struct Register.Details',
        name: '_ofBidder',
        type: 'tuple',
      },
    ],
    name: 'BidderDetails',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'ContractName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'Description',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'Class',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'ContractNumber',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Warranty',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Days',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Budget',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'EndDate',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'reputation',
            type: 'int256',
          },
        ],
        indexed: true,
        internalType: 'struct Announce.CDetails',
        name: 'ContractDetailss',
        type: 'tuple',
      },
    ],
    name: 'ContractDetails',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'AllBidders',
    outputs: [
      {
        internalType: 'string',
        name: 'Name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Class',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'WarrantyPeriod',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Uid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'Bidderaddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'AllDetails',
    outputs: [
      {
        internalType: 'string',
        name: 'ContractName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Class',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'ContractNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Warranty',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Days',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Budget',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'EndDate',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'reputation',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'UID',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'ContractNumber',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'ContractName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'Budget',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'warranty',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Time',
        type: 'uint256',
      },
    ],
    name: 'ApplyForContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'Contractnameandid',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bidderaddress',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: '_scoredecrement',
        type: 'int256',
      },
    ],
    name: 'DecrementScore',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'UID',
        type: 'uint256',
      },
    ],
    name: 'GetAllContractsApplied',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bidderaddress',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: '_scoreincrement',
        type: 'int256',
      },
    ],
    name: 'IncrementScore',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'Name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Class',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'WarrantyPeriod',
        type: 'uint256',
      },
    ],
    name: 'RegisterDetails',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'RegisteredBiddersUid',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'ContractName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'Class',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'ContractNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Warranty',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Days',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'Budget',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'EndDate',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'reputation',
        type: 'int256',
      },
    ],
    name: 'SetDetails',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bidderaddress',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: '_initialscore',
        type: 'int256',
      },
    ],
    name: 'SetInitialScore',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'appliedBidders',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'numberofprojectsapplied',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'scorebyUID',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'scores',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

var Contractaddress = '0xc4768af81423B1F40EC83F47a0000Cfbafbf19B2'

var Mycontract = new web3.eth.Contract(Abi, Contractaddress)

// console.log(Mycontract.methods)
// web3.eth.getBalance(Contractaddress,(err,bal) => {console.log(bal)})

// Functions that doesnt require transactions

async function owner() {
  var result = await Mycontract.methods.owner().call((err, res) => {
    // console.log(res)
    return res
  })
  return result
}

async function renounceOwnership() {
  var result = await Mycontract.methods.renounceOwnership().call((err, res) => {
    // console.log(err)
    return err
  })
  return result
}

// Functions that require the transaction

async function AllBidders(UID) {
  // var daata = Mycontract.methods.AllBidders(UID).encodeABI()
  // signAndSendTransaction(daata)
  if (UID == 0) {
    // console.log("Invalid Input UIDS start from 1")
    return 'Invalid Input UIDS start from 1'
  }
  var result = await Mycontract.methods.AllBidders(UID).call((err, res) => {
    // console.log(res)
    return res
  })
  return result
}

async function AllDetails(UID) {
  if (UID == 0) {
    // console.log("Invalid Input UIDS start from 1")
    return 'Invalid Input UIDS start from 1'
  }
  var result = await Mycontract.methods.AllDetails(UID).call((err, res) => {
    // console.log(res)
    return res
  })
  return result
}

async function Contractnameandid(Name) {
  var result = await Mycontract.methods.Contractnameandid(Name).call((err, res) => {
    if (res == 0) {
      // console.log("No such contract name present please check it properly")
      return 'No such contract name present please check it properly'
    }
    // console.log("Contract Id corresponding to given contract name is",res)
    return res
  })
  return result
}

async function RegisteredBiddersUid(Address) {
  var result = await Mycontract.methods.RegisteredBiddersUid(Address).call()
  return result
}

async function scorebyUID(UID) {
  // Try to check if the given UID exists or not
  var result = await Mycontract.methods.scorebyUID(UID).call((err, res) => {
    // console.log("Score corresponding to given UID is",res)
    return res
  })
  return result
}

// Try to keep track of the number of registered uids in smart contrcat so we can know if the user
// Gave correct uid or not.

async function scores(Address) {
  // Check if the given adress is registered or not
  var result = await Mycontract.methods.scores(Address).call((err, res) => {
    // console.log("Score corresponding to given address is",res)
    return res
  })
  return result
}

async function GetAllContractsApplied(UID) {
  var result = await Mycontract.methods.GetAllContractsApplied(UID).call((err, res) => {
    if (res) {
      // console.log("You have applied for",res,"Contracts")
      return res
    }
    // console.log("You haven't applied for any contracts yet !!")
    return "You haven't applied for any contracts yet !!"
  })
  return result
}

async function numberofprojectsapplied(Address) {
  var result = await Mycontract.methods.numberofprojectsapplied(Address).call((err, res) => {
    // console.log("You have applied for",res,"Contracts")
    return res
  })
  return result
}

// let provider = new HDWalletProvider(interactingAddressPrivateKey,Url);

async function DecrementScore(Address, Decrementscore) {
  var result = await Mycontract.methods
    .DecrementScore(Address, Decrementscore)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

const Incrementscore = async (Address, Incrementscore) => {
  console.log(`Incrementscore Called Successfully 10`)
  var result = await Mycontract.methods
    .IncrementScore(Address, Incrementscore)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

async function IncrementScore(Address, Incrementscore) {
  var result = await Mycontract.methods
    .IncrementScore(Address, Incrementscore)
    .send({
      from: Address,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

async function RegisterDetails(Name, Class, Warrantyperiod) {
  var result = await Mycontract.methods
    .RegisterDetails(Name, Class, Warrantyperiod)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

// RegisterDetails("vicky","d",45).then( () => {
//   console.log("completed registration")
// })

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
  var result = await Mycontract.methods
    .SetDetails(Name, Desc, Class, ContractNumber, Warranty, Days, Budget, Enddate, Reputation)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

async function SetInitialScore(Address, Initialscore) {
  var result = await Mycontract.methods
    .SetInitialScore(Address, Initialscore)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

// SetInitialScore("0x01EC3D74244CAF9e9E4C4CBF02d4004C8257615F",10)
// scores("0x01EC3D74244CAF9e9E4C4CBF02d4004C8257615F")

async function transferOwnership(Address) {
  var result = await Mycontract.methods
    .transferOwnership(Address)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

// transferOwnership("0x01EC3D74244CAF9e9E4C4CBF02d4004C8257615F")
// var temp = owner()
// temp.then((res) => console.log(res))

async function appliedBidders(Address, Index) {
  var result = await Mycontract.methods
    .appliedBidders(Address, Index)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

async function ApplyForContract(UID, Contractnumber, Contractname, Budget, Warranty, Time) {
  var result = await Mycontract.methods
    .ApplyForContract(UID, Contractnumber, Contractname, Budget, Warranty, Time)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return result
}

// Shared wallet smart contract

var Abi2 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_towhom',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_fromwhom',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldamount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newamount',
        type: 'uint256',
      },
    ],
    name: 'allowance_event',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_bywhom',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'current_bal',
        type: 'uint256',
      },
    ],
    name: 'track_balance',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'addallowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'reduceallowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
]

var Contractaddress2 = '0x7d7f759fbF006E9436f200972AB3670c127dFE69'

var Mycontract2 = new web3.eth.Contract(Abi2, Contractaddress2)

async function addallowance(Address, Value) {
  var temp = await Mycontract2.methods
    .addallowance(Address, Value)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return temp
}

async function allowance(Address) {
  var temp = await Mycontract2.methods.allowance(Address).call((err, res) => {
    // console.log("Allowance of corresponding address is",res)
    return res
  })

  return temp
}

async function balance() {
  var temp = await Mycontract2.methods.balance().call((err, res) => {
    // console.log("Balance present in the smart contract is",res)
    return res
  })

  return temp
}

async function owner2() {
  var temp = await Mycontract2.methods.owner().call((err, res) => {
    // console.log("Owners address is",res)
    return res
  })

  return temp
}

async function reduceallowance(Address, Value) {
  var temp = await Mycontract2.methods
    .reduceallowance(Address, Value)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return temp
}

async function transferOwnership2(Address) {
  var temp = await Mycontract2.methods
    .transferOwnership(Address)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return temp
}

async function withdraw(Address, value) {
  var temp = await Mycontract2.methods
    .withdraw(Address, value)
    .send({
      from: interactingAddress,
      gas: 3000000,
    })
    .then((receipt) => {
      return receipt
    })

  return temp
}

// Capturing the evenets from smart contracts

// Mycontract.events.MyEvent({fromBlock : 0}).on('data',event => console.log(event))
// Mycontract2.events.MyEvent({fromBlock : 0}).on('data',event => console.log(event))
export default Incrementscore
