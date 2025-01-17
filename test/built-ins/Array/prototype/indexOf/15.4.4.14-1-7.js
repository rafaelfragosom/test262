// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-7
description: Array.prototype.indexOf applied to string primitive
includes: [runTestCase.js]
---*/

function testcase() {

        return Array.prototype.indexOf.call("abc", "b") === 1;
    }
runTestCase(testcase);
