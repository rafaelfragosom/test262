// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-iii-1
description: >
    Array.prototype.filter - getOwnPropertyDescriptor(all true) of
    returned array element
includes: [runTestCase.js]
---*/

function testcase() {
  
  function callbackfn(val, idx, obj){
    if(val % 2)
      return true; 
    else
      return false;
  }
  var srcArr = [0,1,2,3,4];
  var resArr = srcArr.filter(callbackfn);
  if (resArr.length > 0){
     var desc = Object.getOwnPropertyDescriptor(resArr, 1) 
     if(desc.value === 3 &&        //srcArr[1] = true
       desc.writable === true &&
       desc.enumerable === true &&
       desc.configurable === true){
         return true;
    }
  }
 }
runTestCase(testcase);
