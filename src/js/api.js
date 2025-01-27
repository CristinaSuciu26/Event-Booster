const API_KEY = "GzEcjG7UqsA0w1fiokdTexVqAJ8XI1c3";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

export const fetchEvents = async (page = 0, size = 150) => {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&page=${page}&size=${size}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
