import"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";const y=(t,a)=>{/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)&&t.length>0?(a.disabled=!1,a.classList.remove("bg-gray-400"),a.classList.add("bg-black")):(a.disabled=!0,a.classList.remove("bg-black"),a.classList.add("bg-gray-400"))},g=async()=>await(await fetch("https://api.ipify.org/?format=json")).json(),f=async t=>{const e=await(await fetch(`https://ipinfo.io/${t}?token=9b3fa73dd65477`)).json();return{ip:e.ip,city:e.city,time:e.timezone,isp:e.org}},w=async t=>(await(await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${t}`)).json()).location.timezone,u=async t=>{const s=await(await fetch(`https://ip-address-tracker2023.netlify.app/.netlify/functions/proxy?ip=${t}`)).json();return{regionCode:s.region_code,latitude:s.latitude,longitude:s.longitude,postal:s.zip}};let i=null;const h=(t=51.505,a=-.09)=>(i=L.map("map").setView([t,a],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),i),x=(t=51.505,a=51.505)=>{i&&(i.setView([t,a],13),i.marker?i.marker.setLatLng([t,a]):i.marker=L.marker([t,a]).addTo(i))},I=({ip:t,city:a,regionCode:e,postalCode:s,time:n,isp:l})=>`
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">IP ADDRESS</h6>
            <p class="font-bold">${t}</p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">LOCATION</h6>
            <p class="font-bold">${a}, ${e} ${s} </p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">TIMEZONE</h6>
            <p class="font-bold">UTC ${n}</p>
        </li>
        <li>
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">ISP</h6>
            <p class="font-bold">${l}</p>
        </li>
    `,o=document.getElementById("data-list"),d=async t=>{const a=await f(t),e=await w(t),s=await u(t),n=I({ip:a.ip,city:a.city,regionCode:s.regionCode,postalCode:s.postal,time:e,isp:a.isp});x(locationIPData.latitude,locationIPData.longitude),o.innerHTML=n,window.innerWidth>=640?o.style.display="flex":o.style.display="block"},r=document.getElementById("get-ip"),c=document.getElementById("ip-input"),p=document.getElementById("data-list");let m=null;(async()=>(m||(m=h()),window.addEventListener("load",async t=>{t.preventDefault();let a=await g();d(a.ip)}),c.addEventListener("keyup",()=>y(c.value,r)),r.addEventListener("click",async t=>{t.preventDefault(),d(c.value)})))();document.addEventListener("click",t=>{p.contains(t.target)||(p.style.display="none")});
