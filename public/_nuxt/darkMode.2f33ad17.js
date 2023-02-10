import{m as h,G as a,R as d,b as y,p as g,S,E as w,C as b}from"./entry.9cc5ddf8.js";const z=()=>h().$img,p={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},k=e=>{const r=a(()=>({provider:e.provider,preset:e.preset})),n=a(()=>({width:d(e.width),height:d(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=a(()=>({...e.modifiers,width:d(e.width),height:d(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:r,attrs:n,modifiers:i}},M={...p,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},_=y({name:"NuxtImg",props:M,emits:["load"],setup:(e,r)=>{const n=z(),i=k(e),f=g(!1),o=a(()=>n.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:d(e.width),height:d(e.height)}})),m=a(()=>{const t=i.attrs.value;return e.sizes&&(t.sizes=o.value.sizes,t.srcset=o.value.srcset),t}),l=a(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||f.value)return!1;if(typeof t=="string")return t;const s=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return n(e.src,{...i.modifiers.value,width:s[0],height:s[1],quality:s[2]||50},i.options.value)}),u=a(()=>e.sizes?o.value.src:n(e.src,i.modifiers.value,i.options.value)),c=a(()=>l.value?l.value:u.value);if(e.preload){const t=Object.values(o.value).every(s=>s);S({link:[{rel:"preload",as:"image",...t?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:c.value}}]})}const v=g();return w(()=>{if(l.value){const t=new Image;t.src=u.value,t.onload=s=>{v.value.src=u.value,f.value=!0,r.emit("load",s)}}else v.value.onload=t=>{r.emit("load",t)}}),()=>b("img",{ref:v,key:c.value,src:c.value,...m.value,...r.attrs})}}),q=()=>{let e=g(!0);return typeof window>"u"||(e.value=!window||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{e.value=r.matches})),e};export{_,q as u};
