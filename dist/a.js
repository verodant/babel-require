define(["exports", "./b"], function (_exports, _b2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.a = void 0;

  var _class;

  function log(target, name, descriptor) {
    var original = descriptor.value;

    if (typeof original === 'function') {
      descriptor.value = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log("Arguments: ".concat(args));

        try {
          var result = original.apply(this, args);
          console.log("Result: ".concat(result));
          return result;
        } catch (e) {
          console.log("Error: ".concat(e));
          throw e;
        }
      };
    }

    return descriptor;
  }

  var a = (_class =
  /*#__PURE__*/
  function (_b) {
    babelHelpers.inherits(a, _b);
    babelHelpers.createClass(a, [{
      key: "sum",
      value: function sum(a, b) {
        return a + b;
      }
    }]);

    function a(name) {
      var _this;

      babelHelpers.classCallCheck(this, a);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(a).call(this, name));
      console.log('clas a -> ', name, '&&', _this.sum(1, 9));
      return _this;
    }

    return a;
  }(_b2.b), (babelHelpers.applyDecoratedDescriptor(_class.prototype, "sum", [log], Object.getOwnPropertyDescriptor(_class.prototype, "sum"), _class.prototype)), _class);
  _exports.a = a;
});
//# sourceMappingURL=a.js.map