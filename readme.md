# SOC Bootcamp Warm-up Project

Create a copy of the Airbnb mobile site and break down the design into manageable sections and components. Focus on the HTML and CSS, and don't worry about the JavaScript.

Check out the link below to preview the site hosted on GitHub pages. Optimised for mobile only.

https://peterston-e.github.io/SOC-precourse-airbnb/

## Installation.

To install the project, simply download the zip file or clone; all modules and dependencies should already be included. However, if I have removed the node_modules folder in the future, you may need to run the npm script below.

`npm install`

To run the build command using post css use:

`npm run postcss` for single build.
`npm run postcss:watch` to continuously watch css.

## Included dependencies and tech.

**Languages**

The site uses one small JS script to make the bottom popup menu appear and disappear when a scroll is detected. Otherwise, the site is built entirely on HTML and CSS. No buttons, search, or menus will work.

**Postcss**

After reading the best practice guide, I decided to use npm as a package manager to install postcss to do several jobs, such as:

- **Autoprefixer** to automatically add prefixes to CSS.
- **Postcss import** allowed me to break down my CSS into smaller, more manageable files, import them from various directories and build a single distribution style sheet.
- **Postcss CLI** allows for a command line interface to instruct postcss on how to work.

**Stylelint**

Again, after reading the best practice CSS guide, I decided to use Stylelint to check the CSS for any errors. It revealed quite a few issues, which have now been resolved.

## Improvements

I want to get some elements working with JS before leaving this project alone. The main one is the image gallery carousel.

The other elements, like search, filter, login, and favourites, don't need fixing unless I want to build out the site further, which I don't at this time.

The only other thing that would be nice to fix maybe would be to adjust the card grid to hold multiple elements when expanded to larger screens.

## Contributions

If you want to fork this project and make a pull request, that is fine. At the time of writing this ReadMe file, I didn't really know what I was doing with open source, but I would imagine it would be good practice for both sides.

This project is only meant for educational purposes, so feel free to do what you like with the code.
