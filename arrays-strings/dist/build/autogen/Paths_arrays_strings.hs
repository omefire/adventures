module Paths_arrays_strings (
    version,
    getBinDir, getLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
catchIO = Exception.catch

version :: Version
version = Version [0,0,1] []
bindir, libdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/omefire/.cabal/bin"
libdir     = "/home/omefire/.cabal/lib/x86_64-linux-ghc-7.10.3/arrays-strings-0.0.1-C7NzKdN1AndBDPGpdZkQZk"
datadir    = "/home/omefire/.cabal/share/x86_64-linux-ghc-7.10.3/arrays-strings-0.0.1"
libexecdir = "/home/omefire/.cabal/libexec"
sysconfdir = "/home/omefire/.cabal/etc"

getBinDir, getLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "arrays_strings_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "arrays_strings_libdir") (\_ -> return libdir)
getDataDir = catchIO (getEnv "arrays_strings_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "arrays_strings_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "arrays_strings_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
