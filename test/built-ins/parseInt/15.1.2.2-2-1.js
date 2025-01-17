// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.2.2-2-1
description: >
    pareseInt - 'S' is the empty string when inputString does not
    contain any such characters
includes: [runTestCase.js]
---*/

function testcase() {
        return isNaN(parseInt("")) && parseInt("") !== parseInt("");
    }
runTestCase(testcase);
