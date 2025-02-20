require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

export const fetchEvents = async (page = 0, size = 150) => {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&page=${page}&size=${size}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
