require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"pbar":[function(require,module,exports){

'use strict';

/********
 *
 *  Progress Bar
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

;

exports.pbar = pbar;
},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L3BiYXIuZXM1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKipcclxuICpcclxuICogIFByb2dyZXNzIEJhclxyXG4gKlxyXG4gKi9cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHBiYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBiYXIob3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgcGJhcik7XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbG9yOiAnIzQwQjNDQycsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiAnMCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICBoZWlnaHQ6ICc0cHgnLFxuICAgICAgcG9zaXRpb246IG9wdHMudGFyZ2V0ID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcsXG4gICAgICB0YXJnZXQ6IGRvY3VtZW50LmJvZHksXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zNXMnLFxuICAgICAgdmFsdWU6ICc1MCUnXG4gICAgfTtcblxuICAgIHRoaXMub3B0cyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLm9wdHNba2V5XSA9IG9wdHNba2V5XSB8fCBkZWZhdWx0c1trZXldO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMudGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vcHRzLnRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0cy50YXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO3RoaXMuZnJhbWUuYXBwZW5kQ2hpbGQodGhpcy5iYXIpO1xuXG4gICAgdmFyIGZyYW1lU3R5bGVzID0geyBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRvcDogJzAnLCBwb3NpdGlvbjogdGhpcy5vcHRzLnBvc2l0aW9uIH07XG4gICAgT2JqZWN0LmtleXMoZnJhbWVTdHlsZXMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIF90aGlzLmZzKGssIGZyYW1lU3R5bGVzW2tdKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYnMoJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgWydoZWlnaHQnLCAnYm9yZGVyJywgJ2NvbG9yJywgJ2JhY2tncm91bmQnLCAndHJhbnNpdGlvbicsICd2YWx1ZSddLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF90aGlzW3NdID0gX3RoaXMub3B0c1tzXTtcbiAgICB9KTtcblxuICAgIHRoaXMub3B0cy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5mcmFtZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MocGJhciwgW3tcbiAgICBrZXk6ICdmcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZzKHN0eWxlLCB2YWwpIHtcbiAgICAgIHRoaXMuZnJhbWUuc3R5bGVbc3R5bGVdID0gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnMoc3R5bGUsIHZhbCkge1xuICAgICAgdGhpcy5iYXIuc3R5bGVbc3R5bGVdID0gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbG9yJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMuY29sb3I7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChjKSB7XG4gICAgICB0aGlzLm9wdHMuY29sb3IgPSBjO3RoaXMuYnMoJ2JhY2tncm91bmRDb2xvcicsIGMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JhY2tncm91bmQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy5iYWNrZ3JvdW5kO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoYikge1xuICAgICAgdGhpcy5vcHRzLmJhY2tncm91bmQgPSBiO3RoaXMuZnMoJ2JhY2tncm91bmRDb2xvcicsIGIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JvcmRlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmJvcmRlcjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGIpIHtcbiAgICAgIHRoaXMub3B0cy5ib3JkZXIgPSBiO3RoaXMuZnMoJ2JvcmRlcicsIGIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hlaWdodCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmhlaWdodDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGgpIHtcbiAgICAgIHRoaXMub3B0cy5oZWlnaHQgPSBoO3RoaXMuZnMoJ2hlaWdodCcsIGgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbHVlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICB0aGlzLm9wdHMudmFsdWUgPSB2O3RoaXMuYnMoJ3dpZHRoJywgdik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zaXRpb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy5wb3NpdGlvbjtcbiAgICB9XG4gICAgLy8gbm8gcG9zaXRpb24gc2V0dGVyXG5cbiAgfSwge1xuICAgIGtleTogJ3RhcmdldCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLnRhcmdldDtcbiAgICB9XG4gICAgLy8gbm8gdGFyZ2V0IHNldHRlclxuXG4gIH0sIHtcbiAgICBrZXk6ICd0cmFuc2l0aW9uJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMuaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodCkge1xuICAgICAgdGhpcy5vcHRzLnRyYW5zaXRpb24gPSB0O3RoaXMuYnMoJ3RyYW5zaXRpb24nLCAnd2lkdGggJyArIHQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBwYmFyO1xufSgpO1xuXG47XG5cbmV4cG9ydHMucGJhciA9IHBiYXI7Il19
