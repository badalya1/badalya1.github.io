import{M as o}from"./entry.48a430b6.js";const d=()=>{let e=o("darkMode",()=>!0);return typeof window>"u"||(console.log("Calculating dark mode"),e.value=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{e.value=a.matches})),e};export{d as u};
