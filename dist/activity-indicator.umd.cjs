(function(n,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],c):(n=typeof globalThis<"u"?globalThis:n||self,c(n.ActivityIndicator={},n.Vue))})(this,function(n,c){"use strict";function s(i,t="px"){return i!=null&&i!==!1&&isFinite(i)?`${i}${t}`:i}const b={props:{absolute:Boolean,center:Boolean,label:String,size:{type:String,default:"md"},registry:{type:String,default:"indicators"},type:{type:String,required:!0},height:[String,Number],maxHeight:[String,Number],minHeight:[String,Number],width:[String,Number],maxWidth:[String,Number],minWidth:[String,Number]},data:()=>({is:null}),setup(i){return{registryInstance:c.inject(i.registry||"indicators")}},computed:{classes(){return{"activity-indicator-center":this.center,"activity-indicator-absolute":this.absolute,[this.size&&`activity-indicator-${this.size}`]:!!this.size}},style(){return{width:s(this.width),maxWidth:s(this.maxWidth),minWidth:s(this.minWidth),height:s(this.height),maxHeight:s(this.maxHeight),minHeight:s(this.minHeight)}}},async mounted(){const i=await this.component();this.is=()=>i},methods:{async component(){let i=this.registryInstance.get(this.type);return i instanceof Promise?i:(typeof i=="function"&&(i=await i()),i.default?i.default:i)}}},it="",a=(i,t)=>{const e=i.__vccOpts||i;for(const[o,r]of t)e[o]=r;return e},k={class:"activity-indicator-content"},B={key:1,class:"activity-indicator-label"};function E(i,t,e,o,r,v){return c.openBlock(),c.createElementBlock("div",{class:c.normalizeClass(["activity-indicator",v.classes]),style:c.normalizeStyle(v.style)},[c.createElementVNode("div",k,[i.is?(c.openBlock(),c.createBlock(c.resolveDynamicComponent(i.is()),{key:0,class:"mx-auto"})):c.createCommentVNode("",!0),e.label?(c.openBlock(),c.createElementBlock("div",B,c.toDisplayString(e.label),1)):c.createCommentVNode("",!0)])],6)}const f=a(b,[["render",E]]);var S=Object.defineProperty,q=(i,t,e)=>t in i?S(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,N=(i,t,e)=>(q(i,typeof t!="symbol"?t+"":t,e),e),l=function(){return l=Object.assign||function(i){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},l.apply(this,arguments)};function V(i){return i.toLowerCase()}var x=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],C=/[^A-Z0-9]+/gi;function O(i,t){t===void 0&&(t={});for(var e=t.splitRegexp,o=e===void 0?x:e,r=t.stripRegexp,v=r===void 0?C:r,g=t.transform,Xi=g===void 0?V:g,$=t.delimiter,Yi=$===void 0?" ":$,y=m(m(i,o,"$1\0$2"),v,"\0"),h=0,u=y.length;y.charAt(h)==="\0";)h++;for(;y.charAt(u-1)==="\0";)u--;return y.slice(h,u).split("\0").map(Xi).join(Yi)}function m(i,t,e){return t instanceof RegExp?i.replace(t,e):t.reduce(function(o,r){return o.replace(r,e)},i)}function w(i,t){return t===void 0&&(t={}),O(i,l({delimiter:"."},t))}function _(i,t){return t===void 0&&(t={}),w(i,l({delimiter:"-"},t))}class A{constructor(t={}){N(this,"components"),this.components=new Map,Object.entries(t).forEach(([e,o])=>{this.register(e,o)})}get(t){const e=this.components.get(t=_(t));if(e)return e;throw new Error(`"${t}" has not been registered yet!`)}register(t,e){return typeof t=="object"?(Object.entries(t).forEach(([o,r])=>{this.register(_(o),r)}),this):(this.components.set(_(t),e),this)}remove(t){return this.components.delete(_(t)),this}reset(){return this.components=new Map,this}}function p(i={}){return new A(i)}const j=(i,t)=>{const e=p();if(i.component("ActivityIndicator",f),i.provide(t.key||"indicators",e),t.indicators)for(const[o,r]of Object.entries(t.indicators))e.register(o,r)},d=p();function P(i){return d.get(i)}function F(i,t){return d.register(i,t)}function I(i){return d.remove(i)}function z(){return d.reset()}const tt="",D={},H={class:"activity-indicator-chase"},T=[c.createStaticVNode('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>',6)];function W(i,t){return c.openBlock(),c.createElementBlock("div",H,T)}const M=a(D,[["render",W]]),et="",R={},Z={class:"activity-indicator-circle-fade"},G=[c.createStaticVNode('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>',12)];function L(i,t){return c.openBlock(),c.createElementBlock("div",Z,G)}const J=a(R,[["render",L]]),at="",K={},Q={class:"activity-indicator-circle-orbit"},U=[c.createElementVNode("div",{class:"activity-indicator-circle-orbit-dot1"},null,-1),c.createElementVNode("div",{class:"activity-indicator-circle-orbit-dot2"},null,-1)];function X(i,t){return c.openBlock(),c.createElementBlock("div",Q,U)}const Y=a(K,[["render",X]]),st="",ii={},ti={class:"activity-indicator-circle-trail"},ci=[c.createStaticVNode('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>',12)];function ei(i,t){return c.openBlock(),c.createElementBlock("div",ti,ci)}const ni=a(ii,[["render",ei]]),lt="",ai={},ri={class:"activity-indicator-dots"},oi=[c.createElementVNode("div",{class:"activity-indicator-dots-bounce1"},null,-1),c.createElementVNode("div",{class:"activity-indicator-dots-bounce2"},null,-1),c.createElementVNode("div",{class:"activity-indicator-dots-bounce3"},null,-1)];function si(i,t){return c.openBlock(),c.createElementBlock("div",ri,oi)}const di=a(ai,[["render",si]]),ht="",li={},_i={class:"activity-indicator-double-pulse"},vi=[c.createElementVNode("div",{class:"activity-indicator-double-pulse-bounce1"},null,-1),c.createElementVNode("div",{class:"activity-indicator-double-pulse-bounce2"},null,-1)];function yi(i,t){return c.openBlock(),c.createElementBlock("div",_i,vi)}const hi=a(li,[["render",yi]]),mt="",ui={},fi={class:"activity-indicator-facebook"},mi=[c.createStaticVNode('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>',5)];function pi(i,t){return c.openBlock(),c.createElementBlock("div",fi,mi)}const gi=a(ui,[["render",pi]]),gt="",$i={},bi={class:"activity-indicator-grid"},ki=[c.createStaticVNode('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>',9)];function Bi(i,t){return c.openBlock(),c.createElementBlock("div",bi,ki)}const Ei=a($i,[["render",Bi]]),bt="",Si={},qi={class:"activity-indicator-pulse"};function Ni(i,t){return c.openBlock(),c.createElementBlock("div",qi)}const Vi=a(Si,[["render",Ni]]),kt="",xi={},Ci={class:"activity-indicator-spinner"},Oi=[c.createStaticVNode('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>',12)];function wi(i,t){return c.openBlock(),c.createElementBlock("div",Ci,Oi)}const Ai=a(xi,[["render",wi]]),Et="",ji={},Pi={class:"activity-indicator-spotify"};function Fi(i,t){return c.openBlock(),c.createElementBlock("div",Pi)}const Ii=a(ji,[["render",Fi]]),St="",zi={},Di={class:"activity-indicator-square"};function Hi(i,t){return c.openBlock(),c.createElementBlock("div",Di)}const Ti=a(zi,[["render",Hi]]),qt="",Wi={},Mi={class:"activity-indicator-square-fold"},Ri=[c.createElementVNode("div",{class:"activity-indicator-square-fold-square1 activity-indicator-square-fold-square"},null,-1),c.createElementVNode("div",{class:"activity-indicator-square-fold-square2 activity-indicator-square-fold-square"},null,-1),c.createElementVNode("div",{class:"activity-indicator-square-fold-square4 activity-indicator-square-fold-square"},null,-1),c.createElementVNode("div",{class:"activity-indicator-square-fold-square3 activity-indicator-square-fold-square"},null,-1)];function Zi(i,t){return c.openBlock(),c.createElementBlock("div",Mi,Ri)}const Gi=a(Wi,[["render",Zi]]),Ot="",Li={},Ji={class:"activity-indicator-square-orbit"},Ki=[c.createElementVNode("div",{class:"activity-indicator-square-orbit-cube1"},null,-1),c.createElementVNode("div",{class:"activity-indicator-square-orbit-cube2"},null,-1)];function Qi(i,t){return c.openBlock(),c.createElementBlock("div",Ji,Ki)}const Ui=a(Li,[["render",Qi]]);n.ActivityIndicator=f,n.ActivityIndicatorPlugin=j,n.Chase=M,n.CircleFade=J,n.CircleOrbit=Y,n.CircleTrail=ni,n.Dots=di,n.DoublePulse=hi,n.Facebook=gi,n.Grid=Ei,n.Pulse=Vi,n.Spinner=Ai,n.Spotify=Ii,n.Square=Ti,n.SquareFold=Gi,n.SquareOrbit=Ui,n.get=P,n.register=F,n.registry=d,n.remove=I,n.reset=z,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=activity-indicator.umd.cjs.map
