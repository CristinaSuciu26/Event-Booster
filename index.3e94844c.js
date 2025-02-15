const e=async(e=0,t=150)=>{try{let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!n.ok)throw Error(`HTTP error! Status: ${n.status}`);let a=await n.json();return console.log(a),a}catch(e){throw console.error("Error fetching events:",e),e}},t=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})},n=e=>{let t=document.getElementById("modal"),n=document.getElementById("close-modal"),a=document.getElementById("modal-content"),s=document.createElement("div");a.appendChild(s),document.addEventListener("click",e=>{let a=e.target.closest(".event-container");if(a){t.style.display="block";let e=a.dataset.imageUrl,n=a.dataset.title,i=a.dataset.description,o=a.dataset.date,d=a.dataset.time,c=a.dataset.timezone,l=a.dataset.location,r=a.dataset.name,m=a.dataset.maxprice,p=a.dataset.minprice;s.innerHTML="",s.innerHTML=`

      <div class="modal-wrapper">
        <img class="img-modal" src="${e}" alt="${n}" />
    
        <div class="modal-content-wrapper">
          <div class="header-modal">
            <img class="large-img" src="${e}" alt="${n}" />
            <div class="event-details"> 
              <h2 class="modal-headings">INFO</h2>
              <p class="event-info tablet">${n}</p>
              <p class="event-info tablet">${i}</p>
    
              <h2 class="modal-headings">WHEN</h2>
              <p class="event-info tablet">${o} at ${d} (${c})</p>
            </div>
          </div>
    
          <div class="container">
            <div class="info-section">
              <h2 class="modal-headings">WHERE</h2>
              <p class="event-info">${l} (${c})</p>
    
              <h2 class="modal-headings">WHO</h2>
              <p class="event-info">${r}</p>
            </div>
            <div class="price-details">
              <h2 class="modal-headings">PRICES</h2>
              <div class="price-section"></div>
            </div>
          </div>
    

          <div  class="buttons-wrapper">
          <div>
            <div class="price-wrapper">
              <svg class="barcode-icon"></svg>
              <p class="event-info price">VIP ${m}</p>
            </div>
            <button class="buy-tickets-btn">BUY TICKETS</button>
          </div>
    
          <div>
            <div class="price-wrapper">
              <svg class="barcode-icon"></svg>
              <p class="event-info price">Standard ${p}</p>
            </div>
            <button class="buy-tickets-btn">BUY TICKETS</button>
          </div>
    </div>
          <div class="more-btn-wrapper">
            <button class="more-btn">MORE FROM THIS AUTHOR</button>
          </div>
    
        </div>
      </div>
    `}e.target===n&&(t.style.display="none"),e.target===t&&(t.style.display="none")})},a=e=>{let t=document.getElementById("event-container");t.innerHTML="",e.forEach(e=>{let n=document.createElement("div");n.classList.add("event-container"),n.dataset.imageUrl=e.images[0]?.url||"",n.dataset.title=e.name,n.dataset.description=e.promoter?.description||"No description available",n.dataset.date=e.dates.start.localDate,n.dataset.time=e.dates.start.localTime,n.dataset.timezone=e.dates.timezone,n.dataset.location=e._embedded.venues[0]?.name||"Unknown Location",n.dataset.name=e.name,n.dataset.maxprice=e.priceRanges?.[0]?.max||"Price not available",n.dataset.minprice=e.priceRanges?.[0]?.min||"Price not available",n.innerHTML=`
  
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
      </div>`,t.appendChild(n)})};let s=1;const i=document.getElementById("pagination-container"),o=e=>{i.innerHTML=`
    <button id="prev-btn" ${1===s?"disabled":""}>
    ${s}
    </button>
    <button class="num-pagination">
    ${s+1}</button><button class="num-pagination">
    ${s+2}</button><button class="num-pagination">
    ${s+3}</button><button class="num-pagination">
    ${s+4}</button><button class="num-pagination">
    ${s+5}</button>
    <button id="next-btn" ${s===e?"disabled":""}>
    Next
    </button>
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(s=t,l())})}),document.querySelector("#prev-btn").onclick=()=>{s>1&&(s--,l())},document.querySelector("#next-btn").onclick=()=>{s<e&&(s++,l())}};let d=[],c=[];const l=()=>{let e=c.length?c:d,t=Math.ceil(e.length/10),n=(s-1)*10;a(e.slice(n,n+10)),o(t)},r=e=>{d=e,c=[],s=1,l()},m=e=>{c=e,s=1,l()},p=e=>{let t=document.querySelector(".input-container"),n=document.getElementById("event-container");t.innerHTML=`
      <input type="text" placeholder="Start searching" id="search-input" />
      <div class="search-icon"></div>
    `,document.getElementById("search-input").addEventListener("input",t=>{let s=t.target.value.toLowerCase(),i=e.filter(e=>e.name.toLowerCase().includes(s));if(n.innerHTML="",!i.length){let e=document.createElement("div");e.classList.add("newContainer"),e.textContent="No events found",n.appendChild(e),document.getElementById("pagination-container").innerHTML="";return}a(i),r(i)})},v=e=>{let t=document.getElementById("choices"),n=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let n=document.createElement("option");n.value=e.dates.timezone,n.textContent=e.dates.timezone,t.appendChild(n)}),t.addEventListener("change",t=>{let n=t.target.value;n?m(e.filter(e=>e.dates.timezone===n)):r(e)}),n.destroy(),n=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{t();let a=(await e())._embedded.events;console.log("ev",a),p(a),n(a),r(a),v(a)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.3e94844c.js.map
