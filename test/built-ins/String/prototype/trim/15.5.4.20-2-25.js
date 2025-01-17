// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-25
description: >
    String.prototype.trim - argument 'this' is a decimal that converts
    to a string (value is 123.456)
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call(123.456) === "123.456";
    }
runTestCase(testcase);
