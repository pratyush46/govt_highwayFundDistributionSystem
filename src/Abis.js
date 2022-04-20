var abi = [
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
]

var abi2 = [
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

export default abi
export { abi2 }
