import { fetchEvents } from "./js/api.js";
import { loader } from "./js/loader.js";
import { pagination } from "./js/pagination.js";
import { selectTimezone } from "./js/select.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    loader();
    const response = await fetchEvents();
    const events = response._embedded.events;
    console.log("ev", events);
    pagination(events);
    selectTimezone(events);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
});
