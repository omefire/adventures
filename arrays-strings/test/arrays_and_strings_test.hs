module ArrayStringUtilTest where

import ArrayStringUtil
import Test.HUnit

main = runTestTT testStringHasNoUniqueCharacters

testStringHasNoUniqueCharacters = TestCase $ assertEqual
  "IsUnique should return FALSE if string has duplicate characters" False (IsUnique "Bakweri")

  
