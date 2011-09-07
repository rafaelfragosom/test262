// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion
 *
 * @id: S7.9_A6.1_T12;
 * @section: 7.9, 12.6.3;
 * @description: for (false \n semicolon false \n semicolon \n);
 */

//CHECK#1
for(false
    ;false
    ;
) {
  break;
}
