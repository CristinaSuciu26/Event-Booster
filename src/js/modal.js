export const modal = (events) => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");
  const modalContent = document.getElementById("modal-content");

  const eventDetailsContainer = document.createElement("div");
  modalContent.appendChild(eventDetailsContainer);

  document.addEventListener("click", (e) => {
    const eventContainer = e.target.closest(".event-container");

    if (eventContainer) {
      modal.style.display = "block";

      // Accessing data attributes directly
      const imageUrl = eventContainer.dataset.imageUrl;
      const title = eventContainer.dataset.title;
      const description = eventContainer.dataset.description;
      const localDate = eventContainer.dataset.date;
      const localTime = eventContainer.dataset.time;
      const timezone = eventContainer.dataset.timezone;
      const location = eventContainer.dataset.location;
      const name = eventContainer.dataset.name;
      const maxPrice = eventContainer.dataset.maxprice;
      const minPrice = eventContainer.dataset.minprice;
      const buyTicket = eventContainer.dataset.buyticket;

      eventDetailsContainer.innerHTML = "";

      // Set new event details
      eventDetailsContainer.innerHTML = `

      <div class="modal-wrapper">
        <img class="img-modal" src="${imageUrl}" alt="${title}" />
    
        <div class="modal-content-wrapper">
          <div class="header-modal">
            <img class="large-img" src="${imageUrl}" alt="${title}" />
            <div class="event-details"> 
              <h2 class="modal-headings">INFO</h2>
              <p class="event-info tablet">${title}</p>
              <p class="event-info tablet">${description}</p>
    
              <h2 class="modal-headings">WHEN</h2>
              <p class="event-info tablet">${localDate} at ${localTime} (${timezone})</p>
            </div>
          </div>
    
          <div class="container">
            <div class="info-section">
              <h2 class="modal-headings">WHERE</h2>
              <p class="event-info">${location} (${timezone})</p>
    
              <h2 class="modal-headings">WHO</h2>
              <p class="event-info">${name}</p>
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
              <p class="event-info price">VIP ${maxPrice}</p>
            </div>
               <a href="${buyTicket}" target="_blank">
            <button class="buy-tickets-btn">BUY TICKETS</button>
            </a>
          </div>
    
          <div>
            <div class="price-wrapper">
              <svg class="barcode-icon"></svg>
              <p class="event-info price">Standard ${minPrice}</p>
            </div>
           <a href="${buyTicket}" target="_blank">
              <button class="buy-tickets-btn">BUY TICKETS</button>
           </a>
          </div>
    </div> 
        </div>
      </div>
    `;
    }
    if (eventContainer) {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    if (e.target === closeBtn || e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
};
