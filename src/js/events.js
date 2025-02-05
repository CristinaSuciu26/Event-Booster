import iconLocation from "../../public/icons/location.svg";
import iconRectangle from "../../public/icons/rectangle.svg";

export const displayEvents = (events) => {
  const eventsContainer = document.getElementById("event-container");
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventsCard = document.createElement("div");
    eventsCard.classList.add("event-container");
    eventsCard.innerHTML = `
      <svg class="rectangle-icon">
        <use xlink:href="${iconRectangle}#rectangle"></use>
      </svg>
      <svg class="rectangle-icon desktop">
        <use xlink:href="${iconRectangle}#rectangle-desktop"></use>
      </svg>
      <img
        src="${event.images[0].url}"
        alt="event picture"
        class="img-event"
      />
      <div class="info-container">
        <p class="event-title">${event.name}</p>
        <p class="event-date">${event.dates.start.localDate}</p>
        <div class="location-container">
          <svg class="location-icon">
            <use xlink:href=${iconLocation}#location-icon"></use>
          </svg>
          <p class="event-location">${event._embedded.venues[0].name}</p>
        </div>
      </div>`;
    eventsContainer.appendChild(eventsCard);
  });
};
