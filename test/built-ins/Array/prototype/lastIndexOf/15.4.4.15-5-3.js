// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-3
description: Array.prototype.lastIndexOf when fromIndex is boolean
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,1);
  if (a.lastIndexOf(2,true) === 1 &&        // true resolves to 1
     a.lastIndexOf(2,false) === -1 ) {      // false resolves to 0
    return true;
  }
 }
runTestCase(testcase);
