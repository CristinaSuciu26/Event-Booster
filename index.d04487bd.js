const e=async(e=0,t=150)=>{try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3&page=${e}&size=${t}`);if(!a.ok)throw Error(`HTTP error! Status: ${a.status}`);let n=await a.json();return console.log(n),n}catch(e){throw console.error("Error fetching events:",e),e}},t=()=>{window.addEventListener("load",()=>{let e=document.getElementById("loader"),t=document.getElementById("content");setTimeout(()=>{e.style.display="none",t.style.display="block"},1e3)})},a=e=>{let t=document.getElementById("modal"),a=document.getElementById("close-modal"),n=document.getElementById("modal-content"),s=document.createElement("div");n.appendChild(s),document.addEventListener("click",e=>{let n=e.target.closest(".event-container");if(n){t.style.display="block";let e=n.dataset.imageUrl,a=n.dataset.title,i=n.dataset.description,o=n.dataset.date,d=n.dataset.time,c=n.dataset.timezone,l=n.dataset.location,r=n.dataset.name,m=n.dataset.maxprice,v=n.dataset.minprice,p=n.dataset.buyticket;s.innerHTML="",s.innerHTML=`

      <div class="modal-wrapper">
        <img class="img-modal" src="${e}" alt="${a}" />
    
        <div class="modal-content-wrapper">
          <div class="header-modal">
            <img class="large-img" src="${e}" alt="${a}" />
            <div class="event-details"> 
              <h2 class="modal-headings">INFO</h2>
              <p class="event-info tablet">${a}</p>
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
               <a href="${p}" target="_blank">
            <button class="buy-tickets-btn">BUY TICKETS</button>
            </a>
          </div>
    
          <div>
            <div class="price-wrapper">
              <svg class="barcode-icon"></svg>
              <p class="event-info price">Standard ${v}</p>
            </div>
           <a href="${p}" target="_blank">
              <button class="buy-tickets-btn">BUY TICKETS</button>
           </a>
          </div>
    </div> 
        </div>
      </div>
    `}n&&(t.style.display="block",document.body.style.overflow="hidden"),(e.target===a||e.target===t)&&(t.style.display="none",document.body.style.overflow="auto")})},n=e=>{let t=document.getElementById("event-container");t.innerHTML="",e.forEach(e=>{let a=document.createElement("div");a.classList.add("event-container"),a.dataset.imageUrl=e.images[0]?.url||"",a.dataset.title=e.name,a.dataset.description=e.promoter?.description||"No description available",a.dataset.date=e.dates.start.localDate,a.dataset.time=e.dates.start.localTime,a.dataset.timezone=e.dates.timezone,a.dataset.location=e._embedded.venues[0]?.name||"Unknown Location",a.dataset.name=e.name,a.dataset.maxprice=e.priceRanges?.[0]?.max||"Price not available",a.dataset.minprice=e.priceRanges?.[0]?.min||"Price not available",a.dataset.buyticket=e.url,a.innerHTML=`
  
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
      </div>`,t.appendChild(a)})};let s=1;const i=document.getElementById("pagination-container"),o=e=>{i.innerHTML=`
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
  `,document.querySelectorAll(".num-pagination").forEach(e=>{e.addEventListener("click",e=>{let t=parseInt(e.target.textContent,10);isNaN(t)||(s=t,l())})}),document.querySelector("#prev-btn").onclick=()=>{s>1&&(s--,l())},document.querySelector("#next-btn").onclick=()=>{s<e&&(s++,l())}};let d=[],c=[];const l=()=>{let e=c.length?c:d,t=Math.ceil(e.length/10),a=(s-1)*10;n(e.slice(a,a+10)),o(t)},r=e=>{d=e,c=[],s=1,l()},m=e=>{c=e,s=1,l()},v=e=>{let t=document.querySelector(".input-container"),a=document.getElementById("event-container");t.innerHTML=`
      <input type="text" placeholder="Start searching" id="search-input" />
      <div class="search-icon"></div>
    `,document.getElementById("search-input").addEventListener("input",t=>{let s=t.target.value.toLowerCase(),i=e.filter(e=>e.name.toLowerCase().includes(s));if(a.innerHTML="",!i.length){let e=document.createElement("div");e.classList.add("newContainer"),e.textContent="No events found",a.appendChild(e),document.getElementById("pagination-container").innerHTML="";return}n(i),r(i)})},p=e=>{let t=document.getElementById("choices"),a=new Choices(t);e.filter(e=>e.dates.timezone).forEach(e=>{let a=document.createElement("option");a.value=e.dates.timezone,a.textContent=e.dates.timezone,t.appendChild(a)}),t.addEventListener("change",t=>{let a=t.target.value;a?m(e.filter(e=>e.dates.timezone===a)):r(e)}),a.destroy(),a=new Choices(t)};document.addEventListener("DOMContentLoaded",async()=>{try{t();let n=(await e())._embedded.events;console.log("ev",n),v(n),a(n),r(n),p(n)}catch(e){console.error("Error fetching events:",e)}});
//# sourceMappingURL=index.d04487bd.js.map
