import { inject as k, openBlock as n, createElementBlock as e, normalizeClass as w, normalizeStyle as C, createElementVNode as d, createBlock as O, resolveDynamicComponent as A, createCommentVNode as $, toDisplayString as j, createStaticVNode as v } from "vue";
function o(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const N = {
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
      registryInstance: k(i.registry || "indicators")
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
};
const r = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [s, a] of t)
    c[s] = a;
  return c;
}, z = { class: "activity-indicator-content" }, P = {
  key: 1,
  class: "activity-indicator-label"
};
function E(i, t, c, s, a, l) {
  return n(), e("div", {
    class: w(["activity-indicator", l.classes]),
    style: C(l.style)
  }, [
    d("div", z, [
      i.is ? (n(), O(A(i.is()), {
        key: 0,
        class: "mx-auto"
      })) : $("", !0),
      c.label ? (n(), e("div", P, j(c.label), 1)) : $("", !0)
    ])
  ], 6);
}
const F = /* @__PURE__ */ r(N, [["render", E]]);
var D = Object.defineProperty, H = (i, t, c) => t in i ? D(i, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[t] = c, I = (i, t, c) => (H(i, typeof t != "symbol" ? t + "" : t, c), c), u = function() {
  return u = Object.assign || function(i) {
    for (var t, c = 1, s = arguments.length; c < s; c++) {
      t = arguments[c];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    }
    return i;
  }, u.apply(this, arguments);
};
function W(i) {
  return i.toLowerCase();
}
var B = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], R = /[^A-Z0-9]+/gi;
function Z(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, s = c === void 0 ? B : c, a = t.stripRegexp, l = a === void 0 ? R : a, g = t.transform, q = g === void 0 ? W : g, m = t.delimiter, S = m === void 0 ? " " : m, _ = b(b(i, s, "$1\0$2"), l, "\0"), f = 0, p = _.length; _.charAt(f) === "\0"; )
    f++;
  for (; _.charAt(p - 1) === "\0"; )
    p--;
  return _.slice(f, p).split("\0").map(q).join(S);
}
function b(i, t, c) {
  return t instanceof RegExp ? i.replace(t, c) : t.reduce(function(s, a) {
    return s.replace(a, c);
  }, i);
}
function V(i, t) {
  return t === void 0 && (t = {}), Z(i, u({ delimiter: "." }, t));
}
function y(i, t) {
  return t === void 0 && (t = {}), V(i, u({ delimiter: "-" }, t));
}
class G {
  constructor(t = {}) {
    I(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, s]) => {
      this.register(c, s);
    });
  }
  get(t) {
    const c = this.components.get(
      t = y(t)
    );
    if (c)
      return c;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, c) {
    return typeof t == "object" ? (Object.entries(t).forEach(([s, a]) => {
      this.register(y(s), a);
    }), this) : (this.components.set(y(t), c), this);
  }
  remove(t) {
    return this.components.delete(y(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function x(i = {}) {
  return new G(i);
}
const vt = (i, t) => {
  const c = x();
  if (i.component("ActivityIndicator", F), i.provide(t.key || "indicators", c), t.indicators)
    for (const [s, a] of Object.entries(t.indicators))
      c.register(s, a);
}, h = x();
function lt(i) {
  return h.get(i);
}
function _t(i, t) {
  return h.register(i, t);
}
function yt(i) {
  return h.remove(i);
}
function ut() {
  return h.reset();
}
const M = {}, T = { class: "activity-indicator-chase" }, L = /* @__PURE__ */ v('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), J = [
  L
];
function K(i, t) {
  return n(), e("div", T, J);
}
const ht = /* @__PURE__ */ r(M, [["render", K]]);
const Q = {}, U = { class: "activity-indicator-circle-fade" }, X = /* @__PURE__ */ v('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), Y = [
  X
];
function ii(i, t) {
  return n(), e("div", U, Y);
}
const ft = /* @__PURE__ */ r(Q, [["render", ii]]);
const ti = {}, ci = { class: "activity-indicator-circle-orbit" }, ni = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), ei = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), ai = [
  ni,
  ei
];
function ri(i, t) {
  return n(), e("div", ci, ai);
}
const pt = /* @__PURE__ */ r(ti, [["render", ri]]);
const si = {}, di = { class: "activity-indicator-circle-trail" }, oi = /* @__PURE__ */ v('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), vi = [
  oi
];
function li(i, t) {
  return n(), e("div", di, vi);
}
const gt = /* @__PURE__ */ r(si, [["render", li]]);
const _i = {}, yi = { class: "activity-indicator-dots" }, ui = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce1" }, null, -1), hi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce2" }, null, -1), fi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce3" }, null, -1), pi = [
  ui,
  hi,
  fi
];
function gi(i, t) {
  return n(), e("div", yi, pi);
}
const mt = /* @__PURE__ */ r(_i, [["render", gi]]);
const mi = {}, $i = { class: "activity-indicator-double-pulse" }, bi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), xi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), qi = [
  bi,
  xi
];
function Si(i, t) {
  return n(), e("div", $i, qi);
}
const $t = /* @__PURE__ */ r(mi, [["render", Si]]);
const ki = {}, wi = { class: "activity-indicator-facebook" }, Ci = /* @__PURE__ */ v('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), Oi = [
  Ci
];
function Ai(i, t) {
  return n(), e("div", wi, Oi);
}
const bt = /* @__PURE__ */ r(ki, [["render", Ai]]);
const ji = {}, Ni = { class: "activity-indicator-grid" }, zi = /* @__PURE__ */ v('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Pi = [
  zi
];
function Ei(i, t) {
  return n(), e("div", Ni, Pi);
}
const xt = /* @__PURE__ */ r(ji, [["render", Ei]]);
const Fi = {}, Di = { class: "activity-indicator-pulse" };
function Hi(i, t) {
  return n(), e("div", Di);
}
const qt = /* @__PURE__ */ r(Fi, [["render", Hi]]);
const Ii = {}, Wi = { class: "activity-indicator-spinner" }, Bi = /* @__PURE__ */ v('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Ri = [
  Bi
];
function Zi(i, t) {
  return n(), e("div", Wi, Ri);
}
const St = /* @__PURE__ */ r(Ii, [["render", Zi]]);
const Vi = {}, Gi = { class: "activity-indicator-spotify" };
function Mi(i, t) {
  return n(), e("div", Gi);
}
const kt = /* @__PURE__ */ r(Vi, [["render", Mi]]);
const Ti = {}, Li = { class: "activity-indicator-square" };
function Ji(i, t) {
  return n(), e("div", Li);
}
const wt = /* @__PURE__ */ r(Ti, [["render", Ji]]);
const Ki = {}, Qi = { class: "activity-indicator-square-fold" }, Ui = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), Xi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), Yi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), it = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), tt = [
  Ui,
  Xi,
  Yi,
  it
];
function ct(i, t) {
  return n(), e("div", Qi, tt);
}
const Ct = /* @__PURE__ */ r(Ki, [["render", ct]]);
const nt = {}, et = { class: "activity-indicator-square-orbit" }, at = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), rt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), st = [
  at,
  rt
];
function dt(i, t) {
  return n(), e("div", et, st);
}
const Ot = /* @__PURE__ */ r(nt, [["render", dt]]);
export {
  F as ActivityIndicator,
  vt as ActivityIndicatorPlugin,
  ht as Chase,
  ft as CircleFade,
  pt as CircleOrbit,
  gt as CircleTrail,
  mt as Dots,
  $t as DoublePulse,
  bt as Facebook,
  xt as Grid,
  qt as Pulse,
  St as Spinner,
  kt as Spotify,
  wt as Square,
  Ct as SquareFold,
  Ot as SquareOrbit,
  lt as get,
  _t as register,
  h as registry,
  yt as remove,
  ut as reset
};
//# sourceMappingURL=activity-indicator.js.map
