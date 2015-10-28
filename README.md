## Website Performance Optimization portfolio project

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
4. Promoted background pizzas to separate layers using will-change:transform to reduce the amount of painting work
5. main.js: Used getElementById() or getElementsByClassName() instead of querySelector() or querySelectorAll()
6. main.js: Made as many variables as possible outside of loops instead of inside them, to avoid duplicating work and layout thrashing
7. main.js: Reduced the number of background pizzas appended to pizzasDiv, as 100+ will not show up on the screen anyway
8. main.js: Used ticking rAF for animating background pizzas instead of doing it for every scroll event, as scroll events frequently fire much more than every 16ms
9. Minified main.js
