import"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";const g=(t,e)=>{/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)&&t.length>0?(e.disabled=!1,e.classList.remove("bg-gray-400"),e.classList.add("bg-black")):(e.disabled=!0,e.classList.remove("bg-black"),e.classList.add("bg-gray-400"))},y=async()=>await(await fetch("https://api.ipify.org/?format=json")).json(),f=async t=>{const a=await(await fetch(`https://ipinfo.io/${t}?token=9b3fa73dd65477`)).json();return{ip:a.ip,city:a.city,time:a.timezone,isp:a.org}},w=async t=>(await(await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${t}`)).json()).location.timezone,u=async t=>{const e={method:"GET"};try{const s=await(await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=1352261990424b049e19beb1045faa8a&ip_address=${t}`,e)).json();return{regionCode:s.region_iso_code,postalCode:s.postal_code,latitude:s.latitude,longitude:s.longitude}}catch(a){console.error(a)}};let i=null;const h=(t=51.505,e=-.09)=>(i=L.map("map").setView([t,e],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),i),b=(t=51.505,e=51.505)=>{i&&(i.setView([t,e],13),i.marker?i.marker.setLatLng([t,e]):i.marker=L.marker([t,e]).addTo(i))},I=({ip:t,city:e,regionCode:a,postalCode:s,time:o,isp:d})=>`
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">IP ADDRESS</h6>
            <p class="font-bold">${t}</p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">LOCATION</h6>
            <p class="font-bold">${e}, ${a} ${s} </p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">TIMEZONE</h6>
            <p class="font-bold">UTC ${o}</p>
        </li>
        <li>
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">ISP</h6>
            <p class="font-bold">${d}</p>
        </li>
    `,n=document.getElementById("data-list"),l=async t=>{const e=await f(t),a=await w(t),s=await u(t),o=I({ip:e.ip,city:e.city,regionCode:s.regionCode,postalCode:s.postalCode,time:a,isp:e.isp});b(s.latitude,s.longitude),n.innerHTML=o,window.innerWidth>=640?n.style.display="flex":n.style.display="block"},r=document.getElementById("get-ip"),c=document.getElementById("ip-input"),p=document.getElementById("data-list");let m=null;(async()=>(m||(m=h()),window.addEventListener("load",async t=>{t.preventDefault();let e=await y();l(e.ip)}),c.addEventListener("keyup",()=>g(c.value,r)),r.addEventListener("click",async t=>{t.preventDefault(),l(c.value)})))();document.addEventListener("click",t=>{p.contains(t.target)||(p.style.display="none")});
