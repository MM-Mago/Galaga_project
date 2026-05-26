@echo off
REM Galaga Project Compilation Script
REM Requires Maven to be installed and in PATH

echo.
echo ========================================
echo   Galaga Project - Maven Build Script
echo ========================================
echo.

REM Check if Maven is available
where mvn >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Maven is not found in PATH
    echo.
    echo To install Maven:
    echo 1. Download from: https://maven.apache.org/download.cgi
    echo 2. Extract to a folder (e.g., C:\Maven)
    echo 3. Add the bin folder to your PATH environment variable
    echo    OR set MAVEN_HOME and add %%MAVEN_HOME%%\bin to PATH
    echo.
    pause
    exit /b 1
)

echo Maven found. Running build...
echo.

REM Clean and package
mvn clean package -DskipTests

if %errorlevel% equ 0 (
    echo.
    echo BUILD SUCCESSFUL!
    echo.
    echo Generated JavaScript: web/js/galaga.js
    echo You can now open index.html in your browser.
    echo.
) else (
    echo.
    echo BUILD FAILED!
    echo Please check the error messages above.
    echo.
)

pause
