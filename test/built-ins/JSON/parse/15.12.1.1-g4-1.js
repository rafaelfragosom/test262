// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g4-1
description: >
    The JSON lexical grammar does not allow a JSONStringCharacter to
    be any of the Unicode characters U+0000 thru U+0007
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    JSON.parse('"\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007"'); // invalid string characters should produce a syntax error
    }
  catch (e) {
      return true; // treat any exception as a pass, other tests ensure that JSON.parse throws SyntaxError exceptions
      }
  }
runTestCase(testcase);
