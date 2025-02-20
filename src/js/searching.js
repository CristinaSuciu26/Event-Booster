import { displayEvents } from "./events";
import { pagination } from "./pagination.js";

export const searchEvents = (events) => {
  const inputContainer = document.querySelector(".input-container");
  const eventsContainer = document.getElementById("event-container");

  inputContainer.innerHTML = `
      <input type="text" placeholder="Start searching" id="search-input" />
      <div class="search-icon"></div>
    `;

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();

    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(searchText)
    );

    eventsContainer.innerHTML = "";

    // If no events are found, show the "No events found" message
    if (!filteredEvents.length) {
      const newContainer = document.createElement("div");
      newContainer.classList.add("newContainer");
      newContainer.textContent = "No events found";
      eventsContainer.appendChild(newContainer);

      // Hide pagination controls when no events are found
      const paginationContainer = document.getElementById(
        "pagination-container"
      );
      paginationContainer.innerHTML = "";
      return;
    }

    displayEvents(filteredEvents);
    pagination(filteredEvents);
  });
};
