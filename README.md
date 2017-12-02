### Config
-----

tip: Works like a charm with Cloud9 IDE!

```bash
$ npm install -g gulp
$ npm install
$ gulp
```  

### Details
-----

**gulpfile.js** dependecies content:

- **gulp-sass**  
    Updates the final css file (css/main.min.css) whenever a .scss file is modified
- **gulp-autoprefixer**  
    Apply vendors prefixes (ex: -webkit, -moz, -o, etc)
- **gulp-cssmin + gulp-rename**  
    Minify and renames the final css file (css/main.min.css)
- **gulp-imagemin**  
    Minify all the images inside res folder
- **browser-sync**  
    Update the preview whenever .html, .js or .scss file is changed

### Folder Structure
-----

This boilerplate folder structure is sorted with the **feature mindset**, for working with modules.  
Inspired in [John Papa's Angular Growth Structure](https://johnpapa.net/angular-growth-structure/) with some modifications.