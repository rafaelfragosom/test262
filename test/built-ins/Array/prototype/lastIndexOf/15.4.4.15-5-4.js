// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-4
description: Array.prototype.lastIndexOf when fromIndex is undefined
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,1);
  if (a.lastIndexOf(2,undefined) === -1 &&
      a.lastIndexOf(1,undefined) === 0  &&
      a.lastIndexOf(1) === 2)   {    // undefined resolves to 0, no second argument resolves to len
    return true;
  }
 }
runTestCase(testcase);
