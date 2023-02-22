import{u as B,a as k}from"./useStrapi.9dc2b03a.js";import{b as g,w as $,o as l,a as c,e as a,t as y,u as h,r as w,f as b,h as v,i as s,j as e,k as p,l as f}from"./entry.8cb68d28.js";import{_ as C}from"./nuxt-link.42401fe4.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const M={class:"flex flex-col gap-y-4 items-left justify-center"},N={class:"text-black tracking-wide dark:text-white text-4xl sm:text-5xl font-semibold"},R={class:"tracking-widest font-light"},T=g({__name:"IdentityName",async setup(i){var m;let t,n;const{findOne:o}=B(),{data:_}=([t,n]=$(()=>k("identity",()=>o("identity"))),t=await t,n(),t),u=(m=_.value)==null?void 0:m.data.attributes;return(x,r)=>(l(),c("div",M,[a("h1",N,y(h(u).name),1),a("p",R,y(h(u).headline),1)]))}}),D={class:"gradient-border"},H={class:"flex flex-col rounded-xl gap-y-4 px-6 sm:px-12 py-6 z-10"},I={class:"font-semibold text-2xl text-black dark:text-white"},S=g({__name:"CardButton",props:{gradientLeft:{type:String},gradientRight:{type:String}},setup(i){return(t,n)=>(l(),c("div",D,[a("div",H,[a("h2",I,[w(t.$slots,"header")]),w(t.$slots,"default")]),i.gradientLeft?(l(),c("div",{key:0,class:b(["gradient-left absolute left-0 inset-y-0 w-full bg-gradient-to-tr to-transparent rounded-xl transition-opacity duration-300",i.gradientLeft])},null,2)):v("",!0),i.gradientRight?(l(),c("div",{key:1,class:b(["gradient-right absolute right-0 inset-y-0 w-full bg-gradient-to-tl to-transparent rounded-xl transition-opacity duration-300",i.gradientRight])},null,2)):v("",!0)]))}});const V={},q={class:"grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px]"},A=a("p",{class:"mb-2"}," Here you will see lots of information about me. In return I would ask you to optionally leave your email, github or linkedin so I know who my guests are. ",-1),E=a("p",{class:"mb-2"}," Discover the list of project I worked with throughout the last 10 years. ",-1),G=a("p",{class:"mb-2"}," Dive into my collection of thought-provoking blog posts. ",-1),z=a("p",{class:"mb-2"}," Explore different way of using Nuxt features and get inspired with our list of examples. ",-1);function O(i,t){const n=S,o=C;return l(),c("div",q,[s(o,{to:"/projects",class:"col-span-2 lg:col-span-10 relative"},{default:e(()=>[s(n,{id:"get-started",gradientLeft:"from-yellow-400",gradientRight:"from-blue-400"},{header:e(()=>[p(" Welcome to my personal website ")]),default:e(()=>[A]),_:1})]),_:1}),s(o,{to:"/projects",class:"lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl relative items-center justify-center"},{default:e(()=>[s(n,{class:"gradient-border-rect",gradientRight:"from-yellow-400"},{header:e(()=>[p(" Projects ")]),default:e(()=>[E]),_:1})]),_:1}),s(o,{to:"/blog",class:"row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 text-black dark:text-white documentation-container rounded-xl relative items-center justify-center"},{default:e(()=>[s(n,{class:"gradient-border-square",gradientRight:"from-red-400"},{header:e(()=>[p(" Blog ")]),default:e(()=>[G]),_:1})]),_:1}),s(o,{to:"/resume",class:"lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl examples-container relative items-center justify-center"},{default:e(()=>[s(n,{class:"gradient-border-rect",gradientRight:"from-blue-400"},{header:e(()=>[p(" Resume ")]),default:e(()=>[z]),_:1})]),_:1})])}const P=j(V,[["render",O]]);if(typeof window>"u")throw new Error("The window object is not availible. Are you trying to run the module in NodeJS?");var F=window.DOMParser;const J={class:"relative w-full",id:"github-stats"},W=["innerHTML"],K={class:"flex justify-center py-4"},Q=["innerHTML"],U=g({__name:"GithubStats",async setup(i){let t,n;const{data:o,error:_}=([t,n]=$(async()=>k("contributions",async()=>(await fetch("https://github.com/users/badalya1/contributions")).text())),t=await t,n(),t),u=f(()=>o.value?new F().parseFromString(o.value,"text/html"):null),m=f(()=>{var r,d;return((d=(r=u.value)==null?void 0:r.querySelector("h2"))==null?void 0:d.innerHTML)??null}),x=f(()=>{var r,d;return((d=(r=u.value)==null?void 0:r.querySelector(".js-calendar-graph>svg"))==null?void 0:d.innerHTML)??null});return(r,d)=>{const L=S;return l(),c("div",J,[s(L,{class:"gradient-border-rect",gradientRight:"from-purple-400"},{header:e(()=>[a("span",{innerHTML:h(m)??""},null,8,W)]),default:e(()=>[a("div",K,[(l(),c("svg",{width:"717",innerHTML:h(x)??"",height:"112"},null,8,Q))])]),_:1})])}}});const X={},Y={id:"home-page",class:"flex flex-col gap-y-4 items-left justify-center max-w-[960px] w-full items-center"};function Z(i,t){const n=T,o=P,_=U;return l(),c("div",Y,[s(n,{class:"py-10"}),s(o),s(_)])}const ot=j(X,[["render",Z]]);export{ot as default};
