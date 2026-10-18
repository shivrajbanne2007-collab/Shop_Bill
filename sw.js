const C="shopbill-v2";
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!="GET")return;const u=new URL(e.request.url),cdn=u.hostname=="www.gstatic.com"||u.hostname=="cdnjs.cloudflare.com";
if(!cdn&&u.origin!=location.origin)return;
const keep=r=>{if(r&&(r.ok||r.type=="opaque")){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r};
e.respondWith(cdn?caches.match(e.request).then(h=>h||fetch(e.request).then(keep)):fetch(e.request).then(keep).catch(()=>caches.match(e.request)))});
