// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-4-11
description: >
    Array.prototype.reduceRight - the exception is not thrown if
    exception was thrown by step 3
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, 1: 12 };

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    toString: function () {
                        throw new SyntaxError();
                    }
                };
            },
            configurable: true
        });

        try {
            Array.prototype.reduceRight.call(obj, undefined);
            return false;
        } catch (ex) {
            return !(ex instanceof TypeError);
        }
    }
runTestCase(testcase);
