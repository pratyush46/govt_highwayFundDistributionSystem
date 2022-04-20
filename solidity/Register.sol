// SPDX-License-Identifier: MITX

pragma solidity ^0.8.11;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract Register is Ownable{

    struct Details{
        string Name;
        string Class;
        uint WarrantyPeriod;
        uint Uid;
        address Bidderaddress;
    }

    uint uids;

    mapping(uint => Details) public AllBidders;
    mapping(address => uint) public RegisteredBiddersUid;

    event BidderDetails(Details indexed _ofBidder);

    function renounceOwnership() public view override onlyOwner{
        revert("Functionality not supported for this smart contract");
    }

    modifier checkifalreadyregistered(){
        require(RegisteredBiddersUid[msg.sender] == 0 , "You are already registered" );
        _;
    }

    modifier checkifnotregistered(address _bidderaddress){
        require(RegisteredBiddersUid[_bidderaddress] !=0 , "The given address is not registerd");
        _;
    }

    function RegisterDetails(string memory Name,string memory Class,uint WarrantyPeriod) public checkifalreadyregistered returns(uint){
        uids += 1;
        uint Uid = uids;
        address Bidderaddress = msg.sender;
        Details memory BidderDetailss = Details(Name,Class,WarrantyPeriod,Uid,Bidderaddress);
        AllBidders[Uid] = BidderDetailss;
        RegisteredBiddersUid[msg.sender] = Uid;
        emit BidderDetails(BidderDetailss);
        return Uid;
    }

}
