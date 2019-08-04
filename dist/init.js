define(["./a"], function (_a) {
  "use strict";

  //import {LitElement} from 'lit-element';
  //console.log(LitElement);
  var gen =
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!true) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return Math.random();

          case 3:
            _context.next = 0;
            break;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  });

  function pp() {
    return _pp.apply(this, arguments);
  }

  function _pp() {
    _pp = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Promise.resolve('ja je ji jo ju'));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _pp.apply(this, arguments);
  }

  function run() {
    return _run.apply(this, arguments);
  }

  function _run() {
    _run = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var p;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('entro en run');
              _context3.next = 3;
              return pp();

            case 3:
              p = _context3.sent;
              console.log(p);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _run.apply(this, arguments);
  }

  run();
  var b = gen();
  var z = new _a.a('SuperlopeZzzzz');
  console.log("Soy super Zzzzz -> ".concat(z), z);
  console.log(':: Fin de init.js ::');
});
//# sourceMappingURL=init.js.map