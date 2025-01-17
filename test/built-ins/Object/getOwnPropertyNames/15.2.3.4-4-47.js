// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-47
description: >
    Object.getOwnPropertyNames - own data property of Array object 'O'
    is pushed into the returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [0, 1, 2];
        arr.ownProperty = "ownArray";

        var result = Object.getOwnPropertyNames(arr);

        for (var p in result) {
            if (result[p] === "ownProperty") {
                return true;
            }
        }

        return false;
    }
runTestCase(testcase);
