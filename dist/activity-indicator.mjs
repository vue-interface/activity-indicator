import { inject as q, openBlock as n, createElementBlock as a, normalizeClass as S, normalizeStyle as k, createElementVNode as d, createBlock as w, resolveDynamicComponent as C, createCommentVNode as $, toDisplayString as A, createStaticVNode as v } from "vue";
function o(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const O = {
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
      registryInstance: q(i.registry || "indicators")
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
const s = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [r, e] of t)
    c[r] = e;
  return c;
}, N = { class: "activity-indicator-content" }, j = {
  key: 1,
  class: "activity-indicator-label"
};
function z(i, t, c, r, e, l) {
  return n(), a("div", {
    class: S(["activity-indicator", l.classes]),
    style: k(l.style)
  }, [
    d("div", N, [
      i.is ? (n(), w(C(i.is()), {
        key: 0,
        class: "mx-auto"
      })) : $("", !0),
      c.label ? (n(), a("div", j, A(c.label), 1)) : $("", !0)
    ])
  ], 6);
}
const E = /* @__PURE__ */ s(O, [["render", z]]);
var u = function() {
  return u = Object.assign || function(i) {
    for (var t, c = 1, r = arguments.length; c < r; c++) {
      t = arguments[c];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, u.apply(this, arguments);
};
function F(i) {
  return i.toLowerCase();
}
var P = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], D = /[^A-Z0-9]+/gi;
function H(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, r = c === void 0 ? P : c, e = t.stripRegexp, l = e === void 0 ? D : e, p = t.transform, b = p === void 0 ? F : p, g = t.delimiter, x = g === void 0 ? " " : g, _ = m(m(i, r, "$1\0$2"), l, "\0"), h = 0, f = _.length; _.charAt(h) === "\0"; )
    h++;
  for (; _.charAt(f - 1) === "\0"; )
    f--;
  return _.slice(h, f).split("\0").map(b).join(x);
}
function m(i, t, c) {
  return t instanceof RegExp ? i.replace(t, c) : t.reduce(function(r, e) {
    return r.replace(e, c);
  }, i);
}
function I(i, t) {
  return t === void 0 && (t = {}), H(i, u({
    delimiter: "."
  }, t));
}
function y(i, t) {
  return t === void 0 && (t = {}), I(i, u({
    delimiter: "-"
  }, t));
}
class W {
  constructor(t = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, r]) => {
      this.register(c, r);
    });
  }
  get(t) {
    const c = this.components.get(t = y(t));
    if (c)
      return c;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, c) {
    return typeof t == "object" ? (Object.entries(t).forEach(([r, e]) => {
      this.register(y(r), e);
    }), this) : (this.components.set(y(t), c), this);
  }
  remove(t) {
    return this.components.delete(y(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function B(i = {}) {
  return new W(i);
}
const st = (i, t) => {
  const c = B();
  if (i.component("ActivityIndicator", E), i.provide(t.key || "indicators", c), t.indicators)
    for (const [r, e] of Object.entries(t.indicators))
      c.register(r, e);
};
const R = {}, Z = { class: "activity-indicator-chase" }, V = /* @__PURE__ */ v('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), G = [
  V
];
function M(i, t) {
  return n(), a("div", Z, G);
}
const rt = /* @__PURE__ */ s(R, [["render", M]]);
const T = {}, L = { class: "activity-indicator-circle-fade" }, J = /* @__PURE__ */ v('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), K = [
  J
];
function Q(i, t) {
  return n(), a("div", L, K);
}
const dt = /* @__PURE__ */ s(T, [["render", Q]]);
const U = {}, X = { class: "activity-indicator-circle-orbit" }, Y = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), ii = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), ti = [
  Y,
  ii
];
function ci(i, t) {
  return n(), a("div", X, ti);
}
const ot = /* @__PURE__ */ s(U, [["render", ci]]);
const ni = {}, ai = { class: "activity-indicator-circle-trail" }, ei = /* @__PURE__ */ v('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), si = [
  ei
];
function ri(i, t) {
  return n(), a("div", ai, si);
}
const vt = /* @__PURE__ */ s(ni, [["render", ri]]);
const di = {}, oi = { class: "activity-indicator-dots" }, vi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce1" }, null, -1), li = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce2" }, null, -1), _i = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce3" }, null, -1), yi = [
  vi,
  li,
  _i
];
function ui(i, t) {
  return n(), a("div", oi, yi);
}
const lt = /* @__PURE__ */ s(di, [["render", ui]]);
const hi = {}, fi = { class: "activity-indicator-double-pulse" }, pi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), gi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), $i = [
  pi,
  gi
];
function mi(i, t) {
  return n(), a("div", fi, $i);
}
const _t = /* @__PURE__ */ s(hi, [["render", mi]]);
const bi = {}, xi = { class: "activity-indicator-facebook" }, qi = /* @__PURE__ */ v('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), Si = [
  qi
];
function ki(i, t) {
  return n(), a("div", xi, Si);
}
const yt = /* @__PURE__ */ s(bi, [["render", ki]]);
const wi = {}, Ci = { class: "activity-indicator-grid" }, Ai = /* @__PURE__ */ v('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Oi = [
  Ai
];
function Ni(i, t) {
  return n(), a("div", Ci, Oi);
}
const ut = /* @__PURE__ */ s(wi, [["render", Ni]]);
const ji = {}, zi = { class: "activity-indicator-pulse" };
function Ei(i, t) {
  return n(), a("div", zi);
}
const ht = /* @__PURE__ */ s(ji, [["render", Ei]]);
const Fi = {}, Pi = { class: "activity-indicator-spinner" }, Di = /* @__PURE__ */ v('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Hi = [
  Di
];
function Ii(i, t) {
  return n(), a("div", Pi, Hi);
}
const ft = /* @__PURE__ */ s(Fi, [["render", Ii]]);
const Wi = {}, Bi = { class: "activity-indicator-spotify" };
function Ri(i, t) {
  return n(), a("div", Bi);
}
const pt = /* @__PURE__ */ s(Wi, [["render", Ri]]);
const Zi = {}, Vi = { class: "activity-indicator-square" };
function Gi(i, t) {
  return n(), a("div", Vi);
}
const gt = /* @__PURE__ */ s(Zi, [["render", Gi]]);
const Mi = {}, Ti = { class: "activity-indicator-square-fold" }, Li = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), Ji = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), Ki = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), Qi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), Ui = [
  Li,
  Ji,
  Ki,
  Qi
];
function Xi(i, t) {
  return n(), a("div", Ti, Ui);
}
const $t = /* @__PURE__ */ s(Mi, [["render", Xi]]);
const Yi = {}, it = { class: "activity-indicator-square-orbit" }, tt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), ct = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), nt = [
  tt,
  ct
];
function at(i, t) {
  return n(), a("div", it, nt);
}
const mt = /* @__PURE__ */ s(Yi, [["render", at]]);
export {
  E as ActivityIndicator,
  st as ActivityIndicatorPlugin,
  rt as Chase,
  dt as CircleFade,
  ot as CircleOrbit,
  vt as CircleTrail,
  lt as Dots,
  _t as DoublePulse,
  yt as Facebook,
  ut as Grid,
  ht as Pulse,
  ft as Spinner,
  pt as Spotify,
  gt as Square,
  $t as SquareFold,
  mt as SquareOrbit
};
//# sourceMappingURL=activity-indicator.mjs.map
