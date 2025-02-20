import { fetchEvents } from "./js/api.js";
import { loader } from "./js/loader.js";
import { modal } from "./js/modal.js";
import { pagination } from "./js/pagination.js";
import { searchEvents } from "./js/searching.js";
import { selectTimezone } from "./js/select.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    loader();
    const response = await fetchEvents();
    const events = response._embedded.events;

    searchEvents(events);
    modal(events);
    pagination(events);
    selectTimezone(events);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
});
