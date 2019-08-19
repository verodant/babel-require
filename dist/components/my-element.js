define(["/dist/web_modules/lit-element.js"], function (_litElement) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <!-- template content -->\n      <p>A paragraph</p>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  // Extend the LitElement base class
  var MyElement =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(MyElement, _LitElement);

    function MyElement() {
      babelHelpers.classCallCheck(this, MyElement);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MyElement).apply(this, arguments));
    }

    babelHelpers.createClass(MyElement, [{
      key: "render",

      /**
       * Implement `render` to define a template for your element.
       *
       * You must provide an implementation of `render` for any element
       * that uses LitElement as a base class.
       */
      value: function render() {
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return (0, _litElement.html)(_templateObject());
      }
    }]);
    return MyElement;
  }(_litElement.LitElement); // Register the new element with the browser.


  customElements.define('my-element', MyElement);
});
//# sourceMappingURL=my-element.js.map