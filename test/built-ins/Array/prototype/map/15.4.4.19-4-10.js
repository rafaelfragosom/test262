// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-10
description: >
    Array.prototype.map - the exception is not thrown if exception was
    thrown by step 2
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, 1: 12 };

        Object.defineProperty(obj, "length", {
            get: function () {
                throw new SyntaxError();
            },
            configurable: true
        });

        try {
            Array.prototype.map.call(obj, undefined);
            return false;
        } catch (ex) {
            return !(ex instanceof TypeError);
        }
    }
runTestCase(testcase);
