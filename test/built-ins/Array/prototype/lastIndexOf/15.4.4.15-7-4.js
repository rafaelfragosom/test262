// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-7-4
description: >
    Array.prototype.lastIndexOf returns -1 when abs('fromIndex') is
    length of array
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3, 4].lastIndexOf(2, -4) === -1;
    }
runTestCase(testcase);
