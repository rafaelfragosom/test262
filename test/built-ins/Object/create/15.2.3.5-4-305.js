// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-305
description: >
    Object.create defines a data property when one property in
    'Properties' is generic descriptor (8.12.9 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            var newObj = Object.create({}, {
                prop: {
                    enumerable: true
                }
            });
            return newObj.hasOwnProperty("prop");
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
