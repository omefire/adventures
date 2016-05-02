module Main(main) where

import Test.HUnit
import Test.Framework
import Test.Framework.Providers.HUnit
import System.Exit (exitFailure)

import ArrayStringUtil

main :: IO()
main = defaultMainWithOpts [
  testStringHasNoUniqueCharacters,
  testStringHasUniqueCharacters
  ] mempty


testStringHasNoUniqueCharacters = testCase "testStringHasNoUniqueCharacters" $ do
  assertEqual "isUnique should return FALSE if string has duplicate characters" False (isUnique "Bakwerii")

testStringHasUniqueCharacters = testCase "testStringHasUniqueCharacters" $ do
  assertEqual "isUnique should return TRUE if string has unique characters" True (isUnique "Yaounde")
  
