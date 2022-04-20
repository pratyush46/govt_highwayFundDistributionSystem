//SPDX-License-Identifier: MITX

pragma solidity ^0.8.11;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "./Register.sol";

contract Announce is Register{

    struct CDetails{
        string ContractName;
        string Description;
        string Class;
        uint ContractNumber;
        uint Warranty;
        uint Days; // Within how many days the project should be submitted
        uint Budget;
        uint EndDate; // Enddate for applying or bidding
        int reputation;
    }

    mapping(uint => CDetails) public AllDetails;
    mapping(string => uint) public Contractnameandid;


    event ContractDetails(CDetails indexed ContractDetailss);

    function SetDetails(string memory ContractName,string memory Description,string memory Class,uint ContractNumber,uint Warranty,uint Days,uint Budget,uint EndDate,int reputation) public onlyOwner{
        CDetails memory ContractDetailsss = CDetails(ContractName,Description,Class,ContractNumber,Warranty,Days,Budget,EndDate,reputation);
        AllDetails[ContractNumber] = ContractDetailsss;
        Contractnameandid[ContractName] = ContractNumber;
        emit ContractDetails(ContractDetailsss);
    }

    // function renounceOwnership() public view override onlyOwner{
    //     revert("Functionality not supported for this smart contract");
    // }

}

