// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-18
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 0.000001)
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call(0.000001) === "0.000001";
    }
runTestCase(testcase);
