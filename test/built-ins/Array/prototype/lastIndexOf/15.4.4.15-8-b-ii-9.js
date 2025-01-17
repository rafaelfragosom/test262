// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-ii-9
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are strings, and they have exactly the same sequence of
    characters
includes: [runTestCase.js]
---*/

function testcase() {

        return ["abc", "ab", "bca", ""].lastIndexOf("abc") === 0;
    }
runTestCase(testcase);
