import{a as f,u as i}from"./darkMode.278e3beb.js";import{b as d,B as x,C as b,o as e,a as n,e as s,u,t as _,w as g,H as j,G as k,i as y,j as v,c as w,l as C}from"./entry.ed983199.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import{u as B}from"./useStrapi.256e032e.js";const M={class:"card text-black dark:text-gray-400 bg-black bg-opacity-20"},P={class:"img"},D=["src"],L={class:"body"},N={class:"title"},S={class:"intro"},V=d({__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(a){const t=a,o=f(),c=x(()=>o.value||t.project.attributes.splash.light.data===null?i(t.project.attributes.splash.dark.data.attributes.url):i(t.project.attributes.splash.light.data.attributes.url));return b([c],()=>{console.log("Mode changed")}),(p,l)=>(e(),n("div",M,[s("div",P,[s("img",{class:"max-h-full",src:u(c)},null,8,D)]),s("div",L,[s("h2",N,_(a.project.attributes.name),1),s("p",S,_(a.project.attributes.intro),1)])]))}});const q=$(V,[["__scopeId","data-v-4a9c7330"]]),A={class:"flex flex-col gap-y-4 items-left justify-center max-w-7xl"},E=s("h1",{class:"text-black dark:text-white text-4xl sm:text-5xl font-semibold"}," List of Projects ",-1),F={id:"project-cards",class:"columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 w-full"},K=d({__name:"projects",async setup(a){let t,o;const{find:c}=B(),l=([t,o]=g(()=>c("projects",{populate:["splash.light","splash.dark"]})),t=await t,o(),t).data;return(G,H)=>{const m=q,h=C;return e(),n("div",A,[E,s("div",F,[(e(!0),n(j,null,k(u(l),r=>(e(),n("div",{key:r.id,class:"break-after-avoid animated"},[y(h,{to:`/project/${r.id}`,class:"w-full"},{default:v(()=>[(e(),w(m,{key:r.id,project:r},null,8,["project"]))]),_:2},1032,["to"])]))),128))])])}}});export{K as default};
