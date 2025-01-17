// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-2
description: Array.prototype.lastIndexOf when fromIndex is floating point number
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,1);
  if (a.lastIndexOf(2,1.49) === 1 &&    // 1.49 resolves to 1
      a.lastIndexOf(2,0.51) === -1 &&    // 0.51 resolves to 0
      a.lastIndexOf(1,0.51) === 0){      // 0.51 resolves to 0
    return true;
  }
 }
runTestCase(testcase);
