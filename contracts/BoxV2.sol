// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "./Box.sol";

contract BoxV2 is Box {
    function increment() public {
        store(retrieve() + 1);
    }
}
