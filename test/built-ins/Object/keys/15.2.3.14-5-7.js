// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-7
description: >
    Object.keys - inherted enumerable data property that is
    over-ridden by non-enumerable own data property is not defined in
    returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "prop", {
            value: 1003,
            enumerable: true,
            configurable: true
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();
        Object.defineProperty(obj, "prop", {
            value: 1004,
            enumerable: false,
            configurable: true
        });

        var arr = Object.keys(obj);

        for (var p in arr) {
            if (arr[p] === "prop") {
                return false;
            }
        }

        return true;
    }
runTestCase(testcase);
