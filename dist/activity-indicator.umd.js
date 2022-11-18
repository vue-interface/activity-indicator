(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.ActivityIndicator={},n.Vue))})(this,function(n,i){"use strict";function s(t,c="px"){return t!=null&&t!==!1&&isFinite(t)?`${t}${c}`:t}const $={props:{absolute:Boolean,center:Boolean,label:String,size:{type:String,default:"md"},registry:{type:String,default:"indicators"},type:{type:String,required:!0},height:[String,Number],maxHeight:[String,Number],minHeight:[String,Number],width:[String,Number],maxWidth:[String,Number],minWidth:[String,Number]},data:()=>({is:null}),setup(t){return{registryInstance:i.inject(t.registry||"indicators")}},computed:{classes(){return{"activity-indicator-center":this.center,"activity-indicator-absolute":this.absolute,[this.size&&`activity-indicator-${this.size}`]:!!this.size}},style(){return{width:s(this.width),maxWidth:s(this.maxWidth),minWidth:s(this.minWidth),height:s(this.height),maxHeight:s(this.maxHeight),minHeight:s(this.minHeight)}}},async mounted(){const t=await this.component();this.is=()=>t},methods:{async component(){let t=this.registryInstance.get(this.type);return t instanceof Promise?t:(typeof t=="function"&&(t=await t()),t.default?t.default:t)}}},Gi="",a=(t,c)=>{const e=t.__vccOpts||t;for(const[o,r]of c)e[o]=r;return e},g={class:"activity-indicator-content"},b={key:1,class:"activity-indicator-label"};function k(t,c,e,o,r,_){return i.openBlock(),i.createElementBlock("div",{class:i.normalizeClass(["activity-indicator",_.classes]),style:i.normalizeStyle(_.style)},[i.createElementVNode("div",g,[t.is?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(t.is()),{key:0,class:"mx-auto"})):i.createCommentVNode("",!0),e.label?(i.openBlock(),i.createElementBlock("div",b,i.toDisplayString(e.label),1)):i.createCommentVNode("",!0)])],6)}const u=a($,[["render",k]]);var d=function(){return d=Object.assign||function(t){for(var c,e=1,o=arguments.length;e<o;e++){c=arguments[e];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r])}return t},d.apply(this,arguments)};function B(t){return t.toLowerCase()}var E=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],S=/[^A-Z0-9]+/gi;function q(t,c){c===void 0&&(c={});for(var e=c.splitRegexp,o=e===void 0?E:e,r=c.stripRegexp,_=r===void 0?S:r,m=c.transform,Ri=m===void 0?B:m,p=c.delimiter,Zi=p===void 0?" ":p,v=f(f(t,o,"$1\0$2"),_,"\0"),y=0,h=v.length;v.charAt(y)==="\0";)y++;for(;v.charAt(h-1)==="\0";)h--;return v.slice(y,h).split("\0").map(Ri).join(Zi)}function f(t,c,e){return c instanceof RegExp?t.replace(c,e):c.reduce(function(o,r){return o.replace(r,e)},t)}function N(t,c){return c===void 0&&(c={}),q(t,d({delimiter:"."},c))}function l(t,c){return c===void 0&&(c={}),N(t,d({delimiter:"-"},c))}class x{constructor(c={}){this.components=new Map,Object.entries(c).forEach(([e,o])=>{this.register(e,o)})}get(c){const e=this.components.get(c=l(c));if(e)return e;throw new Error(`"${c}" has not been registered yet!`)}register(c,e){return typeof c=="object"?(Object.entries(c).forEach(([o,r])=>{this.register(l(o),r)}),this):(this.components.set(l(c),e),this)}remove(c){return this.components.delete(l(c)),this}reset(){return this.components=new Map,this}}function V(t={}){return new x(t)}const C=(t,c)=>{const e=V();if(t.component("ActivityIndicator",u),t.provide(c.key||"indicators",e),c.indicators)for(const[o,r]of Object.entries(c.indicators))e.register(o,r)},Li="",A={},O={class:"activity-indicator-chase"},w=[i.createStaticVNode('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>',6)];function P(t,c){return i.openBlock(),i.createElementBlock("div",O,w)}const j=a(A,[["render",P]]),Ki="",F={},I={class:"activity-indicator-circle-fade"},z=[i.createStaticVNode('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>',12)];function D(t,c){return i.openBlock(),i.createElementBlock("div",I,z)}const H=a(F,[["render",D]]),Ui="",T={},W={class:"activity-indicator-circle-orbit"},M=[i.createElementVNode("div",{class:"activity-indicator-circle-orbit-dot1"},null,-1),i.createElementVNode("div",{class:"activity-indicator-circle-orbit-dot2"},null,-1)];function R(t,c){return i.openBlock(),i.createElementBlock("div",W,M)}const Z=a(T,[["render",R]]),it="",G={},L={class:"activity-indicator-circle-trail"},J=[i.createStaticVNode('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>',12)];function K(t,c){return i.openBlock(),i.createElementBlock("div",L,J)}const Q=a(G,[["render",K]]),ct="",U={},X={class:"activity-indicator-dots"},Y=[i.createElementVNode("div",{class:"activity-indicator-dots-bounce1"},null,-1),i.createElementVNode("div",{class:"activity-indicator-dots-bounce2"},null,-1),i.createElementVNode("div",{class:"activity-indicator-dots-bounce3"},null,-1)];function ii(t,c){return i.openBlock(),i.createElementBlock("div",X,Y)}const ti=a(U,[["render",ii]]),rt="",ci={},ei={class:"activity-indicator-double-pulse"},ni=[i.createElementVNode("div",{class:"activity-indicator-double-pulse-bounce1"},null,-1),i.createElementVNode("div",{class:"activity-indicator-double-pulse-bounce2"},null,-1)];function ai(t,c){return i.openBlock(),i.createElementBlock("div",ei,ni)}const ri=a(ci,[["render",ai]]),dt="",oi={},si={class:"activity-indicator-facebook"},di=[i.createStaticVNode('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>',5)];function li(t,c){return i.openBlock(),i.createElementBlock("div",si,di)}const _i=a(oi,[["render",li]]),_t="",vi={},yi={class:"activity-indicator-grid"},hi=[i.createStaticVNode('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>',9)];function ui(t,c){return i.openBlock(),i.createElementBlock("div",yi,hi)}const fi=a(vi,[["render",ui]]),yt="",mi={},pi={class:"activity-indicator-pulse"};function $i(t,c){return i.openBlock(),i.createElementBlock("div",pi)}const gi=a(mi,[["render",$i]]),ht="",bi={},ki={class:"activity-indicator-spinner"},Bi=[i.createStaticVNode('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>',12)];function Ei(t,c){return i.openBlock(),i.createElementBlock("div",ki,Bi)}const Si=a(bi,[["render",Ei]]),ft="",qi={},Ni={class:"activity-indicator-spotify"};function xi(t,c){return i.openBlock(),i.createElementBlock("div",Ni)}const Vi=a(qi,[["render",xi]]),mt="",Ci={},Ai={class:"activity-indicator-square"};function Oi(t,c){return i.openBlock(),i.createElementBlock("div",Ai)}const wi=a(Ci,[["render",Oi]]),pt="",Pi={},ji={class:"activity-indicator-square-fold"},Fi=[i.createElementVNode("div",{class:"activity-indicator-square-fold-square1 activity-indicator-square-fold-square"},null,-1),i.createElementVNode("div",{class:"activity-indicator-square-fold-square2 activity-indicator-square-fold-square"},null,-1),i.createElementVNode("div",{class:"activity-indicator-square-fold-square4 activity-indicator-square-fold-square"},null,-1),i.createElementVNode("div",{class:"activity-indicator-square-fold-square3 activity-indicator-square-fold-square"},null,-1)];function Ii(t,c){return i.openBlock(),i.createElementBlock("div",ji,Fi)}const zi=a(Pi,[["render",Ii]]),Bt="",Di={},Hi={class:"activity-indicator-square-orbit"},Ti=[i.createElementVNode("div",{class:"activity-indicator-square-orbit-cube1"},null,-1),i.createElementVNode("div",{class:"activity-indicator-square-orbit-cube2"},null,-1)];function Wi(t,c){return i.openBlock(),i.createElementBlock("div",Hi,Ti)}const Mi=a(Di,[["render",Wi]]);n.ActivityIndicator=u,n.ActivityIndicatorPlugin=C,n.Chase=j,n.CircleFade=H,n.CircleOrbit=Z,n.CircleTrail=Q,n.Dots=ti,n.DoublePulse=ri,n.Facebook=_i,n.Grid=fi,n.Pulse=gi,n.Spinner=Si,n.Spotify=Vi,n.Square=wi,n.SquareFold=zi,n.SquareOrbit=Mi,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=activity-indicator.umd.js.map
