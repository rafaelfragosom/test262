// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-7-s
description: >
    Function constructor call from strict code with formal parameter
    named arguments does not throws SyntaxError if function body is
    not strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
   try {
     Function('arguments', 'return;');
     return true;
	 
   } catch (e) {
     return false;
   }
  }
runTestCase(testcase);
