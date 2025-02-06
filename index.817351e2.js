function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},o={},a=t.parcelRequire94c2;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire94c2=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["9vqfN","index.817351e2.js","91Wz9","location.90ee9b9f.svg","aHNTs","rectangle.90ee9b9f.svg"]'));const r=async(e=0,t=150)=>{try{let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);let o=await n.json();return console.log(o),o}catch(e){throw console.error("Error fetching events:",e),e}},s=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})};var c={};c=new URL("location.90ee9b9f.svg",import.meta.url).toString();var i={};i=new URL("rectangle.90ee9b9f.svg",import.meta.url).toString();const l=t=>{let n=document.getElementById("event-container");n.innerHTML="",t.forEach(t=>{let o=document.createElement("div");o.classList.add("event-container"),o.innerHTML=`
      <svg class="rectangle-icon">
        <use href="${e(i)}#rectangle"></use>
      </svg>  
      <svg class="rectangle-icon desktop">
        <use href="${e(i)}#rectangle-desktop"></use>
      </svg>
      <img
        src="${t.images[0].url}"
        alt="event picture"
        class="img-event"
      />
      <div class="info-container">
        <p class="event-title">${t.name}</p>
        <p class="event-date">${t.dates.start.localDate}</p>
        <div class="location-container">
          <svg class="location-icon">
            <use href="${e(c)}#location-icon"></use>
          </svg>
          <p class="event-location">${t._embedded.venues[0].name}</p>
        </div>
      </div>`,n.appendChild(o)})};let d=1;const u=document.getElementById("pagination-container"),g=e=>{u.innerHTML=`
    <button id="prev-btn" ${1===d?"disabled":""}>
    ${d}
    </button>
    <button class="num-pagination">
    ${d+1}</button><button class="num-pagination">
    ${d+2}</button><button class="num-pagination">
    ${d+3}</button><button class="num-pagination">
    ${d+4}</button><button class="num-pagination">
    ${d+5}</button>
    <button id="next-btn" ${d===e?"disabled":""}>
    Next
    </button>
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(d=t,p())})}),document.querySelector("#prev-btn").onclick=()=>{d>1&&(d--,p())},document.querySelector("#next-btn").onclick=()=>{d<e&&(d++,p())}};let v=[],m=[];const p=()=>{let e=m.length?m:v,t=Math.ceil(e.length/10),n=(d-1)*10;l(e.slice(n,n+10)),g(t)},b=e=>{v=e,m=[],d=1,p()},f=e=>{m=e,d=1,p()},h=e=>{let t=document.getElementById("choices"),n=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let n=document.createElement("option");n.value=e.dates.timezone,n.textContent=e.dates.timezone,t.appendChild(n)}),t.addEventListener("change",t=>{let n=t.target.value;n?f(e.filter(e=>e.dates.timezone===n)):b(e)}),n.destroy(),n=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{s();let e=(await r())._embedded.events;console.log("ev",e),b(e),h(e)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.817351e2.js.map
