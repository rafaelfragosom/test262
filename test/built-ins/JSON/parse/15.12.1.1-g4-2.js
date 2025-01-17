// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g4-2
description: >
    The JSON lexical grammar does not allow a JSONStringCharacter to
    be any of the Unicode characters U+0008 thru U+000F
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    JSON.parse('"\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f"'); // invalid string characters should produce a syntax error
    }
  catch (e) {
      return true; // treat any exception as a pass, other tests ensure that JSON.parse throws SyntaxError exceptions
      }
  }
runTestCase(testcase);
