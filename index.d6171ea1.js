const e=async(e=0,t=150)=>{try{let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);let o=await n.json();return console.log(o),o}catch(e){throw console.error("Error fetching events:",e),e}},t=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})},n=e=>{let t=document.getElementById("event-container");t.innerHTML="",e.forEach(e=>{let n=document.createElement("div");n.classList.add("event-container"),n.innerHTML=`
    <div class="image-wrapper">
      <svg class="rectangle-icon">
      </svg>  
      <svg class="rectangle-icon desktop"></svg>
      <img
        src="${e.images[0].url}"
        alt="event picture"
        class="img-event"
      />
      </div>
      <div class="info-container">
        <p class="event-title">${e.name}</p>
        <p class="event-date">${e.dates.start.localDate}</p>
        <div class="location-container">
          <svg class="location-icon"></svg>
          <p class="event-location">${e._embedded.venues[0].name}</p>
        </div>
      </div>`,t.appendChild(n)})};let o=1;const a=document.getElementById("pagination-container"),i=e=>{a.innerHTML=`
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
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(o=t,l())})}),document.querySelector("#prev-btn").onclick=()=>{o>1&&(o--,l())},document.querySelector("#next-btn").onclick=()=>{o<e&&(o++,l())}};let c=[],s=[];const l=()=>{let e=s.length?s:c,t=Math.ceil(e.length/10),a=(o-1)*10;n(e.slice(a,a+10)),i(t)},r=e=>{c=e,s=[],o=1,l()},d=e=>{s=e,o=1,l()},u=e=>{let t=document.querySelector(".input-container"),o=document.getElementById("event-container");t.innerHTML=`
      <input type="text" placeholder="Start searching" id="search-input" />
      <div class="search-icon"></div>
    `,document.getElementById("search-input").addEventListener("input",t=>{let a=t.target.value.toLowerCase(),i=e.filter(e=>e.name.toLowerCase().includes(a));if(o.innerHTML="",!i.length){let e=document.createElement("div");e.classList.add("newContainer"),e.textContent="No events found",o.appendChild(e),document.getElementById("pagination-container").innerHTML="";return}n(i),r(i)})},m=e=>{let t=document.getElementById("choices"),n=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let n=document.createElement("option");n.value=e.dates.timezone,n.textContent=e.dates.timezone,t.appendChild(n)}),t.addEventListener("change",t=>{let n=t.target.value;n?d(e.filter(e=>e.dates.timezone===n)):r(e)}),n.destroy(),n=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{t();let n=(await e())._embedded.events;console.log("ev",n),u(n),r(n),m(n)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.d6171ea1.js.map
