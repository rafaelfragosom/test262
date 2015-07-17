// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g2-1
description: JSONStrings can be written using double quotes
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.parse('"abc"')==="abc"; 
  }
runTestCase(testcase);
