// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-ii-9
description: >
    Array.prototype.indexOf - both array element and search element
    are String, and they have exactly the same sequence of characters
includes: [runTestCase.js]
---*/

function testcase() {

        return ["", "ab", "bca", "abc"].indexOf("abc") === 3;
    }
runTestCase(testcase);
