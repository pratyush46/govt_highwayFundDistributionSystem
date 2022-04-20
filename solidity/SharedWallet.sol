// SPDX-License-Identifier: MITX

// Smart contract where the government can manage funds allocated to bidders

pragma solidity ^0.8.11;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


contract allowance_contract is Ownable{

    mapping(address => uint) public allowance;
    event allowance_event(address _towhom,address _fromwhom,uint oldamount,uint newamount);


        function isOwner() internal view returns(bool){
            return owner() == msg.sender;
        }

        function renounceOwnership() public view override onlyOwner{
            revert("Functionality not supported for this smart contract");
        }

        function addallowance(address _to,uint _amount) public onlyOwner{
            emit allowance_event(_to,msg.sender,allowance[_to],allowance[_to]+_amount);
            allowance[_to] = _amount;
        }

        modifier checkallowance(address _to , uint amount) {
            require(address(this).balance >= amount , "Insuffecient funds in smart contract !!");
            assert(isOwner() || msg.sender == _to);
            require(isOwner() || allowance[_to] <= amount , "You are not allowed !!");
            _;
        }

        function reduceallowance(address _to,uint _amount) public onlyOwner{
            emit allowance_event(_to,msg.sender,allowance[_to],allowance[_to]-_amount);
            allowance[_to] -= _amount;
        }

}

contract SharedWallet is allowance_contract{
    uint public balance;
    event track_balance(address indexed _bywhom,uint current_bal);

    receive() external payable {
        balance += msg.value;
        emit track_balance(msg.sender,balance);
    }

    function withdraw(address payable _to,uint amount) public checkallowance(_to,amount){
        balance -= amount;
        if(!isOwner()){
        allowance[_to] -= amount;
        }
        _to.transfer(amount);
        emit track_balance(msg.sender,balance);
    }
}

