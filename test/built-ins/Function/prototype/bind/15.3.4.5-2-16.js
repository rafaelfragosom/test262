// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-2-16
description: Function.prototype.bind - 'Target' is a function
includes: [runTestCase.js]
---*/

function testcase() {
        function testFunc() {}
        try {
            testFunc.bind();
            return true;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
