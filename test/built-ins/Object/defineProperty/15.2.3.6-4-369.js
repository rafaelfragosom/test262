// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-369
description: >
    ES5 Attributes - property ([[Writable]] is false, [[Enumerable]]
    is false, [[Configurable]] is true) is non-enumerable
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: false,
            enumerable: false,
            configurable: true
        });
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");
        for (var p in obj) {
            if (p === "prop") {
                return false;
            }
        }
        return propertyDefineCorrect && desc.enumerable === false;
    }
runTestCase(testcase);
