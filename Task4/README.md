# Responsive HTML Page Guide

This project involves making a static HTML page responsive for smaller screens like tablets and mobiles.

## 🔧 Steps to Make It Responsive

1. **Open in VS Code**  
   Start by opening the HTML file in Visual Studio Code.

2. **Identify Fixed Width Elements**  
   Look for elements with hardcoded widths (like `width: 800px`) or large images that may break on small screens.

3. **Add Media Queries**  
   Use media queries for `max-width: 768px` to apply styles for smaller screens.

4. **Adjust Layout**  
   - Stack columns vertically instead of side-by-side.
   - Reduce font sizes for better fit on mobile screens.

5. **Fix Navigation Menu**  
   Make the nav menu collapse or display vertically when the screen width is small.

6. **Test Using DevTools**  
   Use Chrome DevTools' device toolbar to simulate different screen sizes.

7. **Fix Overflow Issues**  
   Check for and fix any elements that cause horizontal scrolling or overflow.

8. **Make Images Responsive**  
   Ensure all images scale properly using:
   ```css
   img {
     max-width: 100%;
     height: auto;
   }
