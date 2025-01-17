// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-7-10
description: Array.prototype.reduceRight - 'initialValue' is present
includes: [runTestCase.js]
---*/

function testcase() {

        var str = "initialValue is present";
        return str === [].reduceRight(function () { }, str);
    }
runTestCase(testcase);
