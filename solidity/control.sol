//SPDX-License-Identifier: MITX

pragma solidity ^0.8.11;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "./Register.sol";

contract Control is Register{

    mapping(address=>int) public scores;
    mapping(uint => int) public scorebyUID;

    modifier checkinitialscore(address _bidderaddress){
        require(scores[_bidderaddress]==0,"Score has already been set for this bidder");
        _;
    }

    modifier checkifscoreisset(address _bidderaddress) {
        require(scores[_bidderaddress]!=0,"Score for this bidder is not set yet please check the address and try again");
        _;
    }

    function SetInitialScore(address _bidderaddress,int _initialscore) public onlyOwner checkifnotregistered(_bidderaddress) checkinitialscore(_bidderaddress){
        scores[_bidderaddress] = _initialscore;
        scorebyUID[RegisteredBiddersUid[_bidderaddress]] = _initialscore;
    }

    function IncrementScore(address _bidderaddress,int _scoreincrement) public onlyOwner checkifnotregistered(_bidderaddress) checkifscoreisset(_bidderaddress) returns(int){
        scores[_bidderaddress] += _scoreincrement;
        scorebyUID[RegisteredBiddersUid[_bidderaddress]] += _scoreincrement;
        return scores[_bidderaddress];
    }

    function DecrementScore(address _bidderaddress,int _scoredecrement) public onlyOwner checkifnotregistered(_bidderaddress) checkifscoreisset(_bidderaddress) returns(int){
        scores[_bidderaddress] -= _scoredecrement;
        scorebyUID[RegisteredBiddersUid[_bidderaddress]] -= _scoredecrement;
        return scores[_bidderaddress];
    }

}

