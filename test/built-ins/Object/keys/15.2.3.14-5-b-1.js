// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-b-1
description: Object.keys - Verify that 'index' of returned array is ascend by 1
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: 100, prop2: 200, prop3: 300 };

        var array = Object.keys(obj);

        var idx = 0;
        for (var index in array) {
            if (array.hasOwnProperty(index)) {
                if (index !== idx.toString()) {
                    return false;
                }
                idx++;
            }
        }

        return true;
    }
runTestCase(testcase);
