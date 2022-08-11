import { openBlock as e, createElementBlock as a, normalizeClass as C, normalizeStyle as w, createElementVNode as s, createBlock as E, resolveDynamicComponent as A, createCommentVNode as $, toDisplayString as k, createStaticVNode as _ } from "vue";
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
var h = function() {
  return h = Object.assign || function(t) {
    for (var c, r = 1, d = arguments.length; r < d; r++) {
      c = arguments[r];
      for (var v in c)
        Object.prototype.hasOwnProperty.call(c, v) && (t[v] = c[v]);
    }
    return t;
  }, h.apply(this, arguments);
};
function O(i) {
  return i.toLowerCase();
}
var P = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], F = /[^A-Z0-9]+/gi;
function N(i, t) {
  t === void 0 && (t = {});
  for (var c = t.splitRegexp, r = c === void 0 ? P : c, d = t.stripRegexp, v = d === void 0 ? F : d, g = t.transform, q = g === void 0 ? O : g, m = t.delimiter, S = m === void 0 ? " " : m, y = b(b(i, r, "$1\0$2"), v, "\0"), f = 0, p = y.length; y.charAt(f) === "\0"; )
    f++;
  for (; y.charAt(p - 1) === "\0"; )
    p--;
  return y.slice(f, p).split("\0").map(q).join(S);
}
function b(i, t, c) {
  return t instanceof RegExp ? i.replace(t, c) : t.reduce(function(r, d) {
    return r.replace(d, c);
  }, i);
}
function R(i, t) {
  return t === void 0 && (t = {}), N(i, h({
    delimiter: "."
  }, t));
}
function u(i, t) {
  return t === void 0 && (t = {}), R(i, h({
    delimiter: "-"
  }, t));
}
class x {
  constructor(t = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([c, r]) => {
      this.register(c, r);
    });
  }
  get(t) {
    const c = this.components.get(t = u(t));
    if (c)
      return c;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, c) {
    return typeof t == "object" ? (Object.entries(t).forEach(([r, d]) => {
      this.register(u(r), d);
    }), this) : (this.components.set(u(t), c), this);
  }
  remove(t) {
    return this.components.delete(u(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function z(...i) {
  return new x(...i);
}
const o = z();
function nt() {
  return o.get.apply(o, arguments);
}
function rt() {
  return o.register.apply(o, arguments);
}
function st() {
  return o.remove.apply(o, arguments);
}
function dt() {
  return o.reset.apply(o, arguments);
}
const n = (i, t) => {
  const c = i.__vccOpts || i;
  for (const [r, d] of t)
    c[r] = d;
  return c;
};
function l(i, t = "px") {
  return i != null && i !== !1 && isFinite(i) ? `${i}${t}` : i;
}
const D = {
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
      type: x,
      default() {
        return o;
      }
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
        width: l(this.width),
        maxWidth: l(this.maxWidth),
        minWidth: l(this.minWidth),
        height: l(this.height),
        maxHeight: l(this.maxHeight),
        minHeight: l(this.minHeight)
      };
    }
  },
  async mounted() {
    const i = await this.component();
    this.is = () => i;
  },
  methods: {
    async component() {
      let i = o.get(this.type);
      return i instanceof Promise ? i : (typeof i == "function" && (i = await i()), i.default ? i.default : i);
    }
  }
}, j = { class: "activity-indicator-content" }, H = {
  key: 1,
  class: "activity-indicator-label"
};
function T(i, t, c, r, d, v) {
  return e(), a("div", {
    class: C(["activity-indicator", v.classes]),
    style: w(v.style)
  }, [
    s("div", j, [
      i.is ? (e(), E(A(i.is()), {
        key: 0,
        class: "mx-auto"
      })) : $("", !0),
      c.label ? (e(), a("div", H, k(c.label), 1)) : $("", !0)
    ])
  ], 6);
}
const ot = /* @__PURE__ */ n(D, [["render", T]]);
const W = {}, B = { class: "activity-indicator-chase" }, I = /* @__PURE__ */ _('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), G = [
  I
];
function L(i, t) {
  return e(), a("div", B, G);
}
const vt = /* @__PURE__ */ n(W, [["render", L]]);
const Z = {}, V = { class: "activity-indicator-circle-fade" }, M = /* @__PURE__ */ _('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), U = [
  M
];
function X(i, t) {
  return e(), a("div", V, U);
}
const lt = /* @__PURE__ */ n(Z, [["render", X]]);
const J = {}, K = { class: "activity-indicator-circle-orbit" }, Q = /* @__PURE__ */ s("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), Y = /* @__PURE__ */ s("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), ii = [
  Q,
  Y
];
function ti(i, t) {
  return e(), a("div", K, ii);
}
const _t = /* @__PURE__ */ n(J, [["render", ti]]);
const ci = {}, ei = { class: "activity-indicator-circle-trail" }, ai = /* @__PURE__ */ _('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), ni = [
  ai
];
function ri(i, t) {
  return e(), a("div", ei, ni);
}
const yt = /* @__PURE__ */ n(ci, [["render", ri]]);
const si = {}, di = { class: "activity-indicator-dots" }, oi = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce1" }, null, -1), vi = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce2" }, null, -1), li = /* @__PURE__ */ s("div", { class: "activity-indicator-dots-bounce3" }, null, -1), _i = [
  oi,
  vi,
  li
];
function yi(i, t) {
  return e(), a("div", di, _i);
}
const ut = /* @__PURE__ */ n(si, [["render", yi]]);
const ui = {}, hi = { class: "activity-indicator-double-pulse" }, fi = /* @__PURE__ */ s("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), pi = /* @__PURE__ */ s("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), gi = [
  fi,
  pi
];
function mi(i, t) {
  return e(), a("div", hi, gi);
}
const ht = /* @__PURE__ */ n(ui, [["render", mi]]);
const $i = {}, bi = { class: "activity-indicator-facebook" }, xi = /* @__PURE__ */ _('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), qi = [
  xi
];
function Si(i, t) {
  return e(), a("div", bi, qi);
}
const ft = /* @__PURE__ */ n($i, [["render", Si]]);
const Ci = {}, wi = { class: "activity-indicator-grid" }, Ei = /* @__PURE__ */ _('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Ai = [
  Ei
];
function ki(i, t) {
  return e(), a("div", wi, Ai);
}
const pt = /* @__PURE__ */ n(Ci, [["render", ki]]);
const Oi = {}, Pi = { class: "activity-indicator-pulse" };
function Fi(i, t) {
  return e(), a("div", Pi);
}
const gt = /* @__PURE__ */ n(Oi, [["render", Fi]]);
const Ni = {}, Ri = { class: "activity-indicator-spinner" }, zi = /* @__PURE__ */ _('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Di = [
  zi
];
function ji(i, t) {
  return e(), a("div", Ri, Di);
}
const mt = /* @__PURE__ */ n(Ni, [["render", ji]]);
const Hi = {}, Ti = { class: "activity-indicator-spotify" };
function Wi(i, t) {
  return e(), a("div", Ti);
}
const $t = /* @__PURE__ */ n(Hi, [["render", Wi]]);
const Bi = {}, Ii = { class: "activity-indicator-square" };
function Gi(i, t) {
  return e(), a("div", Ii);
}
const bt = /* @__PURE__ */ n(Bi, [["render", Gi]]);
const Li = {}, Zi = { class: "activity-indicator-square-fold" }, Vi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), Mi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), Ui = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), Xi = /* @__PURE__ */ s("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), Ji = [
  Vi,
  Mi,
  Ui,
  Xi
];
function Ki(i, t) {
  return e(), a("div", Zi, Ji);
}
const xt = /* @__PURE__ */ n(Li, [["render", Ki]]);
const Qi = {}, Yi = { class: "activity-indicator-square-orbit" }, it = /* @__PURE__ */ s("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), tt = /* @__PURE__ */ s("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), ct = [
  it,
  tt
];
function et(i, t) {
  return e(), a("div", Yi, ct);
}
const qt = /* @__PURE__ */ n(Qi, [["render", et]]);
export {
  ot as ActivityIndicator,
  vt as Chase,
  lt as CircleFade,
  _t as CircleOrbit,
  yt as CircleTrail,
  ut as Dots,
  ht as DoublePulse,
  ft as Facebook,
  pt as Grid,
  gt as Pulse,
  mt as Spinner,
  $t as Spotify,
  bt as Square,
  xt as SquareFold,
  qt as SquareOrbit,
  nt as get,
  rt as register,
  o as registry,
  st as remove,
  dt as reset
};
