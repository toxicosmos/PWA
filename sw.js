if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),f={module:{uri:s},exports:t,require:c};i[s]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-5fc434c9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"images/icono.png",revision:"0709cbdcb113cb12fc32ee05817568bf"},{url:"images/principal-horizontal.png",revision:"688431d1fd27dead61081ffe700e9593"},{url:"index.html",revision:"9a1928a397d57f90861f332f5b9f9cd3"},{url:"manifest.json",revision:"55c8793c9b9774ded2c5775f9916ddec"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map