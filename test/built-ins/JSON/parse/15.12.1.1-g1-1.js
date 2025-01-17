// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g1-1
description: The JSON lexical grammar treats <TAB> as a whitespace character
includes: [runTestCase.js]
---*/

function testcase() {
  if (JSON.parse('\t1234')!==1234) return false; // <TAB> should be ignored
  try {
    JSON.parse('12\t34'); // <TAB> should produce a syntax error as whitespace results in two tokens
    }
  catch (e) {
      return true; // treat any exception as a pass, other tests ensure that JSON.parse throws SyntaxError exceptions
      }
  }
runTestCase(testcase);
