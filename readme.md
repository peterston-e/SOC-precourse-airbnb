# SOC Bootcamp Warm-up Project

Create a copy of the Airbnb mobile site, break down the design into manageable sections and components.
Focus on the HTML and CSS and don't worry about the JavaScript.

Checkout the link below to preview the site hosted on github pages. Optimised for mobile only.

https://peterston-e.github.io/SOC-precourse-airbnb/

## Installation.

To install the project simply download the zip file or clone and all modules and dependencies should already be included. However if in the future I have removed the node_modules folder you may need to run the npm script below.

`npm install`

To run the build command using post css use:

`npm run postcss` for single build.
`npm run postcss:watch` to continuously watch css.

## Included dependencies and tech.

**Languages**

The site does use one small JS script to make the bottom popup menu appear and disappear when scroll is detected. Otherwise, the site is built entirely on HTML and CSS. No buttons, search or menus will work.

**Postcss**

After reading the best practice guide, i decided to use npm as a package manger to install postcss to do a number of jobs such as:

- **Autoprefixer** to automatically add prefixes to CSS.
- **Postcss import** to allow me to break down my css into smaller more manageable files and import them from various directories and build a single distribution style sheet.
- **Postcss CLI** to allow for a command line interface to instruct post css how to work.

**Stylelint**

Again after reading the best practice css guide, I decided to use Stylelint to check the css for any errors. It revealed quite a few issues which have now been resolved.

## Improvements

I would like to get some elements working with JS before leaving this project alone. The main one being the image gallery carousel.

The other elements like search, filter, login, and favourites don't really need fixing unless i want to build out the site further, which I don't at this time.

The only other thing that would be nice to maybe fix would be to adjust the card grid to hold multiple elements when expanded to larger screens.

## Contributions

If you do want to fork this project and make a pull request, that is fine. At the time of writing this readme file, i don't really know what I'm doing with open source, but it will be good practice for both sides I would imagine.

This project is only meant for education purposes so feel free to do what you like with the code.
