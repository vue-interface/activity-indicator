import { defineComponent as $, inject as k, toRaw as C, defineAsyncComponent as w, openBlock as e, createElementBlock as n, normalizeClass as O, normalizeStyle as A, createElementVNode as d, createBlock as j, resolveDynamicComponent as N, toDisplayString as z, createCommentVNode as P, createStaticVNode as v } from "vue";
function o(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const E = $({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(i) {
    return {
      registryInstance: k(i.registry || "indicators")
    };
  },
  data: () => ({
    is: null
  }),
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
  methods: {
    component() {
      let i = C(this.type);
      try {
        i = this.registryInstance.get(String(this.type));
      } catch {
      }
      return typeof i == "function" && (i = i()), i instanceof Promise ? w(() => i) : $(i);
    }
  }
});
const r = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [s, a] of t)
    c[s] = a;
  return c;
}, F = { class: "activity-indicator-content" }, D = {
  key: 0,
  class: "activity-indicator-label"
};
function H(i, t, c, s, a, p) {
  return e(), n("div", {
    class: O(["activity-indicator", i.classes]),
    style: A(i.style)
  }, [
    d("div", F, [
      (e(), j(N(i.component()), { class: "mx-auto" })),
      i.label ? (e(), n("div", D, z(i.label), 1)) : P("", !0)
    ])
  ], 6);
}
const I = /* @__PURE__ */ r(E, [["render", H]]);
var W = Object.defineProperty, B = (i, t, c) => t in i ? W(i, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[t] = c, R = (i, t, c) => (B(i, typeof t != "symbol" ? t + "" : t, c), c), y = function() {
  return y = Object.assign || function(i) {
    for (var t, c = 1, s = arguments.length; c < s; c++) {
      t = arguments[c];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    }
    return i;
  }, y.apply(this, arguments);
};
function Z(i) {
  return i.toLowerCase();
}
var V = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], G = /[^A-Z0-9]+/gi;
function M(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, s = c === void 0 ? V : c, a = t.stripRegexp, p = a === void 0 ? G : a, g = t.transform, q = g === void 0 ? Z : g, m = t.delimiter, S = m === void 0 ? " " : m, l = b(b(i, s, "$1\0$2"), p, "\0"), h = 0, f = l.length; l.charAt(h) === "\0"; )
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
function T(i, t) {
  return t === void 0 && (t = {}), M(i, y({ delimiter: "." }, t));
}
function _(i, t) {
  return t === void 0 && (t = {}), T(i, y({ delimiter: "-" }, t));
}
class L {
  constructor(t = {}) {
    R(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, s]) => {
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
  return new L(i);
}
const yt = (i, t) => {
  const c = x();
  if (i.component("ActivityIndicator", I), i.provide(t.key || "indicators", c), t.indicators)
    for (const [s, a] of Object.entries(t.indicators))
      c.register(s, a);
}, u = x();
function ut(i) {
  return u.get(i);
}
function ht(i, t) {
  return u.register(i, t);
}
function ft(i) {
  return u.remove(i);
}
function pt() {
  return u.reset();
}
const J = {}, K = { class: "activity-indicator-chase" }, Q = /* @__PURE__ */ v('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), U = [
  Q
];
function X(i, t) {
  return e(), n("div", K, U);
}
const gt = /* @__PURE__ */ r(J, [["render", X]]);
const Y = {}, ii = { class: "activity-indicator-circle-fade" }, ti = /* @__PURE__ */ v('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), ci = [
  ti
];
function ei(i, t) {
  return e(), n("div", ii, ci);
}
const mt = /* @__PURE__ */ r(Y, [["render", ei]]);
const ni = {}, ai = { class: "activity-indicator-circle-orbit" }, ri = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), si = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), di = [
  ri,
  si
];
function oi(i, t) {
  return e(), n("div", ai, di);
}
const $t = /* @__PURE__ */ r(ni, [["render", oi]]);
const vi = {}, li = { class: "activity-indicator-circle-trail" }, _i = /* @__PURE__ */ v('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), yi = [
  _i
];
function ui(i, t) {
  return e(), n("div", li, yi);
}
const bt = /* @__PURE__ */ r(vi, [["render", ui]]);
const hi = {}, fi = { class: "activity-indicator-dots" }, pi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce1" }, null, -1), gi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce2" }, null, -1), mi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce3" }, null, -1), $i = [
  pi,
  gi,
  mi
];
function bi(i, t) {
  return e(), n("div", fi, $i);
}
const xt = /* @__PURE__ */ r(hi, [["render", bi]]);
const xi = {}, qi = { class: "activity-indicator-double-pulse" }, Si = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), ki = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), Ci = [
  Si,
  ki
];
function wi(i, t) {
  return e(), n("div", qi, Ci);
}
const qt = /* @__PURE__ */ r(xi, [["render", wi]]);
const Oi = {}, Ai = { class: "activity-indicator-facebook" }, ji = /* @__PURE__ */ v('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), Ni = [
  ji
];
function zi(i, t) {
  return e(), n("div", Ai, Ni);
}
const St = /* @__PURE__ */ r(Oi, [["render", zi]]);
const Pi = {}, Ei = { class: "activity-indicator-grid" }, Fi = /* @__PURE__ */ v('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Di = [
  Fi
];
function Hi(i, t) {
  return e(), n("div", Ei, Di);
}
const kt = /* @__PURE__ */ r(Pi, [["render", Hi]]);
const Ii = {}, Wi = { class: "activity-indicator-pulse" };
function Bi(i, t) {
  return e(), n("div", Wi);
}
const Ct = /* @__PURE__ */ r(Ii, [["render", Bi]]);
const Ri = {}, Zi = { class: "activity-indicator-spinner" }, Vi = /* @__PURE__ */ v('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Gi = [
  Vi
];
function Mi(i, t) {
  return e(), n("div", Zi, Gi);
}
const wt = /* @__PURE__ */ r(Ri, [["render", Mi]]);
const Ti = {}, Li = { class: "activity-indicator-spotify" };
function Ji(i, t) {
  return e(), n("div", Li);
}
const Ot = /* @__PURE__ */ r(Ti, [["render", Ji]]);
const Ki = {}, Qi = { class: "activity-indicator-square" };
function Ui(i, t) {
  return e(), n("div", Qi);
}
const At = /* @__PURE__ */ r(Ki, [["render", Ui]]);
const Xi = {}, Yi = { class: "activity-indicator-square-fold" }, it = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), tt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), ct = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), et = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), nt = [
  it,
  tt,
  ct,
  et
];
function at(i, t) {
  return e(), n("div", Yi, nt);
}
const jt = /* @__PURE__ */ r(Xi, [["render", at]]);
const rt = {}, st = { class: "activity-indicator-square-orbit" }, dt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), ot = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), vt = [
  dt,
  ot
];
function lt(i, t) {
  return e(), n("div", st, vt);
}
const Nt = /* @__PURE__ */ r(rt, [["render", lt]]);
export {
  I as ActivityIndicator,
  yt as ActivityIndicatorPlugin,
  gt as Chase,
  mt as CircleFade,
  $t as CircleOrbit,
  bt as CircleTrail,
  xt as Dots,
  qt as DoublePulse,
  St as Facebook,
  kt as Grid,
  Ct as Pulse,
  wt as Spinner,
  Ot as Spotify,
  At as Square,
  jt as SquareFold,
  Nt as SquareOrbit,
  ut as get,
  ht as register,
  u as registry,
  ft as remove,
  pt as reset
};
//# sourceMappingURL=activity-indicator.js.map
