const e=async(e=0,t=150)=>{try{let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);let a=await n.json();return console.log(a),a}catch(e){throw console.error("Error fetching events:",e),e}},t=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})},n=e=>{let t=document.getElementById("modal"),n=document.getElementById("close-modal"),a=document.getElementById("modal-content"),o=document.createElement("div");a.appendChild(o),document.addEventListener("click",e=>{let a=e.target.closest(".event-container");if(a){t.style.display="block";let e=a.dataset.imageUrl,n=a.dataset.title,i=a.dataset.description;o.innerHTML="",o.innerHTML=`
          <img src="${e}" alt="${n}" class="img-event" />
          <h2>${n}</h2>
          <p>${i}</p>
        `}e.target===n&&(t.style.display="none"),e.target===t&&(t.style.display="none")})},a=e=>{let t=document.getElementById("event-container");t.innerHTML="",e.forEach(e=>{let n=document.createElement("div");n.classList.add("event-container"),n.dataset.imageUrl=e.images[0].url,n.dataset.title=e.name,n.dataset.description=e.description||"No description available",n.innerHTML=`
  
    <div class="image-wrapper" >
     
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
      </div>`,t.appendChild(n)})};let o=1;const i=document.getElementById("pagination-container"),s=e=>{i.innerHTML=`
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
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(o=t,d())})}),document.querySelector("#prev-btn").onclick=()=>{o>1&&(o--,d())},document.querySelector("#next-btn").onclick=()=>{o<e&&(o++,d())}};let l=[],c=[];const d=()=>{let e=c.length?c:l,t=Math.ceil(e.length/10),n=(o-1)*10;a(e.slice(n,n+10)),s(t)},r=e=>{l=e,c=[],o=1,d()},m=e=>{c=e,o=1,d()},u=e=>{let t=document.querySelector(".input-container"),n=document.getElementById("event-container");t.innerHTML=`
      <input type="text" placeholder="Start searching" id="search-input" />
      <div class="search-icon"></div>
    `,document.getElementById("search-input").addEventListener("input",t=>{let o=t.target.value.toLowerCase(),i=e.filter(e=>e.name.toLowerCase().includes(o));if(n.innerHTML="",!i.length){let e=document.createElement("div");e.classList.add("newContainer"),e.textContent="No events found",n.appendChild(e),document.getElementById("pagination-container").innerHTML="";return}a(i),r(i)})},p=e=>{let t=document.getElementById("choices"),n=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let n=document.createElement("option");n.value=e.dates.timezone,n.textContent=e.dates.timezone,t.appendChild(n)}),t.addEventListener("change",t=>{let n=t.target.value;n?m(e.filter(e=>e.dates.timezone===n)):r(e)}),n.destroy(),n=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{t();let a=(await e())._embedded.events;console.log("ev",a),u(a),n(a),r(a),p(a)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.9f76a845.js.map
