// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-1
description: JSON.stringify(undefined) returns undefined
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify(undefined) === undefined;
  }
runTestCase(testcase);
