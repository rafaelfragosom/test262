// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-7-1
description: >
    Array.prototype.reduceRight returns initialValue if 'length' is 0
    and initialValue is present (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  function cb(){}
  
  try {
    if([].reduceRight(cb,1) === 1)
      return true;
  }
  catch (e) {  }  
 }
runTestCase(testcase);
