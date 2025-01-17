// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-7
description: JSON.stringify correctly works on top level Number objects.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify(new Number(42)) === '42';
  }
runTestCase(testcase);
