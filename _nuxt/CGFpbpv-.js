import $ from"./Cons2R40.js";import{_ as v}from"./DkJKgkKk.js";import{d as h,a2 as u,a3 as g,s as b,c as s,e as c,f as n,F as p,P as d,R as x,a4 as k,h as _,a5 as w,m as B}from"./MtVcC9uU.js";import{_ as C}from"./Csv76BQ4.js";import"./9ahBZV6v.js";import"./BAZCdM71.js";import"./C-v3KzvZ.js";import"./Ca64iF7B.js";import"./CntTYSco.js";const P={class:"space-y-4"},R=n("h3",{class:"font-bold md:text-lg text-gray-700 dark:text-gray-200"}," Projects ",-1),A={class:"space-y-4"},N={class:"flex items-center justify-end mt-4 text-sm"},L=h({__name:"List",async setup(y){let t,e;const{data:a}=([t,e]=u(()=>g("projects-home",()=>b("/projects").limit(3).find())),t=await t,e(),t),i=["bg-blue-100","bg-gray-100","bg-gray-800","bg-purple-300","bg-purple-950","bg-amber-700","bg-green-200","bg-yellow-200","bg-yellow-500","bg-yellow-800","bg-yellow-900","bg-slate-300","bg-slate-600","bg-red-100","bg-red-600","bg-blue-100","bg-pink-100","bg-gradient-to-tr from-yellow-200 to-blue-200","bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200"];return(f,m)=>{const r=v,l=w;return s(),c("div",P,[R,n("div",A,[(s(!0),c(p,null,d(k(a),(o,j)=>(s(),x(r,{key:j,project:o},null,8,["project"]))),128))]),n("div",N,[_(l,{label:"All Projects →",to:"/projects",variant:"link",color:"black"})]),(s(),c(p,null,d(i,o=>n("span",{class:"hidden",key:o})),64))])}}}),U={class:"space-y-4"},D=n("h3",{class:"font-bold md:text-lg text-gray-700 dark:text-gray-200"}," Recent articles ",-1),F={class:"space-y-4"},V={class:"flex items-center justify-end mt-4 text-sm"},q=h({__name:"Recent",async setup(y){let t,e;const{data:a}=([t,e]=u(()=>g("blog-recent",()=>b("/blog").where({title:{$ne:"Blog"}}).sort({published:-1}).limit(3).find())),t=await t,e(),t);return(i,f)=>{const m=C,r=w;return s(),c("div",U,[D,n("div",F,[(s(!0),c(p,null,d(k(a),(l,o)=>(s(),x(m,{key:o,article:l},null,8,["article"]))),128))]),n("div",V,[_(r,{label:"All articles →",to:"/blog",variant:"link",color:"black"})])])}}}),E={class:"min-h-screen space-y-6"},S={__name:"index",async setup(y){let t,e;const a=B(),{data:i}=([t,e]=u(()=>g("seo",()=>b("/seo").findOne())),t=await t,e(),t);return{...i.value,url:a.public.baseUrl,siteName:a.public.ownerName},(f,m)=>{const r=$,l=L,o=q;return s(),c("main",E,[_(r,{path:"/"}),_(l,{class:"mt-2"}),_(o,{class:"mt-2"})])}}};export{S as default};
