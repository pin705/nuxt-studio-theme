const __vite__fileDeps=["./Cf_Xkvqn.js","./MtVcC9uU.js","./entry.B92tJVpQ.css","./C-v3KzvZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{m as f,s as m,ae as v,af as c,ag as g,ah as d,_ as l,ai as h,aj as _,d as y,ak as C,Z as w,q as P,A as $,a3 as N,ac as j,ad as r,E}from"./MtVcC9uU.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=m(e));const a=e.params(),s=t.experimental.stripQueryParameters?v(`/navigation/${`${c(a)}.${t.integrity}`}/${g(a)}.json`):v(`/navigation/${c(a)}.${t.integrity}.json`);if(d())return(await l(()=>import("./Cf_Xkvqn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:h(a),previewToken:_().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=C(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&P("dd-navigation").value){const{navigation:n}=$();return{navigation:n}}const{data:s}=await N(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=j(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),b=D;export{b as default};
