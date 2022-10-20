import { inject as q, openBlock as e, createElementBlock as n, normalizeClass as S, normalizeStyle as C, createElementVNode as s, createBlock as w, resolveDynamicComponent as k, createCommentVNode as m, toDisplayString as A, createStaticVNode as _ } from "vue";
const r = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [a, d] of t)
    c[a] = d;
  return c;
};
function v(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const E = {
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
        width: v(this.width),
        maxWidth: v(this.maxWidth),
        minWidth: v(this.minWidth),
        height: v(this.height),
        maxHeight: v(this.maxHeight),
        minHeight: v(this.minHeight)
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
}, O = { class: "activity-indicator-content" }, P = {
  key: 1,
  class: "activity-indicator-label"
};
function F(i, t, c, a, d, o) {
  return e(), n("div", {
    class: S(["activity-indicator", o.classes]),
    style: C(o.style)
  }, [
    s("div", O, [
      i.is ? (e(), w(k(i.is()), {
        key: 0,
        class: "mx-auto"
      })) : m("", !0),
      c.label ? (e(), n("div", P, A(c.label), 1)) : m("", !0)
    ])
  ], 6);
}
const nt = /* @__PURE__ */ r(E, [["render", F]]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var u = function() {
  return u = Object.assign || function(t) {
    for (var c, a = 1, d = arguments.length; a < d; a++) {
      c = arguments[a];
      for (var o in c)
        Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
    }
    return t;
  }, u.apply(this, arguments);
};
function N(i) {
  return i.toLowerCase();
}
var R = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], j = /[^A-Z0-9]+/gi;
function z(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, a = c === void 0 ? R : c, d = t.stripRegexp, o = d === void 0 ? j : d, g = t.transform, b = g === void 0 ? N : g, p = t.delimiter, x = p === void 0 ? " " : p, l = $($(i, a, "$1\0$2"), o, "\0"), h = 0, f = l.length; l.charAt(h) === "\0"; )
    h++;
  for (; l.charAt(f - 1) === "\0"; )
    f--;
  return l.slice(h, f).split("\0").map(b).join(x);
}
function $(i, t, c) {
  return t instanceof RegExp ? i.replace(t, c) : t.reduce(function(a, d) {
    return a.replace(d, c);
  }, i);
}
function D(i, t) {
  return t === void 0 && (t = {}), z(i, u({
    delimiter: "."
  }, t));
}
function y(i, t) {
  return t === void 0 && (t = {}), D(i, u({
    delimiter: "-"
  }, t));
}
class I {
  constructor(t = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, a]) => {
      this.register(c, a);
    });
  }
  get(t) {
    const c = this.components.get(t = y(t));
    if (c)
      return c;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, c) {
    return typeof t == "object" ? (Object.entries(t).forEach(([a, d]) => {
      this.register(y(a), d);
    }), this) : (this.components.set(y(t), c), this);
  }
  remove(t) {
    return this.components.delete(y(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function H(...i) {
  return new I(...i);
}
const rt = (i, t = {}) => {
  const c = H();
  if (i.provide(t.key || "indicators", c), t.indicators)
    for (const [a, d] of Object.entries(t.indicators))
      c.register(a, d);
};
const T = {}, W = { class: "activity-indicator-chase" }, B = /* @__PURE__ */ _('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), G = [
  B
];
function L(i, t) {
  return e(), n("div", W, G);
}
const st = /* @__PURE__ */ r(T, [["render", L]]);
const Z = {}, V = { class: "activity-indicator-circle-fade" }, M = /* @__PURE__ */ _('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), U = [
  M
];
function X(i, t) {
  return e(), n("div", V, U);
}
const dt = /* @__PURE__ */ r(Z, [["render", X]]);
const J = {}, K = { class: "activity-indicator-circle-orbit" }, Q = /* @__PURE__ */ s("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), Y = /* @__PURE__ */ s("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), ii = [
  Q,
  Y
];
function ti(i, t) {
  return e(), n("div", K, ii);
}
const ot = /* @__PURE__ */ r(J, [["render", ti]]);
const ci = {}, ei = { class: "activity-indicator-circle-trail" }, ai = /* @__PURE__ */ _('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), ni = [
  ai
];
function ri(i, t) {
  return e(), n("div", ei, ni);
}
const vt = /* @__PURE__ */ r(ci, [["render", ri]]);
const si = {}, di = { class: "activity-indicator-dots" }, oi = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce1" }, null, -1), vi = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce2" }, null, -1), _i = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce3" }, null, -1), li = [
  oi,
  vi,
  _i
];
function yi(i, t) {
  return e(), n("div", di, li);
}
const _t = /* @__PURE__ */ r(si, [["render", yi]]);
const ui = {}, hi = { class: "activity-indicator-double-pulse" }, fi = /* @__PURE__ */ s("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), gi = /* @__PURE__ */ s("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), pi = [
  fi,
  gi
];
function mi(i, t) {
  return e(), n("div", hi, pi);
}
const lt = /* @__PURE__ */ r(ui, [["render", mi]]);
const $i = {}, bi = { class: "activity-indicator-facebook" }, xi = /* @__PURE__ */ _('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), qi = [
  xi
];
function Si(i, t) {
  return e(), n("div", bi, qi);
}
const yt = /* @__PURE__ */ r($i, [["render", Si]]);
const Ci = {}, wi = { class: "activity-indicator-grid" }, ki = /* @__PURE__ */ _('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Ai = [
  ki
];
function Ei(i, t) {
  return e(), n("div", wi, Ai);
}
const ut = /* @__PURE__ */ r(Ci, [["render", Ei]]);
const Oi = {}, Pi = { class: "activity-indicator-pulse" };
function Fi(i, t) {
  return e(), n("div", Pi);
}
const ht = /* @__PURE__ */ r(Oi, [["render", Fi]]);
const Ni = {}, Ri = { class: "activity-indicator-spinner" }, ji = /* @__PURE__ */ _('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), zi = [
  ji
];
function Di(i, t) {
  return e(), n("div", Ri, zi);
}
const ft = /* @__PURE__ */ r(Ni, [["render", Di]]);
const Ii = {}, Hi = { class: "activity-indicator-spotify" };
function Ti(i, t) {
  return e(), n("div", Hi);
}
const gt = /* @__PURE__ */ r(Ii, [["render", Ti]]);
const Wi = {}, Bi = { class: "activity-indicator-square" };
function Gi(i, t) {
  return e(), n("div", Bi);
}
const pt = /* @__PURE__ */ r(Wi, [["render", Gi]]);
const Li = {}, Zi = { class: "activity-indicator-square-fold" }, Vi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), Mi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), Ui = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), Xi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), Ji = [
  Vi,
  Mi,
  Ui,
  Xi
];
function Ki(i, t) {
  return e(), n("div", Zi, Ji);
}
const mt = /* @__PURE__ */ r(Li, [["render", Ki]]);
const Qi = {}, Yi = { class: "activity-indicator-square-orbit" }, it = /* @__PURE__ */ s("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), tt = /* @__PURE__ */ s("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), ct = [
  it,
  tt
];
function et(i, t) {
  return e(), n("div", Yi, ct);
}
const $t = /* @__PURE__ */ r(Qi, [["render", et]]);
export {
  nt as ActivityIndicator,
  rt as ActivityIndicatorPlugin,
  st as Chase,
  dt as CircleFade,
  ot as CircleOrbit,
  vt as CircleTrail,
  _t as Dots,
  lt as DoublePulse,
  yt as Facebook,
  ut as Grid,
  ht as Pulse,
  ft as Spinner,
  gt as Spotify,
  pt as Square,
  mt as SquareFold,
  $t as SquareOrbit
};
