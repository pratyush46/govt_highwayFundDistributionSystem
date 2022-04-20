//SPDX-License-Identifier: MITX

pragma solidity ^0.8.11;

// import "./Register.sol";
import "./Announce.sol";
import "./control.sol";

contract Bidder is Announce,Control{

    mapping(address => uint[]) public appliedBidders;
    mapping(address => uint) public numberofprojectsapplied;


    modifier checkcontractnumber(uint ContractNumber,string memory ContractName){
        require(Contractnameandid[ContractName] == ContractNumber,"Please check contract number and contract name");
        require(ContractNumber != 0,"Please check contract number and contract name");
        _;
    }

    modifier checkconstraints(uint Budget,uint warranty,uint time,uint UID,uint ContractNumber){
        require(Budget <= AllDetails[ContractNumber].Budget,"Your budget exceeds the specified limit please reduce budget and try again !!");
        require(warranty >= AllDetails[ContractNumber].Warranty,"The warranty you have specified is not enough please increase warranty period and try again !!");
        require(time <= AllDetails[ContractNumber].Days,"You are taking longer than expected to complete the project please reduce the time taken to complete the project and reapply !!");
        require(AllDetails[ContractNumber].reputation <= scorebyUID[UID],"Your reputation is not enough to apply for this project !!");
        _;
    }

    modifier checkifUIDiscorrect(address _bidderaddress,uint Uid){
        require(RegisteredBiddersUid[_bidderaddress] == Uid,"Check your Uid or apply for project with adress used while getting UID");
        _;
    }

    function ApplyForContract(uint UID,uint ContractNumber,string memory ContractName,uint Budget,uint warranty,uint Time) public checkifnotregistered(msg.sender) checkifUIDiscorrect(msg.sender,UID) checkcontractnumber(ContractNumber,ContractName) checkconstraints(Budget,warranty,Time,UID,ContractNumber){
        numberofprojectsapplied[msg.sender] += 1;
        appliedBidders[msg.sender].push(ContractNumber);
    }

    function GetAllContractsApplied(uint UID) public view checkifnotregistered(msg.sender) checkifUIDiscorrect(msg.sender,UID) returns(uint[] memory){
        return appliedBidders[msg.sender];
    }

}

