import { applyFilter, pagination } from "./pagination.js";

export const selectTimezone = (events) => {
  const countrySelect = document.getElementById("choices");
  let choices = new Choices(countrySelect);

  const uniqueTimezones = events.filter((event) => event.dates.timezone);

  uniqueTimezones.forEach((event) => {
    const option = document.createElement("option");
    option.value = event.dates.timezone;
    option.textContent = event.dates.timezone;
    countrySelect.appendChild(option);
  });

  countrySelect.addEventListener("change", (event) => {
    const selectedTimezone = event.target.value;
    if (selectedTimezone) {
      const filtered = events.filter(
        (event) => event.dates.timezone === selectedTimezone
      );
      applyFilter(filtered);
    } else {
      pagination(events);
    }
  });

  choices.destroy();
  choices = new Choices(countrySelect);
};
