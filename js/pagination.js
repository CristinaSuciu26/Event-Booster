import { displayEvents } from "./events.js";

let currentPage = 1;
const eventsPerPage = 10;

const paginationContainer = document.getElementById("pagination-container");

const renderPaginationControls = (totalPages) => {
  paginationContainer.innerHTML = `
    <button id="prev-btn" ${currentPage === 1 ? "disabled" : ""}>
    ${currentPage}
    </button>
    <button class="num-pagination">
    ${currentPage + 1}</button><button class="num-pagination">
    ${currentPage + 2}</button><button class="num-pagination">
    ${currentPage + 3}</button><button class="num-pagination">
    ${currentPage + 4}</button><button class="num-pagination">
    ${currentPage + 5}</button>
    <button id="next-btn" ${currentPage === totalPages ? "disabled" : ""}>
    Next
    </button>
  `;

  document.querySelectorAll(".num-pagination").forEach((button) => {
    button.addEventListener("click", (e) => {
      const page = parseInt(e.target.textContent, 10);
      if (!isNaN(page)) {
        currentPage = page;
        triggerPagination();
      }
    });
  });

  document.querySelector("#prev-btn").onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      triggerPagination();
    }
  };

  document.querySelector("#next-btn").onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      triggerPagination();
    }
  };
};

let allEvents = [];
let filteredEvents = [];

const triggerPagination = () => {
  const eventsToPaginate = filteredEvents.length ? filteredEvents : allEvents;
  const totalPages = Math.ceil(eventsToPaginate.length / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;
  const eventsToDisplay = eventsToPaginate.slice(
    startIndex,
    startIndex + eventsPerPage
  );
  displayEvents(eventsToDisplay);
  renderPaginationControls(totalPages);
};

export const pagination = (events) => {
  allEvents = events;
  filteredEvents = [];
  currentPage = 1;
  triggerPagination();
};

export const applyFilter = (filtered) => {
  filteredEvents = filtered;
  currentPage = 1;
  triggerPagination();
};
