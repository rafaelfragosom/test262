// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-27
description: >
    Array.prototype.lastIndexOf applied to Arguments object which
    implements its own property get method (number of arguments is
    greater than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var func = function (a, b) {
            return 2 === Array.prototype.lastIndexOf.call(arguments, arguments[0]) &&
                3 === Array.prototype.lastIndexOf.call(arguments, arguments[3]) &&
                -1 === Array.prototype.lastIndexOf.call(arguments, arguments[4]);
        };

        return func(0, arguments, 0, Object.prototype);
    }
runTestCase(testcase);
