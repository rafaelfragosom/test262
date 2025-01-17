// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-306
description: >
    Object.create - [[Value]] is set as undefined if it is absent in
    data descriptor of one property in 'Properties' (8.12.9 step 4.a.i)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            var newObj = Object.create({}, {
                prop: {
                    writable: true,
                    configurable: true,
                    enumerable: true
                }
            });
            return newObj.hasOwnProperty("prop") && newObj.prop === undefined;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
