define(["exports", "@kinkajou/kinkajou/Kinkajou", "./SvgIcon.css"], function (_exports, _Kinkajou, _SvgIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SvgIcon = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var SvgIcon =
  /*#__PURE__*/
  function (_Kinkajou$Component) {
    _inherits(SvgIcon, _Kinkajou$Component);

    _createClass(SvgIcon, [{
      key: "styleClass",
      get: function get() {
        return this.getAsString('styleClass') || ['kinkajou', 'SvgIcon', this.className].concat(this.$.getAsString('props.class', this).split(' ')).filter(function (c) {
          return Boolean(c);
        }).join(' ');
      }
    }, {
      key: "viewBox",
      get: function get() {
        return 24;
      }
    }, {
      key: "size",
      get: function get() {
        return this.getAsInteger('size', 24, 0);
      }
    }]);

    function SvgIcon(attrs) {
      var _this;

      _classCallCheck(this, SvgIcon);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SvgIcon).call(this, attrs));

      if (!_this.className) {
        throw new Error('Missing static get is() property.');
      }

      return _this;
    }

    _createClass(SvgIcon, [{
      key: "render",
      value: function render() {
        var box = this.$.getAsFloat('viewBox', this, 0, 0);

        if (!box) {
          throw new Error('Illegal static get viewBox() implementation.');
        }

        var svgCnt = this.renderSVG();

        if (!(svgCnt instanceof _Kinkajou.Kinkajou.VirtualNode)) {
          throw new Error('Illegal renderSVG() method implementation.');
        }

        var svgRoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if (this.id) svgRoot.id = this.id;
        svgRoot.setAttributeNS(null, 'class', this.styleClass);
        svgRoot.setAttributeNS(null, 'viewBox', "0 0 ".concat(box, " ").concat(box));
        svgRoot.setAttributeNS(null, 'focusable', 'false');
        svgRoot.setAttributeNS(null, 'aria-hidden', 'true');
        svgRoot.setAttributeNS(null, 'role', 'presentation');
        svgRoot.style.fontSize = this.size + 'px';

        _Kinkajou.Kinkajou.render(svgCnt, svgRoot);

        return svgRoot;
      }
    }, {
      key: "renderSVG",
      value: function renderSVG() {
        throw new Error('Override renderSVG() method!');
      }
    }]);

    return SvgIcon;
  }(_Kinkajou.Kinkajou.Component);

  _exports.SvgIcon = SvgIcon;
});
//# sourceMappingURL=SvgIcon.js.map