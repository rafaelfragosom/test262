// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-2
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        return [true, true, true].indexOf(true) === 0 &&
            [false, true, true].indexOf(true) === 1 &&
            [false, false, true].indexOf(true) === 2;
    }
runTestCase(testcase);
