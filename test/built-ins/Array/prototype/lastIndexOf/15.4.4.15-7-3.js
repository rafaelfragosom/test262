// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-7-3
description: >
    Array.prototype.lastIndexOf returns -1 when abs('fromIndex') is
    length of array - 1
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3, 4].lastIndexOf(3, -3) === -1;
    }
runTestCase(testcase);
