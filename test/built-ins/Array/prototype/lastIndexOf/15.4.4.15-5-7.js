// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-7
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is 0)
includes: [runTestCase.js]
---*/

function testcase() {

        return [0, 100].lastIndexOf(100, 0) === -1 && // verify fromIndex is not more than 0
            [200, 0].lastIndexOf(200, 0) === 0; // verify fromIndex is not less than 0
    }
runTestCase(testcase);
