
'use strict';

/********
 *
 *  Progress Bar
 *
 */

class pbar {



  constructor(opts) {

    opts = opts || {};

    let defaults = {
      color      : '#40B3CC',
      background : 'transparent',
      border     : '0 solid transparent',
      height     : '4px',
      position   : opts.target? 'absolute' : 'fixed',
      target     : document.body,
      transition : '0.35s',
      value      : '50%'
    };

    this.opts = {};
    Object.keys(defaults).map(key => this.opts[key] = opts[key] || defaults[key]);

    if (typeof this.opts.target === 'string') { this.opts.target = document.getElementById(this.opts.target); }

    this.frame = document.createElement('div');
    this.bar   = document.createElement('div'); this.frame.appendChild(this.bar);

    var frameStyles = {left: '0', right: '0', top: '0', position: this.opts.position};
    Object.keys(frameStyles).map(k => this.fs(k, frameStyles[k]));

    this.bs('height', '100%');
    ['height', 'border', 'color', 'background', 'transition', 'value'].map(s => this[s] = this.opts[s]);

    this.opts.target.appendChild(this.frame);

  }

  fs(style, val) { this.frame.style[style] = val; }
  bs(style, val) { this.bar.style[style]   = val; }

  get color()  { return this.opts.color; }
  set color(c) { this.opts.color = c; this.bs('backgroundColor', c); }

  get background()  { return this.opts.background; } 
  set background(b) { this.opts.background = b; this.fs('backgroundColor', b); }

  get border()  { return this.opts.border; }
  set border(b) { this.opts.border = b; this.fs('border', b); }

  get height()  { return this.opts.height; }
  set height(h) { this.opts.height = h; this.fs('height', h); }

  get value()  { return this.opts.value; }
  set value(v) { this.opts.value = v; this.bs('width', v); }

  get position() { return this.opts.position; }
  // no position setter

  get target() { return this.opts.target; }
  // no target setter

  get transition()  { return this.opts.height; }
  set transition(t) { this.opts.transition = t; this.bs('transition', `width ${t}`); }



}

// export {pbar};
