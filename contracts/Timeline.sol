// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Timeline {
    uint256 totalTweets;

    constructor() {
        console.log("I spy with my eye a little birdy who is ready to tweet!");
        totalTweets = 0;
    }

    function tweet() public {
        totalTweets += 1;
        console.log("%s has tweeted!", msg.sender);
    }

    function getTotalTweets() public view returns (uint256) {
        console.log("%s tweets have been chirped lmaoo", totalTweets);
        return totalTweets;
    }
}
