# JGalaga Web Build & Fix Guide

## Problem
You're seeing a black screen when opening `index.html` in your browser. The issue is related to sprite image loading and the compiled JavaScript.

## Solution: 3 Steps

### Step 1: Install Maven
Your project uses **TeaVM** to compile Java to JavaScript, which requires Maven.

#### Option A: Automatic Installation (Windows)
1. Download Maven from: https://maven.apache.org/download.cgi
   - Get the **Binary zip archive** (e.g., `apache-maven-3.9.7-bin.zip`)
2. Extract it to a location like `C:\Maven`
3. Add Maven to your PATH:
   - Open Environment Variables (press `Win + X`, search "environment")
   - Edit System Environment Variables → Environment Variables
   - Create a new System variable: `MAVEN_HOME = C:\Maven` (or your path)
   - Edit PATH: add `%MAVEN_HOME%\bin` to the end
   - Restart your terminal/IDE

#### Verify Installation
```bash
mvn -v
```
Should show version 3.9.x or later

### Step 2: Compile the Project

Run one of these commands from the project root (`c:\JGalaga`):

**Option A: Using the compile script**
```bash
compile.bat
```

**Option B: Manual Maven command**
```bash
mvn clean package -DskipTests
```

This will:
1. Clean previous builds
2. Resolve TeaVM and other dependencies from Maven Central
3. Compile Java code with the fixes
4. Generate `web/js/galaga.js` (the browser-runnable version)

### Step 3: Test Your Game

1. Open `index.html` in your browser
2. Open the browser's Developer Console (F12)
3. Look for:
   - Image load confirmation messages
   - Any error messages in the console
   - The game canvas should display (not black screen)

## What Was Fixed

The following issues in your source code have been corrected:

### 1. **WebSpriteLibrary.java**
- ✅ Added error event handlers for image loading failures
- ✅ Game now starts even if some images fail to load (with graceful degradation)
- ✅ Added console error logging for diagnostics

### 2. **WebBackgroundPainter.java**
- ✅ Added load event tracking for background frame images
- ✅ Images are now checked before drawing to canvas
- ✅ Added fallback black background if images aren't ready
- ✅ Added error logging for failed image loads

### 3. **WebSpriteLibrary clipping methods**
- ✅ Added `isImageReady()` check before drawing
- ✅ Prevents errors when trying to clip unloaded images
- ✅ Returns blank canvases as placeholders if source images aren't ready

### 4. **index.html**
- ✅ Added comprehensive debugging and logging
- ✅ Image loading test suite
- ✅ Better error reporting in console

## Troubleshooting

### Maven Installation Issues

If you can't download Maven due to firewall/proxy:
1. Download Maven manually from: https://maven.apache.org/download.cgi
2. Place it on a USB drive or cloud storage
3. Extract locally
4. Set MAVEN_HOME and add to PATH as above

### Build Fails with "Cannot find org.teavm"

- **Cause**: Internet connection issue or Maven Central Repository offline
- **Solution**: 
  - Check your internet connection
  - Try again: `mvn clean package -DskipTests`
  - If persistent, check your company proxy settings

### Game Still Shows Black Screen After Building

1. Open browser console (F12)
2. Check for error messages
3. Look for image loading messages (should see "✓ Image loaded" for each PNG)
4. If images fail to load:
   - Check that `/web/js/sprites/` folder exists with PNG files
   - Ensure your HTML server has permission to serve these files
   - If using file:// protocol (no server), some browsers may block image loading

### Testing Without a Web Server

You can serve files locally without installing a server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Then visit: http://localhost:8000/index.html
```

## File Changes Summary

**Modified files:**
- `src/view/WebSpriteLibrary.java` - Image loading and error handling
- `src/view/WebBackgroundPainter.java` - Background image loading improvements
- `index.html` - Added debugging and diagnostics

**New files:**
- `compile.bat` - Helper script for building the project

## Next Steps

1. Install Maven (Step 1 above)
2. Run the compile script (Step 2)
3. Open `index.html` and enjoy!

If you encounter any issues, check the browser console (F12) for detailed error messages.
