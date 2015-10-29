## Website Performance Optimization portfolio project

To run, access index.html in a web browser.
You might find it helpful to run this using a local server and, optionally, a tunnel.
Assuming a Linux-based environment:
0. Download and install ngrok
1. Clone the repo
2. cd to the repo and "python -m SimpleHTTPServer 8080" (or whatever port you prefer)
3. In another terminal, "ngrok http 8080" (or whatever port you chose above)
4. Open the "Forwarding" address from ngrok in whatever browser you prefer

####Part 1: Optimize PageSpeed Insights score for index.html

1. Inlined web fonts
2. Minified and inlined style.css
3. Minified print.css, put it behind a print media query
4. Asynced google analytics script
5. Minified and inlined perfmatters.js
6. Moved GA customized code to footer
7. Resized and optimized pizzeria.jpg, optimized all other images
8. Inlined profilepic.jpg

####Part 2: Optimize Frames per Second in pizza.html

### My pizza.html optimizations

1. Minified and inlined style.css
2. Removed unused selectors from, minified, and inlined bootstrap-grid.css
3. Resized and optimized pizzeria.jpg, optimized pizza.png
4. Promoted background pizzas to separate layers using will-change:transform to reduce the amount of painting work. Used transform:translateZ(0) and backface-visibility:hidden for compatibility with browsers that don't support will-change.
5. main.js: Used getElementById() or getElementsByClassName() instead of querySelector() or querySelectorAll()
6. main.js: Made as many variables as possible outside of loops instead of inside them, to avoid duplicating work and layout thrashing
7. main.js: Reduced the number of background pizzas appended to pizzasDiv, as 100+ will not show up on the screen anyway
8. main.js: Used ticking rAF for animating background pizzas instead of doing it for every scroll event, as scroll events frequently fire much more than every 16ms
9. main.js: Implemented 'use strict'; throughout
10. Minified main.js

