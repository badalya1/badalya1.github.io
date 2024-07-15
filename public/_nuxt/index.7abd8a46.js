import{_ as v}from"./nuxt-img.3d0f0741.js";import{N as w}from"./nuxt-icon.6eef41ec.js";import{h as y,o as e,c as a,a as t,f as x,b as k,g as c,t as _,i as $,j as B,F as p,r as f,k as I}from"./entry.6a1cbea8.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{u as j,a as N}from"./useStrapi.a71ee9c9.js";const C={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},S=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-9-1 9-9m0 0v5m0-5h-5"},null,-1),V=[S];function A(o,s){return e(),a("svg",C,V)}const D={render(){return y(w,{icon:{render:A}})}},E=["href"],F={class:"img flex-none"},L={class:"flex flex-col grow"},O={class:"text-lg font-bold leading-6 align-top"},q={class:"text-sm"},G=x({__name:"BookmarkItem",props:{bookmark:{type:Object,required:!0}},setup(o){const n=o.bookmark.attributes.image.data.attributes.url;return(l,d)=>{const m=v;return e(),a("a",{class:"bookmark-container group",href:o.bookmark.attributes.url,target:"_blank"},[t("div",F,[k(m,{class:"abslute h-full",src:c(n)},null,8,["src"])]),t("div",L,[t("div",O,_(o.bookmark.attributes.name),1),t("div",q,_(o.bookmark.attributes.short_description),1)]),k(c(D),{height:"24",width:"24",filled:"",class:"text-inherit icon flex-none p-1 opacity-30 transition-all duration-400 group-hover:opacity-80"})],8,E)}}});const H=h(G,[["__scopeId","data-v-3133f86f"]]),M={class:"flex flex-col gap-y-4 items-left justify-center max-w-7xl w-full"},z={class:"w-full pt-4"},J=["id"],K={class:"text-black dark:text-white text-4xl sm:text-5xl font-semibold pb-4 md:pb-8"},P={class:"bookmark-table-container"},Q={class:"flex flex-col gap-1"},R=x({__name:"index",async setup(o){let s,n;const{findOne:l}=j(),{data:d,pending:m,refresh:T,error:U}=([s,n]=$(()=>N("bookmark-page",()=>l("bookmark-page",{populate:["bookmark_categories","bookmark_categories.bookmarks","bookmark_categories.bookmarks.image"]}))),s=await s,n(),s),b=B(()=>{var r;return((r=d.value)==null?void 0:r.data.attributes.bookmark_categories.data)??[]});return(r,W)=>{const g=H;return e(),a("div",M,[t("div",z,[(e(!0),a(p,null,f(c(b),i=>(e(),a("div",{id:i.id},[t("h1",K,_(i.attributes.title),1),t("div",P,[t("div",Q,[(e(!0),a(p,null,f(i.attributes.bookmarks.data,u=>(e(),I(g,{bookmark:u,key:u.id},null,8,["bookmark"]))),128))])])],8,J))),256))])])}}});const ot=h(R,[["__scopeId","data-v-380e927a"]]);export{ot as default};