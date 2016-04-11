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

## Options

`pbar` with no options, or with an empty object, is legal.  `pbar` will ignore options it doesn't recognize.

`pbar` writes inline styles without quoting.  ***Options are subject to injections***.  <u>Do not use `pbar` with user generated content</u>.

Options that `pbar` does recognize:
 * `background` is the value of the `background` property on the master frame tag.  Default is transparent.
 * `border` is the value of the `border` property on the tag drawing the frame.  Default is `0px solid transparent`.
 * `color` is the value of the `background` property on the tag drawing the bar.  Generally this will be a color, but this very easily could be an image, or whatever.  Default is #40B3CC, a light blue.
 * `height` is the value of the `height` property of the frame tag.  Default is `'4px'`.  This is a CSS string, and therefore requires a unit unless `0`.
 * `value` is the value of the `width` property of the bar tag.  Normally this would be expressed as a percentage.  Default is `50%`, which is kind of trolly, but nice for newcomers.
 * `target` is the identity of the bar's host.  Unlike most values, this isn't a CSS property.  Instead, it's either a DOM reference like you'd get from `document.getElementById()`, or a string which will be looked up as an `id` by the library.  If no `target` is given, `document.body` is assumed.
 * `position` is the `position` of the frame tag.  Default is `fixed` if no `target` is given, or `absolute` if one is.
 * `transition` is the value of the `transition` property, but with the string `'width '` prepended to the front.  Generally provide the time and/or the easing function in CSS format, such as `'0.35s'` or `'0.5s easeOutSine'`.  Default is `'0.35s'`.



Polemic :neckbeard:
===================

`pbar` is MIT licensed, because viral licenses and newspeak language modification are evil. Free is ***only*** free when it's free for everyone.