import{d as u,Z as m,H as n,h as i,o as c,c as E,k as s,r as d,N as b,n as F,_ as h,C,w as a,a as o,F as _,l as g,Q as v}from"./chunks/framework.904a14ca.js";const A=u({name:"CodePreview",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,required:!0}},setup(l){const t=i(),e=i(0),r=i(!1);return{codeEl:t,height:e,copied:r,toggleCode:()=>{const p=t.value?t.value.offsetHeight:0;e.value=e.value===0?p:0},copyCode:()=>{if(!r.value){try{navigator.clipboard.writeText(l.code)}catch(p){console.log(p)}r.value=!0,setTimeout(()=>{r.value=!1},1e3)}}}}}),B=(l,t)=>{const e=l.__vccOpts||l;for(const[r,p]of t)e[r]=p;return e},f={class:"mdp-demo__preview"},D={class:"mdp-demo__toolbar"},k={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},w=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"},null,-1),x=[w],z={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},P=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"},null,-1),S=[P],q=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46",d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"})],-1),I=[q],M={ref:"codeEl"};function T(l,t,e,r,p,X){return c(),E("div",{class:F(["mdp-demo",l.height>0&&"is-expanded"])},[s("div",f,[d(l.$slots,"default")]),s("div",D,[s("div",{class:"mdp-demo__btn mdp-demo__btn-copy",onClick:t[0]||(t[0]=(...y)=>l.copyCode&&l.copyCode(...y))},[l.copied?(c(),E("svg",k,x)):(c(),E("svg",z,S))]),s("div",{class:"mdp-demo__btn mdp-demo__btn-code",onClick:t[1]||(t[1]=(...y)=>l.toggleCode&&l.toggleCode(...y))},I)]),s("div",{class:"mdp-demo__code",style:b({height:l.height+"px",visibility:l.height>0?"visible":"hidden"})},[s("div",M,[d(l.$slots,"code")],512)],4)],2)}const V=B(A,[["render",T]]),N=u({name:"CodePreviewWrapper",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,default:""},component:{type:String,default:"CodePreview"}},setup(l,t){const e=m().appContext.app.component(l.component),r=e||V;return()=>n(r,{code:decodeURIComponent(l.code),lang:decodeURIComponent(l.lang),meta:decodeURIComponent(l.meta)},{default:t.slots.default,code:t.slots.code})}});const $={},H={class:"demo"},j=s("hr",null,null,-1),R={class:"demo"};function U(l,t){const e=C("er-button");return c(),E(_,null,[s("div",H,[n(e,{type:"default"},{default:a(()=>[o("default")]),_:1}),n(e,{type:"primary"},{default:a(()=>[o("primary")]),_:1}),n(e,{type:"plain"},{default:a(()=>[o("plain")]),_:1}),n(e,{type:"gray"},{default:a(()=>[o("gray")]),_:1})]),j,s("div",R,[n(e,{type:"primary",size:"large"},{default:a(()=>[o("large")]),_:1}),n(e,{type:"primary",size:"middle"},{default:a(()=>[o("middle")]),_:1}),n(e,{type:"primary",size:"small"},{default:a(()=>[o("small")]),_:1}),n(e,{type:"primary",size:"mini"},{default:a(()=>[o("mini")]),_:1})])],64)}const O=h($,[["render",U]]),J=s("h1",{id:"button",tabindex:"-1"},[o("Button "),s("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1),L=s("p",null,"Commonly used button.",-1),Q=s("h2",{id:"basic-usage",tabindex:"-1"},[o("Basic usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic usage"'},"​")],-1),W=s("p",null,"Use type and size to define Button's style.",-1),Z=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo"'),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"default"'),s("span",{style:{color:"#E1E4E8"}},">default</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}},">primary</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"plain"'),s("span",{style:{color:"#E1E4E8"}},">plain</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"gray"'),s("span",{style:{color:"#E1E4E8"}},">gray</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"hr"),s("span",{style:{color:"#E1E4E8"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"demo"'),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"large"'),s("span",{style:{color:"#E1E4E8"}},">large</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"middle"'),s("span",{style:{color:"#E1E4E8"}},">middle</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"small"'),s("span",{style:{color:"#E1E4E8"}},">small</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"mini"'),s("span",{style:{color:"#E1E4E8"}},">mini</"),s("span",{style:{color:"#85E89D"}},"er-button"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".demo"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},".er-button"),s("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"margin-right"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"demo"'),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"default"'),s("span",{style:{color:"#24292E"}},">default</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}},">primary</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"plain"'),s("span",{style:{color:"#24292E"}},">plain</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"gray"'),s("span",{style:{color:"#24292E"}},">gray</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"hr"),s("span",{style:{color:"#24292E"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"demo"'),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"large"'),s("span",{style:{color:"#24292E"}},">large</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"middle"'),s("span",{style:{color:"#24292E"}},">middle</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"small"'),s("span",{style:{color:"#24292E"}},">small</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"mini"'),s("span",{style:{color:"#24292E"}},">mini</"),s("span",{style:{color:"#22863A"}},"er-button"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".demo"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},".er-button"),s("span",{style:{color:"#24292E"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"margin-right"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),G=v("",3),ss=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components-docs/button.md","filePath":"components-docs/button.md"}'),K={name:"components-docs/button.md"},os=Object.assign(K,{setup(l){return(t,e)=>(c(),E("div",null,[J,L,Q,W,n(g(N),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo%22%3E%0A%20%20%20%20%3Cer-button%20type%3D%22default%22%3Edefault%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22primary%22%3Eprimary%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22plain%22%3Eplain%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22gray%22%3Egray%3C%2Fer-button%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Chr%20%2F%3E%0A%20%20%3Cdiv%20class%3D%22demo%22%3E%0A%20%20%20%20%3Cer-button%20type%3D%22primary%22%20size%3D%22large%22%3Elarge%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22primary%22%20size%3D%22middle%22%3Emiddle%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22primary%22%20size%3D%22small%22%3Esmall%3C%2Fer-button%3E%0A%20%20%20%20%3Cer-button%20type%3D%22primary%22%20size%3D%22mini%22%3Emini%3C%2Fer-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.demo%20.er-button%20%7B%0A%20%20margin-right%3A%2020px%3B%0A%20%20margin-bottom%3A%2020px%3B%0A%7D%0A%3C%2Fstyle%3E",component:"CodePreview"},{code:a(()=>[Z]),default:a(()=>[n(O)]),_:1}),G]))}});export{ss as __pageData,os as default};