import"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";const g=(t,a)=>{/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)&&t.length>0?(a.disabled=!1,a.classList.remove("bg-gray-400"),a.classList.add("bg-black")):(a.disabled=!0,a.classList.remove("bg-black"),a.classList.add("bg-gray-400"))},y=async()=>await(await fetch("https://api.ipify.org/?format=json")).json(),f=async t=>{const e=await(await fetch(`https://ipinfo.io/${t}?token=9b3fa73dd65477`)).json();return{ip:e.ip,city:e.city,time:e.timezone,isp:e.org}},w=async t=>(await(await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${t}`)).json()).location.timezone,u=async t=>{const e=await(await fetch(`http://api.ipstack.com/${t}?access_key=061de896653a2cbfc3a0d29864d4ea9a`)).json();return{regionCode:e.region_code,latitude:e.latitude,longitude:e.longitude,postal:e.zip}};let s=null;const h=(t=51.505,a=-.09)=>(s=L.map("map").setView([t,a],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),s),b=(t,a)=>{s&&(s.setView([t,a],13),s.marker?s.marker.setLatLng([t,a]):s.marker=L.marker([t,a]).addTo(s))},k=({ip:t,city:a,regionCode:e,postalCode:i,time:n,isp:d})=>`
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">IP ADDRESS</h6>
            <p class="font-bold">${t}</p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">LOCATION</h6>
            <p class="font-bold">${a}, ${e} ${i} </p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">TIMEZONE</h6>
            <p class="font-bold">UTC ${n}</p>
        </li>
        <li>
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">ISP</h6>
            <p class="font-bold">${d}</p>
        </li>
    `,o=document.getElementById("data-list"),l=async t=>{const a=await f(t),e=await w(t),i=await u(t),n=k({ip:a.ip,city:a.city,regionCode:i.regionCode,postalCode:i.postal,time:e,isp:a.isp});b(i.latitude,i.longitude),o.innerHTML=n,window.innerWidth>=640?o.style.display="flex":o.style.display="block"},r=document.getElementById("get-ip"),c=document.getElementById("ip-input"),p=document.getElementById("data-list");let m=null;(async()=>(m||(m=h()),window.addEventListener("load",async t=>{t.preventDefault();let a=await y();l(a.ip)}),c.addEventListener("keyup",()=>g(c.value,r)),r.addEventListener("click",async t=>{t.preventDefault(),l(c.value)})))();document.addEventListener("click",t=>{p.contains(t.target)||(p.style.display="none")});
