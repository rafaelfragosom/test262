// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-6-b-2
description: >
    JSON.stringify treats numeric space arguments less than 1 (0)the
    same as emptry string space argument.
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {a1: {b1: [1,2,3,4], b2: {c1: 1, c2: 2}},a2: 'a2'};
  return JSON.stringify(obj,null, 0)=== JSON.stringify(obj);  /* emptry string should be same as no space arg */
  }
runTestCase(testcase);
