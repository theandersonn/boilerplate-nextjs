if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,r,n)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cYomFIQcchzbIVhbCSv8r/_buildManifest.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/cYomFIQcchzbIVhbCSv8r/_ssgManifest.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.bf7bf6c675ad8fe5e4e9.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.6af4c6f50ceb7cead7d8.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/framework.7e70a00882840d8b4939.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/main-e56b04ab79c4dc394d26.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/pages/_app-b6c9e67e4ca703f666bd.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/pages/_error-986b9ac52257fbcb5ebd.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/pages/index-effa7d527aea365dbb8c.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/polyfills-341edeffffa5f11282c4.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"cYomFIQcchzbIVhbCSv8r"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"2b19621eb00c338ee252b1c8dda19b2a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
