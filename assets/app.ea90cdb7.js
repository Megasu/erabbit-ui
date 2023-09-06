import{d as m,H as i,E as j,$ as A,h as V,U as D,x as B,z as I,a as y,Z as _,M as L,g as O,j as P,a0 as E,s as v,a1 as $,a2 as k,a3 as F,a4 as M,a5 as U,a6 as z,a7 as H,a8 as K,a9 as G,aa as Z,ab as q,u as J,y as Q,ac as W,ad as X,ae as Y}from"./chunks/framework.72f8e290.js";import{t as C}from"./chunks/theme.4a438798.js";function ee(e){return[`er-${e}`]}const te={type:{type:String,default:"default"},size:{type:String,default:"middle"}},ae=ee("button"),ne=m({name:"ErButton",props:te,setup(e,{slots:t}){return()=>{var a;return i("button",{class:[ae,"ellipsis",e.size,e.type]},[(a=t.default)==null?void 0:a.call(t)])}}}),g=ne;function oe(e){const t=[],a=n=>{Array.isArray(n)&&n.forEach(o=>{var r;A(o)&&(t.push(o),(r=o.component)!=null&&r.subTree&&(t.push(o.component.subTree),a(o.component.subTree.children)),o.children&&a(o.children))})};return a(e),t}const re=(e,t,a)=>oe(e.subTree.children).filter(r=>{var u;return A(r)&&((u=r.type)==null?void 0:u.name)===t&&!!r.component}).map(r=>r.component.uid).map(r=>a[r]).filter(r=>!!r),se=(e,t)=>{const a={},n=j([]);return{children:n,addChild:u=>{a[u.uid]=u,n.value=re(e,t,a)},removeChild:u=>{delete a[u],n.value=n.value.filter(s=>s.uid!==u)}}},T=Symbol("carouselContextKey"),ue={duration:{type:Number,default:3e3},autoPlay:{type:Boolean,default:!0},height:{type:String,default:"300px"}},le=m({name:"ErCarousel",props:ue,emits:["change"],setup(e,{slots:t,emit:a,expose:n}){const{children:o,addChild:r,removeChild:u}=se(_(),"ErCarouselItem"),s=V(0);D(T,{items:o,addItem:r,removeItem:u,index:s});let l;const S=()=>{l&&clearInterval(l),l=setInterval(()=>{s.value++,s.value>=o.value.length&&(s.value=0)},e.duration)};B(o,()=>{h()});const h=()=>{o.value.length!==0&&e.autoPlay&&S()},d=c=>{if(c>o.value.length-1){s.value=0;return}if(c<0){s.value=o.value.length-1;return}s.value=c,a("change",s.value)},w=()=>{l&&clearInterval(l)},R=()=>{h()};return I(()=>{l&&clearInterval(l)}),n({prev:()=>{d(s.value-1)},next:()=>{d(s.value+1)},setActiveItem:c=>{d(c)}}),()=>{var c;return i("div",{class:"er-carousel",onMouseenter:w,onMouseleave:R,style:{height:e.height}},[i("div",{class:"carousel-body"},[(c=t.default)==null?void 0:c.call(t)]),i("a",{onClick:()=>d(s.value-1),href:"javascript:;",class:"carousel-btn prev"},[i("i",{class:"iconfont icon-angle-left"},[y("<")])]),i("a",{onClick:()=>d(s.value+1),href:"javascript:;",class:"carousel-btn next"},[i("i",{class:"iconfont icon-angle-right"},[y(">")])]),i("div",{class:"carousel-indicator"},[o.value.map((he,f)=>i("span",{onClick:()=>d(f),key:f,class:{active:s.value===f}},null))])])}}}),ie=m({name:"ErCarouselItem",setup(e,{slots:t}){const{index:a,items:n,addItem:o,removeItem:r}=L(T),u=_(),s=O(()=>n.value.findIndex(l=>l.uid===(u==null?void 0:u.uid)));return P(()=>{o({uid:u.uid})}),I(()=>{r(u.uid)}),()=>{var l;return i("div",{class:{"carousel-item":!0,fade:a.value===s.value}},[(l=t.default)==null?void 0:l.call(t)])}}}),b=le,x=ie;const ce={extends:C,Layout:()=>E(C.Layout,null,{}),enhanceApp({app:e,router:t,siteData:a}){e.component(g.name,g),e.component(b.name,b),e.component(x.name,x)}};function N(e){if(e.extends){const t=N(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const p=N(ce),de=m({name:"VitePressApp",setup(){const{site:e}=J();return P(()=>{Q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),W(),X(),Y(),p.setup&&p.setup(),()=>E(p.Layout)}});async function pe(){const e=fe(),t=me();t.provide(k,e);const a=F(e.route);return t.provide(M,a),t.component("Content",U),t.component("ClientOnly",z),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:H}),{app:t,router:e,data:a}}function me(){return K(de)}function fe(){let e=v,t;return G(a=>{let n=Z(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),v&&(e=!1),q(()=>import(n),[])):null},p.NotFound)}v&&pe().then(({app:e,router:t,data:a})=>{t.go().then(()=>{$(t.route,a.site),e.mount("#app")})});export{pe as createApp};