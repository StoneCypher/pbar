(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

/********
 *
 *  Progress Bar
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pbar = function () {
  function pbar(opts) {
    var _this = this;

    _classCallCheck(this, pbar);

    opts = opts || {};

    var defaults = {
      color: '#40B3CC',
      background: 'transparent',
      border: '0 solid transparent',
      height: '4px',
      position: opts.target ? 'absolute' : 'fixed',
      target: document.body,
      transition: '0.35s',
      value: '50%'
    };

    this.opts = {};
    Object.keys(defaults).map(function (key) {
      return _this.opts[key] = opts[key] || defaults[key];
    });

    if (typeof this.opts.target === 'string') {
      this.opts.target = document.getElementById(this.opts.target);
    }

    this.frame = document.createElement('div');
    this.bar = document.createElement('div');this.frame.appendChild(this.bar);

    var frameStyles = { left: '0', right: '0', top: '0', position: this.opts.position };
    Object.keys(frameStyles).map(function (k) {
      return _this.fs(k, frameStyles[k]);
    });

    this.bs('height', '100%');
    ['height', 'border', 'color', 'background', 'transition', 'value'].map(function (s) {
      return _this[s] = _this.opts[s];
    });

    this.opts.target.appendChild(this.frame);
  }

  _createClass(pbar, [{
    key: 'fs',
    value: function fs(style, val) {
      this.frame.style[style] = val;
    }
  }, {
    key: 'bs',
    value: function bs(style, val) {
      this.bar.style[style] = val;
    }
  }, {
    key: 'color',
    get: function get() {
      return this.opts.color;
    },
    set: function set(c) {
      this.opts.color = c;this.bs('backgroundColor', c);
    }
  }, {
    key: 'background',
    get: function get() {
      return this.opts.background;
    },
    set: function set(b) {
      this.opts.background = b;this.fs('backgroundColor', b);
    }
  }, {
    key: 'border',
    get: function get() {
      return this.opts.border;
    },
    set: function set(b) {
      this.opts.border = b;this.fs('border', b);
    }
  }, {
    key: 'height',
    get: function get() {
      return this.opts.height;
    },
    set: function set(h) {
      this.opts.height = h;this.fs('height', h);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.opts.value;
    },
    set: function set(v) {
      this.opts.value = v;this.bs('width', v);
    }
  }, {
    key: 'position',
    get: function get() {
      return this.opts.position;
    }
    // no position setter

  }, {
    key: 'target',
    get: function get() {
      return this.opts.target;
    }
    // no target setter

  }, {
    key: 'transition',
    get: function get() {
      return this.opts.height;
    },
    set: function set(t) {
      this.opts.transition = t;this.bs('transition', 'width ' + t);
    }
  }]);

  return pbar;
}();

// export {pbar};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9wYmFyLmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqXHJcbiAqXHJcbiAqICBQcm9ncmVzcyBCYXJcclxuICpcclxuICovXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBwYmFyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBwYmFyKG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHBiYXIpO1xuXG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBjb2xvcjogJyM0MEIzQ0MnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlcjogJzAgc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgaGVpZ2h0OiAnNHB4JyxcbiAgICAgIHBvc2l0aW9uOiBvcHRzLnRhcmdldCA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnLFxuICAgICAgdGFyZ2V0OiBkb2N1bWVudC5ib2R5LFxuICAgICAgdHJhbnNpdGlvbjogJzAuMzVzJyxcbiAgICAgIHZhbHVlOiAnNTAlJ1xuICAgIH07XG5cbiAgICB0aGlzLm9wdHMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vcHRzW2tleV0gPSBvcHRzW2tleV0gfHwgZGVmYXVsdHNba2V5XTtcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLnRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMub3B0cy50YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdHMudGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTt0aGlzLmZyYW1lLmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcblxuICAgIHZhciBmcmFtZVN0eWxlcyA9IHsgbGVmdDogJzAnLCByaWdodDogJzAnLCB0b3A6ICcwJywgcG9zaXRpb246IHRoaXMub3B0cy5wb3NpdGlvbiB9O1xuICAgIE9iamVjdC5rZXlzKGZyYW1lU3R5bGVzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBfdGhpcy5mcyhrLCBmcmFtZVN0eWxlc1trXSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJzKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgIFsnaGVpZ2h0JywgJ2JvcmRlcicsICdjb2xvcicsICdiYWNrZ3JvdW5kJywgJ3RyYW5zaXRpb24nLCAndmFsdWUnXS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfdGhpc1tzXSA9IF90aGlzLm9wdHNbc107XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdHMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZnJhbWUpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKHBiYXIsIFt7XG4gICAga2V5OiAnZnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcyhzdHlsZSwgdmFsKSB7XG4gICAgICB0aGlzLmZyYW1lLnN0eWxlW3N0eWxlXSA9IHZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdicycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJzKHN0eWxlLCB2YWwpIHtcbiAgICAgIHRoaXMuYmFyLnN0eWxlW3N0eWxlXSA9IHZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb2xvcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmNvbG9yO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoYykge1xuICAgICAgdGhpcy5vcHRzLmNvbG9yID0gYzt0aGlzLmJzKCdiYWNrZ3JvdW5kQ29sb3InLCBjKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdiYWNrZ3JvdW5kJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMuYmFja2dyb3VuZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGIpIHtcbiAgICAgIHRoaXMub3B0cy5iYWNrZ3JvdW5kID0gYjt0aGlzLmZzKCdiYWNrZ3JvdW5kQ29sb3InLCBiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdib3JkZXInLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy5ib3JkZXI7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChiKSB7XG4gICAgICB0aGlzLm9wdHMuYm9yZGVyID0gYjt0aGlzLmZzKCdib3JkZXInLCBiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoZWlnaHQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy5oZWlnaHQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChoKSB7XG4gICAgICB0aGlzLm9wdHMuaGVpZ2h0ID0gaDt0aGlzLmZzKCdoZWlnaHQnLCBoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2YWx1ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgdGhpcy5vcHRzLnZhbHVlID0gdjt0aGlzLmJzKCd3aWR0aCcsIHYpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc2l0aW9uJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMucG9zaXRpb247XG4gICAgfVxuICAgIC8vIG5vIHBvc2l0aW9uIHNldHRlclxuXG4gIH0sIHtcbiAgICBrZXk6ICd0YXJnZXQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy50YXJnZXQ7XG4gICAgfVxuICAgIC8vIG5vIHRhcmdldCBzZXR0ZXJcblxuICB9LCB7XG4gICAga2V5OiAndHJhbnNpdGlvbicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmhlaWdodDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgIHRoaXMub3B0cy50cmFuc2l0aW9uID0gdDt0aGlzLmJzKCd0cmFuc2l0aW9uJywgJ3dpZHRoICcgKyB0KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gcGJhcjtcbn0oKTtcblxuLy8gZXhwb3J0IHtwYmFyfTsiXX0=
