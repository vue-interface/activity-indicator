function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0") {
    start++;
  }
  while (result.charAt(end - 1) === "\0") {
    end--;
  }
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, _assign({
    delimiter: "."
  }, options));
}
function paramCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase(input, _assign({
    delimiter: "-"
  }, options));
}
var ComponentRegistry = /* @__PURE__ */ function() {
  function ComponentRegistry2() {
    var _this = this;
    var components = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, ComponentRegistry2);
    this.components = {};
    Object.entries(components).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      _this.register(key, value);
    });
  }
  _createClass(ComponentRegistry2, [{
    key: "validate",
    value: function validate(value) {
      if (_typeof(value) === "object" || typeof value === "function") {
        return value;
      }
      throw new Error("Invalid data type `".concat(_typeof(value), "`. Should be type `object` or `function`."));
    }
  }, {
    key: "get",
    value: function get2(name) {
      var match = this.components[name = paramCase(name)];
      if (match) {
        return match;
      }
      throw new Error('"'.concat(name, '" has not been registered yet!'));
    }
  }, {
    key: "register",
    value: function register2(name, value) {
      var _this2 = this;
      if (_typeof(name) === "object") {
        Object.entries(name).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), name2 = _ref4[0], module = _ref4[1];
          _this2.register(paramCase(name2), module);
        });
        return this;
      }
      this.components[paramCase(name)] = this.validate(value);
      return this;
    }
  }, {
    key: "remove",
    value: function remove2(name) {
      delete this.components[paramCase(name)];
      return this;
    }
  }, {
    key: "reset",
    value: function reset2() {
      this.components = {};
      return this;
    }
  }]);
  return ComponentRegistry2;
}();
function factory() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return _construct(ComponentRegistry, args);
}
const registry = factory();
function get() {
  return registry.get.apply(registry, arguments);
}
function register() {
  return registry.register.apply(registry, arguments);
}
function remove() {
  return registry.remove.apply(registry, arguments);
}
function reset() {
  return registry.reset.apply(registry, arguments);
}
var render$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator", class: _vm.classes, style: _vm.style }, [_c("div", { staticClass: "activity-indicator-content" }, [_c(_vm.component, { tag: "component", staticClass: "mx-auto" }), _vm.label ? _c("div", { staticClass: "activity-indicator-label" }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()], 1)]);
};
var staticRenderFns$e = [];
var ActivityIndicator_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
function unit(value, uom = "px") {
  return value !== null && value !== void 0 && value !== false && isFinite(value) ? `${value}${uom}` : value;
}
const __vue2_script$e = {
  name: "ActivityIndicator",
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: ComponentRegistry,
      default() {
        return registry;
      }
    },
    type: {
      type: String,
      required: true
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: unit(this.width),
        maxWidth: unit(this.maxWidth),
        minWidth: unit(this.minWidth),
        height: unit(this.height),
        maxHeight: unit(this.maxHeight),
        minHeight: unit(this.minHeight)
      };
    },
    component() {
      return () => {
        console.log(registry);
        const component = registry.get(this.type);
        if (component instanceof Promise) {
          return component;
        }
        if (typeof component === "function") {
          return component();
        }
        return Promise.resolve(component);
      };
    }
  }
};
const __cssModules$e = {};
var __component__$e = /* @__PURE__ */ normalizeComponent(__vue2_script$e, render$e, staticRenderFns$e, false, __vue2_injectStyles$e, null, null, null);
function __vue2_injectStyles$e(context) {
  for (let o in __cssModules$e) {
    this[o] = __cssModules$e[o];
  }
}
var ActivityIndicator = /* @__PURE__ */ function() {
  return __component__$e.exports;
}();
var render$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$d = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-chase" }, [_c("div", { staticClass: "activity-indicator-chase-dot" }), _c("div", { staticClass: "activity-indicator-chase-dot" }), _c("div", { staticClass: "activity-indicator-chase-dot" }), _c("div", { staticClass: "activity-indicator-chase-dot" }), _c("div", { staticClass: "activity-indicator-chase-dot" }), _c("div", { staticClass: "activity-indicator-chase-dot" })]);
}];
var Chase_vue_vue_type_style_index_0_lang = "";
const __vue2_script$d = {};
const __cssModules$d = {};
var __component__$d = /* @__PURE__ */ normalizeComponent(__vue2_script$d, render$d, staticRenderFns$d, false, __vue2_injectStyles$d, null, null, null);
function __vue2_injectStyles$d(context) {
  for (let o in __cssModules$d) {
    this[o] = __cssModules$d[o];
  }
}
var Chase = /* @__PURE__ */ function() {
  return __component__$d.exports;
}();
var render$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$c = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-circle-fade" }, [_c("div", { staticClass: "activity-indicator-circle1 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle2 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle3 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle4 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle5 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle6 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle7 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle8 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle9 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle10 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle11 activity-indicator-circle" }), _c("div", { staticClass: "activity-indicator-circle12 activity-indicator-circle" })]);
}];
var CircleFade_vue_vue_type_style_index_0_lang = "";
const __vue2_script$c = {};
const __cssModules$c = {};
var __component__$c = /* @__PURE__ */ normalizeComponent(__vue2_script$c, render$c, staticRenderFns$c, false, __vue2_injectStyles$c, null, null, null);
function __vue2_injectStyles$c(context) {
  for (let o in __cssModules$c) {
    this[o] = __cssModules$c[o];
  }
}
var CircleFade = /* @__PURE__ */ function() {
  return __component__$c.exports;
}();
var render$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$b = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-circle-orbit" }, [_c("div", { staticClass: "activity-indicator-circle-orbit-dot1" }), _c("div", { staticClass: "activity-indicator-circle-orbit-dot2" })]);
}];
var CircleOrbit_vue_vue_type_style_index_0_lang = "";
const __vue2_script$b = {};
const __cssModules$b = {};
var __component__$b = /* @__PURE__ */ normalizeComponent(__vue2_script$b, render$b, staticRenderFns$b, false, __vue2_injectStyles$b, null, null, null);
function __vue2_injectStyles$b(context) {
  for (let o in __cssModules$b) {
    this[o] = __cssModules$b[o];
  }
}
var CircleOrbit = /* @__PURE__ */ function() {
  return __component__$b.exports;
}();
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$a = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-circle-trail" }, [_c("div", { staticClass: "activity-indicator-circle-trail1 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail2 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail3 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail4 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail5 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail6 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail7 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail8 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail9 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail10 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail11 activity-indicator-child" }), _c("div", { staticClass: "activity-indicator-circle-trail12 activity-indicator-child" })]);
}];
var CircleTrail_vue_vue_type_style_index_0_lang = "";
const __vue2_script$a = {};
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(__vue2_script$a, render$a, staticRenderFns$a, false, __vue2_injectStyles$a, null, null, null);
function __vue2_injectStyles$a(context) {
  for (let o in __cssModules$a) {
    this[o] = __cssModules$a[o];
  }
}
var CircleTrail = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$9 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-dots" }, [_c("div", { staticClass: "activity-indicator-dots-bounce1" }), _c("div", { staticClass: "activity-indicator-dots-bounce2" }), _c("div", { staticClass: "activity-indicator-dots-bounce3" })]);
}];
var Dots_vue_vue_type_style_index_0_lang = "";
const __vue2_script$9 = {};
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(__vue2_script$9, render$9, staticRenderFns$9, false, __vue2_injectStyles$9, null, null, null);
function __vue2_injectStyles$9(context) {
  for (let o in __cssModules$9) {
    this[o] = __cssModules$9[o];
  }
}
var Dots = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$8 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-double-pulse" }, [_c("div", { staticClass: "activity-indicator-double-pulse-bounce1" }), _c("div", { staticClass: "activity-indicator-double-pulse-bounce2" })]);
}];
var DoublePulse_vue_vue_type_style_index_0_lang = "";
const __vue2_script$8 = {};
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$8, staticRenderFns$8, false, __vue2_injectStyles$8, null, null, null);
function __vue2_injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var DoublePulse = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$7 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-facebook" }, [_c("div", { staticClass: "activity-indicator-facebook-rect1" }), _c("div", { staticClass: "activity-indicator-facebook-rect2" }), _c("div", { staticClass: "activity-indicator-facebook-rect3" }), _c("div", { staticClass: "activity-indicator-facebook-rect4" }), _c("div", { staticClass: "activity-indicator-facebook-rect5" })]);
}];
var Facebook_vue_vue_type_style_index_0_lang = "";
const __vue2_script$7 = {};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, null, null, null);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var Facebook = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$6 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-grid" }, [_c("div", { staticClass: "activity-indicator-grid activity-indicator-grid1" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid2" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid3" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid4" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid5" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid6" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid7" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid8" }), _c("div", { staticClass: "activity-indicator-grid activity-indicator-grid9" })]);
}];
var Grid_vue_vue_type_style_index_0_lang = "";
const __vue2_script$6 = {};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, null, null, null);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var Grid = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-pulse" });
};
var staticRenderFns$5 = [];
var Pulse_vue_vue_type_style_index_0_lang = "";
const __vue2_script$5 = {};
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var Pulse = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$4 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-spinner" }, [_c("div", { staticClass: "activity-indicator-spinner1 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner2 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner3 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner4 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner5 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner6 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner7 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner8 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner9 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner10 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner11 activity-indicator-spinner" }), _c("div", { staticClass: "activity-indicator-spinner12 activity-indicator-spinner" })]);
}];
var Spinner_vue_vue_type_style_index_0_lang = "";
const __vue2_script$4 = {};
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var Spinner = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-spotify" });
};
var staticRenderFns$3 = [];
var Spotify_vue_vue_type_style_index_0_lang = "";
const __vue2_script$3 = {};
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var Spotify = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-square" });
};
var staticRenderFns$2 = [];
var Square_vue_vue_type_style_index_0_lang = "";
const __vue2_script$2 = {};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var Square = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$1 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-square-fold" }, [_c("div", { staticClass: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }), _c("div", { staticClass: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }), _c("div", { staticClass: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }), _c("div", { staticClass: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" })]);
}];
var SquareFold_vue_vue_type_style_index_0_lang = "";
const __vue2_script$1 = {};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var SquareFold = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator-square-orbit" }, [_c("div", { staticClass: "activity-indicator-square-orbit-cube1" }), _c("div", { staticClass: "activity-indicator-square-orbit-cube2" })]);
}];
var SquareOrbit_vue_vue_type_style_index_0_lang = "";
const __vue2_script = {};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var SquareOrbit = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { ActivityIndicator, Chase, CircleFade, CircleOrbit, CircleTrail, Dots, DoublePulse, Facebook, Grid, Pulse, Spinner, Spotify, Square, SquareFold, SquareOrbit, get, register, registry, remove, reset };
