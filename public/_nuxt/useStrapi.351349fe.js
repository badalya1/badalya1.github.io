import{J as P,v,O as b,P as g,A as D,B as O,u as w,Q as x,R as B,S as E,U as C}from"./entry.721935ce.js";const S=()=>null;function M(...s){var m;const y=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(y);let[n,u,t={}]=s;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??S,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=P(),p=()=>a.isHydrating?a.payload.data[n]:a.static.data[n],o=()=>p()!==void 0;a._asyncData[n]||(a._asyncData[n]={data:v(p()??((m=t.default)==null?void 0:m.call(t))??null),pending:v(!o()),error:b(a.payload._errors,n)});const e={...a._asyncData[n]};e.refresh=e.execute=(i={})=>{if(a._asyncDataPromises[n]){if(i.dedupe===!1)return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if(i._initial&&o())return p();e.pending.value=!0;const f=new Promise((r,c)=>{try{r(u(a))}catch(_){c(_)}}).then(r=>{if(f.cancelled)return a._asyncDataPromises[n];let c=r;t.transform&&(c=t.transform(r)),t.pick&&(c=j(c,t.pick)),e.data.value=c,e.error.value=null}).catch(r=>{var c;if(f.cancelled)return a._asyncDataPromises[n];e.error.value=r,e.data.value=w(((c=t.default)==null?void 0:c.call(t))??null)}).finally(()=>{f.cancelled||(e.pending.value=!1,a.payload.data[n]=e.data.value,e.error.value&&(a.payload._errors[n]=x(e.error.value)),delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=f,a._asyncDataPromises[n]};const l=()=>e.refresh({_initial:!0}),d=t.server!==!1&&a.payload.serverRendered;{const i=B();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const r=i._nuxtOnBeforeMountCbs;i&&(g(()=>{r.forEach(c=>{c()}),r.splice(0,r.length)}),D(()=>r.splice(0,r.length)))}d&&a.isHydrating&&o()?e.pending.value=!1:i&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?i._nuxtOnBeforeMountCbs.push(l):t.immediate&&l(),t.watch&&O(t.watch,()=>e.refresh());const f=a.hook("app:data:refresh",r=>{if(!r||r.includes(n))return e.refresh()});i&&D(f)}const h=Promise.resolve(a._asyncDataPromises[n]).then(()=>e);return Object.assign(h,e),h}function j(s,y){const n={};for(const u of y)n[u]=s[u];return n}const T=()=>{const s=E();return C()!=="v4"&&console.warn("useStrapi4 is only available for v4"),{find:(o,e)=>s(`/${o}`,{method:"GET",params:e}),findOne:(o,e,l)=>{typeof e=="object"&&(l=e,e=void 0);const d=[o,e].filter(Boolean).join("/");return s(d,{method:"GET",params:l})},create:(o,e)=>s(`/${o}`,{method:"POST",body:{data:e}}),update:(o,e,l)=>{typeof e=="object"&&(l=e,e=void 0);const d=[o,e].filter(Boolean).join("/");return s(d,{method:"PUT",body:{data:l}})},delete:(o,e)=>{const l=[o,e].filter(Boolean).join("/");return s(l,{method:"DELETE"})}}},R=()=>T();export{M as a,R as u};
