export const displayEvents = (events) => {
  const eventsContainer = document.getElementById("event-container");
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventsCard = document.createElement("div");
    eventsCard.classList.add("event-container");

    eventsCard.dataset.imageUrl = event.images[0]?.url || "";
    eventsCard.dataset.title = event.name;
    eventsCard.dataset.description =
      event.promoter?.description || "No description available";
    eventsCard.dataset.date = event.dates.start.localDate;
    eventsCard.dataset.time = event.dates.start.localTime;
    eventsCard.dataset.timezone = event.dates.timezone;
    eventsCard.dataset.location = event._embedded.venues[0]?.name || "Unknown Location";
    eventsCard.dataset.name = event.name;
    eventsCard.dataset.maxprice = event.priceRanges?.[0]?.max || "Price not available";
    eventsCard.dataset.minprice = event.priceRanges?.[0]?.min || "Price not available";
    eventsCard.dataset.buyticket = event.url;

    eventsCard.innerHTML = `
  
    <div class="image-wrapper" >
     
      <svg class="rectangle-icon">
      </svg>  
      <svg class="rectangle-icon desktop"></svg>
   
      <img

        src="${event.images[0].url}"
        alt="event picture"
        class="img-event"
      />
      </div>
      <div class="info-container">
        <p class="event-title">${event.name}</p>
        <p class="event-date">${event.dates.start.localDate}</p>
        <div class="location-container">
          <svg class="location-icon"></svg>
          <p class="event-location">${event._embedded.venues[0].name}</p>
        </div>
      </div>`;
    eventsContainer.appendChild(eventsCard);
  });
};
