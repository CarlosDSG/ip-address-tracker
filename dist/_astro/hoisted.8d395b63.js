import"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";const u=(t,e)=>{/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)&&t.length>0?(e.disabled=!1,e.classList.remove("bg-gray-400"),e.classList.add("bg-black")):(e.disabled=!0,e.classList.remove("bg-black"),e.classList.add("bg-gray-400"))},h=async()=>(await fetch("https://api.ipify.org/?format=json")).json(),b=async t=>{const a=await(await fetch(`https://ipinfo.io/${t}?token=9b3fa73dd65477`)).json();return{ip:a.ip,city:a.city,isp:a.org}},k=async t=>(await(await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${t}`)).json()).location.timezone,x=async t=>{const e={method:"GET"};try{const i=await(await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=1352261990424b049e19beb1045faa8a&ip_address=${t}`,e)).json();return{regionCode:i.region_iso_code,postalCode:i.postal_code,latitude:i.latitude,longitude:i.longitude}}catch(a){console.error(a)}};let s=null;const v=(t=51.505,e=-.09)=>(s=L.map("map").setView([t,e],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),s),I=(t=51.505,e=51.505)=>{s&&(s.setView([t,e],13),s.marker?s.marker.setLatLng([t,e]):s.marker=L.marker([t,e]).addTo(s))},E=({ip:t,city:e,regionCode:a,postalCode:i,time:n,isp:o})=>`
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">IP ADDRESS</h6>
            <p class="font-bold">${t}</p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">LOCATION</h6>
            <p class="font-bold">${e}, ${a} ${i} </p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">TIMEZONE</h6>
            <p class="font-bold">UTC ${n}</p>
        </li>
        <li>
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">ISP</h6>
            <p class="font-bold">${o}</p>
        </li>
    `,c=document.getElementById("data-list"),d=async t=>{const{ip:e,city:a,isp:i}=await b(t),n=await k(t),{regionCode:o,postalCode:r,latitude:y,longitude:f}=await x(t),w=E({ip:e,city:a,regionCode:o,postalCode:r,time:n,isp:i});I(y,f),c.innerHTML=w,window.innerWidth>=640?c.style.display="flex":c.style.display="block"},p=document.getElementById("get-ip"),l=document.getElementById("ip-input"),m=document.getElementById("data-list");let g=null;(async()=>(g||(g=v()),window.addEventListener("load",async t=>{t.preventDefault();let e=await h();d(e.ip)}),l.addEventListener("keyup",()=>u(l.value,p)),p.addEventListener("click",async t=>{t.preventDefault(),d(l.value)})))();document.addEventListener("click",t=>{m.contains(t.target)||(m.style.display="none")});
