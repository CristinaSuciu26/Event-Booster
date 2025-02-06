const e=async(e=0,t=150)=>{try{let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);let o=await n.json();return console.log(o),o}catch(e){throw console.error("Error fetching events:",e),e}},t=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})},n=e=>{let t=document.getElementById("event-container");t.innerHTML="",e.forEach(e=>{let n=document.createElement("div");n.classList.add("event-container"),n.innerHTML=`
      <svg class="rectangle-icon">
        <use href="#rectangle"></use>
      </svg>  
      <svg class="rectangle-icon desktop">
        <use href="#rectangle-desktop"></use>
      </svg>
      <img
        src="${e.images[0].url}"
        alt="event picture"
        class="img-event"
      />
      <div class="info-container">
        <p class="event-title">${e.name}</p>
        <p class="event-date">${e.dates.start.localDate}</p>
        <div class="location-container">
          <svg class="location-icon">
            <use href="${iconLocation}#location-icon"></use>
          </svg>
          <p class="event-location">${e._embedded.venues[0].name}</p>
        </div>
      </div>`,t.appendChild(n)})};let o=1;const a=document.getElementById("pagination-container"),s=e=>{a.innerHTML=`
    <button id="prev-btn" ${1===o?"disabled":""}>
    ${o}
    </button>
    <button class="num-pagination">
    ${o+1}</button><button class="num-pagination">
    ${o+2}</button><button class="num-pagination">
    ${o+3}</button><button class="num-pagination">
    ${o+4}</button><button class="num-pagination">
    ${o+5}</button>
    <button id="next-btn" ${o===e?"disabled":""}>
    Next
    </button>
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(o=t,l())})}),document.querySelector("#prev-btn").onclick=()=>{o>1&&(o--,l())},document.querySelector("#next-btn").onclick=()=>{o<e&&(o++,l())}};let c=[],i=[];const l=()=>{let e=i.length?i:c,t=Math.ceil(e.length/10),a=(o-1)*10;n(e.slice(a,a+10)),s(t)},r=e=>{c=e,i=[],o=1,l()},d=e=>{i=e,o=1,l()},u=e=>{let t=document.getElementById("choices"),n=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let n=document.createElement("option");n.value=e.dates.timezone,n.textContent=e.dates.timezone,t.appendChild(n)}),t.addEventListener("change",t=>{let n=t.target.value;n?d(e.filter(e=>e.dates.timezone===n)):r(e)}),n.destroy(),n=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{t();let n=(await e())._embedded.events;console.log("ev",n),r(n),u(n)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.6bb2d0e0.js.map
