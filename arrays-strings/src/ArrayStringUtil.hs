module ArrayStringUtil (
  isUnique,
  checkPermutation
) where

import qualified Data.Map as Map
import Data.Maybe


--for(int i=0; i < str.size; i++) {
--   if(Map.lookup(str[i])) {
--     return false;
--   }
--   Map.insert(str[i], 1);
--}
--return true;

isUnique :: String -> Bool
isUnique [] = True
isUnique str = isUniqHelper str (Map.fromList [])
                 where isUniqHelper :: String -> Map.Map Char Int -> Bool
                       isUniqHelper (first_char:remaining_chars) map =
                         case Map.lookup first_char map of
                           Just _ -> False
                           Nothing -> let new_map = Map.insert first_char 1 map in
                             isUniqHelper remaining_chars new_map


checkPermutation :: String -> String -> Bool
checkPermutation s1 s2 = True

