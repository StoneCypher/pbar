# pbar
Tiny progress bar widget in css3 and js es6 / es2015.  Designed for ease of use.

Add to your site with two lines of code:

`ES5`
```html
<script defer src="pbar.es5.min.js" type="text/javascript"></script>
<script defer type="text/javascript">var pb = new require('pbar').pbar;</script>
```

`ES6`
```html
<script defer src="pbar.js" type="text/javascript"></script>
<script defer type="text/javascript">import {pbar} from './pbar.js';</script>
```

No production dependencies, assets, globals, or primitive decoration.  Source is 2.1k.  Minified ES5 with `require()` packaging is 2.6k.  Works in browsers, node, and embedded browsers.

You have control of color, background color and presence, location (defaults to fixed browser top,) animation transition, and many other things that most people won't actually care about in practice.

Ships with ES6 packaging, ES5 packaging that works in-browser and in-node, and minified ES5.  (We're [waiting on a closure compiler patch](https://github.com/google/closure-compiler/commit/d62eb21375427b25b87490cedd833ce4f6cd0371) before es6 minification will work correctly.)

## tl;dr
```html
<!doctype html><html><head>

  <script defer src="../dist/pbar.es5.min.js" type="text/javascript"></script>
  <script type="text/javascript">

    var pbar, pb;
    var pb;

    window.onload = function() {                       // when the page loads
      pbar     = require('pbar').pbar;                 // load the library
      pb       = new pbar({color:'red', value:'0%'});  // make a new progress bar, initially red and empty
      pb.value = '20%';                                // immediately animate to 20%
    }

    window.setTimeout(function() {                     // when the timeout fires
      pb.color = '#aa0';                               // change the color to dark yellow
      pb.value = '80%';                                // set the value to 80%
    }, 2000);                                          // the timeout fires in two seconds

    window.setTimeout(function() {                     // when the timeout fires
      pb.color = 'green';                              // change the color to green
      pb.value = '100%';                               // set the value to 100%
    }, 4000);                                          // the timeout fires in four seconds

</script></head><body></body></html>
```
