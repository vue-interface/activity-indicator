import { defineComponent as k, inject as w, openBlock as n, createElementBlock as e, normalizeClass as C, normalizeStyle as O, createElementVNode as d, createBlock as A, resolveDynamicComponent as j, createCommentVNode as $, toDisplayString as N, createStaticVNode as v } from "vue";
function o(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const z = k({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: String,
      required: !0
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  data: () => ({
    is: null
  }),
  setup(i) {
    return {
      registryInstance: w(i.registry || "indicators")
    };
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
        width: o(this.width),
        maxWidth: o(this.maxWidth),
        minWidth: o(this.minWidth),
        height: o(this.height),
        maxHeight: o(this.maxHeight),
        minHeight: o(this.minHeight)
      };
    }
  },
  async mounted() {
    const i = await this.component();
    this.is = () => i;
  },
  methods: {
    async component() {
      let i = this.registryInstance.get(this.type);
      return i instanceof Promise ? i : (typeof i == "function" && (i = await i()), i.default ? i.default : i);
    }
  }
});
const r = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [s, a] of t)
    c[s] = a;
  return c;
}, P = { class: "activity-indicator-content" }, E = {
  key: 1,
  class: "activity-indicator-label"
};
function F(i, t, c, s, a, p) {
  return n(), e("div", {
    class: C(["activity-indicator", i.classes]),
    style: O(i.style)
  }, [
    d("div", P, [
      i.is ? (n(), A(j(i.is()), {
        key: 0,
        class: "mx-auto"
      })) : $("", !0),
      i.label ? (n(), e("div", E, N(i.label), 1)) : $("", !0)
    ])
  ], 6);
}
const D = /* @__PURE__ */ r(z, [["render", F]]);
var H = Object.defineProperty, I = (i, t, c) => t in i ? H(i, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[t] = c, W = (i, t, c) => (I(i, typeof t != "symbol" ? t + "" : t, c), c), y = function() {
  return y = Object.assign || function(i) {
    for (var t, c = 1, s = arguments.length; c < s; c++) {
      t = arguments[c];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    }
    return i;
  }, y.apply(this, arguments);
};
function B(i) {
  return i.toLowerCase();
}
var R = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], Z = /[^A-Z0-9]+/gi;
function V(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, s = c === void 0 ? R : c, a = t.stripRegexp, p = a === void 0 ? Z : a, g = t.transform, q = g === void 0 ? B : g, m = t.delimiter, S = m === void 0 ? " " : m, l = b(b(i, s, "$1\0$2"), p, "\0"), h = 0, f = l.length; l.charAt(h) === "\0"; )
    h++;
  for (; l.charAt(f - 1) === "\0"; )
    f--;
  return l.slice(h, f).split("\0").map(q).join(S);
}
function b(i, t, c) {
  return t instanceof RegExp ? i.replace(t, c) : t.reduce(function(s, a) {
    return s.replace(a, c);
  }, i);
}
function G(i, t) {
  return t === void 0 && (t = {}), V(i, y({ delimiter: "." }, t));
}
function _(i, t) {
  return t === void 0 && (t = {}), G(i, y({ delimiter: "-" }, t));
}
class M {
  constructor(t = {}) {
    W(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, s]) => {
      this.register(c, s);
    });
  }
  get(t) {
    const c = this.components.get(
      t = _(t)
    );
    if (c)
      return c;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, c) {
    return typeof t == "object" ? (Object.entries(t).forEach(([s, a]) => {
      this.register(_(s), a);
    }), this) : (this.components.set(_(t), c), this);
  }
  remove(t) {
    return this.components.delete(_(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function x(i = {}) {
  return new M(i);
}
const lt = (i, t) => {
  const c = x();
  if (i.component("ActivityIndicator", D), i.provide(t.key || "indicators", c), t.indicators)
    for (const [s, a] of Object.entries(t.indicators))
      c.register(s, a);
}, u = x();
function _t(i) {
  return u.get(i);
}
function yt(i, t) {
  return u.register(i, t);
}
function ut(i) {
  return u.remove(i);
}
function ht() {
  return u.reset();
}
const T = {}, L = { class: "activity-indicator-chase" }, J = /* @__PURE__ */ v('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), K = [
  J
];
function Q(i, t) {
  return n(), e("div", L, K);
}
const ft = /* @__PURE__ */ r(T, [["render", Q]]);
const U = {}, X = { class: "activity-indicator-circle-fade" }, Y = /* @__PURE__ */ v('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), ii = [
  Y
];
function ti(i, t) {
  return n(), e("div", X, ii);
}
const pt = /* @__PURE__ */ r(U, [["render", ti]]);
const ci = {}, ni = { class: "activity-indicator-circle-orbit" }, ei = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), ai = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), ri = [
  ei,
  ai
];
function si(i, t) {
  return n(), e("div", ni, ri);
}
const gt = /* @__PURE__ */ r(ci, [["render", si]]);
const di = {}, oi = { class: "activity-indicator-circle-trail" }, vi = /* @__PURE__ */ v('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), li = [
  vi
];
function _i(i, t) {
  return n(), e("div", oi, li);
}
const mt = /* @__PURE__ */ r(di, [["render", _i]]);
const yi = {}, ui = { class: "activity-indicator-dots" }, hi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce1" }, null, -1), fi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce2" }, null, -1), pi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce3" }, null, -1), gi = [
  hi,
  fi,
  pi
];
function mi(i, t) {
  return n(), e("div", ui, gi);
}
const $t = /* @__PURE__ */ r(yi, [["render", mi]]);
const $i = {}, bi = { class: "activity-indicator-double-pulse" }, xi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), qi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), Si = [
  xi,
  qi
];
function ki(i, t) {
  return n(), e("div", bi, Si);
}
const bt = /* @__PURE__ */ r($i, [["render", ki]]);
const wi = {}, Ci = { class: "activity-indicator-facebook" }, Oi = /* @__PURE__ */ v('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), Ai = [
  Oi
];
function ji(i, t) {
  return n(), e("div", Ci, Ai);
}
const xt = /* @__PURE__ */ r(wi, [["render", ji]]);
const Ni = {}, zi = { class: "activity-indicator-grid" }, Pi = /* @__PURE__ */ v('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Ei = [
  Pi
];
function Fi(i, t) {
  return n(), e("div", zi, Ei);
}
const qt = /* @__PURE__ */ r(Ni, [["render", Fi]]);
const Di = {}, Hi = { class: "activity-indicator-pulse" };
function Ii(i, t) {
  return n(), e("div", Hi);
}
const St = /* @__PURE__ */ r(Di, [["render", Ii]]);
const Wi = {}, Bi = { class: "activity-indicator-spinner" }, Ri = /* @__PURE__ */ v('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Zi = [
  Ri
];
function Vi(i, t) {
  return n(), e("div", Bi, Zi);
}
const kt = /* @__PURE__ */ r(Wi, [["render", Vi]]);
const Gi = {}, Mi = { class: "activity-indicator-spotify" };
function Ti(i, t) {
  return n(), e("div", Mi);
}
const wt = /* @__PURE__ */ r(Gi, [["render", Ti]]);
const Li = {}, Ji = { class: "activity-indicator-square" };
function Ki(i, t) {
  return n(), e("div", Ji);
}
const Ct = /* @__PURE__ */ r(Li, [["render", Ki]]);
const Qi = {}, Ui = { class: "activity-indicator-square-fold" }, Xi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), Yi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), it = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), tt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), ct = [
  Xi,
  Yi,
  it,
  tt
];
function nt(i, t) {
  return n(), e("div", Ui, ct);
}
const Ot = /* @__PURE__ */ r(Qi, [["render", nt]]);
const et = {}, at = { class: "activity-indicator-square-orbit" }, rt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), st = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), dt = [
  rt,
  st
];
function ot(i, t) {
  return n(), e("div", at, dt);
}
const At = /* @__PURE__ */ r(et, [["render", ot]]);
export {
  D as ActivityIndicator,
  lt as ActivityIndicatorPlugin,
  ft as Chase,
  pt as CircleFade,
  gt as CircleOrbit,
  mt as CircleTrail,
  $t as Dots,
  bt as DoublePulse,
  xt as Facebook,
  qt as Grid,
  St as Pulse,
  kt as Spinner,
  wt as Spotify,
  Ct as Square,
  Ot as SquareFold,
  At as SquareOrbit,
  _t as get,
  yt as register,
  u as registry,
  ut as remove,
  ht as reset
};
//# sourceMappingURL=activity-indicator.js.map
