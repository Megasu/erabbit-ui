import{ak as i,d as u,H as c,g as l}from"./framework.f9b231f7.js";function a(e){const t=`er-${e}`;return[t,(...o)=>{const r=[];return o&&o.forEach(s=>{if(s)return/^__/.test(s)?r.push(`${t}${s}`):r.push(`${t}--${s}`)}),r.join(" ")}]}function m(e){return typeof e=="number"||/^\d+(\.\d+)?$/.test(e)}function h(e){const t=i(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}function S(e,t){const n={...e};return t.forEach(o=>delete n[o]),n}const d={type:{type:String,default:"default"},size:{type:String,default:"middle"}},[p,f]=a("button"),y=u({name:"ErButton",props:d,setup(e,{slots:t}){return()=>{var n;return c("button",{class:[p,"ellipsis",f(e.size,e.type)]},[(n=t.default)==null?void 0:n.call(t)])}}}),v=y,[b,$]=a("icon"),N={name:{type:String,default:""},size:{type:[Number,String],default:"1em"},color:{type:String,default:""}},z=u({name:"ErIcon",props:N,setup(e){return()=>{const t=l(()=>({fontSize:m(e.size)?`${e.size}px`:e.size,color:e.color||void 0}));return c("i",{class:[b,$(e.name)],style:t.value},null)}}}),E=z;export{v as B,E as I,a as c,h as m,S as o};