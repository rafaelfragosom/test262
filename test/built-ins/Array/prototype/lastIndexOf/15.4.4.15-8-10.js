// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    note that prior to the finally ES5 draft SameValue was used for comparisions
    and hence NaNs could be found using lastIndexOf *
es5id: 15.4.4.15-8-10
description: Array.prototype.lastIndexOf must return correct index (NaN)
includes: [runTestCase.js]
---*/

function testcase() {
  var _NaN = NaN;
  var a = new Array("NaN",_NaN,NaN, undefined,0,false,null,{toString:function (){return NaN}},"false");
  if (a.lastIndexOf(NaN) === -1)  // NaN matches nothing, not even itself
  {
    return true;
  }
 }
runTestCase(testcase);
