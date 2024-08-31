import axios from "axios";

// URL dasar dari API
const API_BASE_URL = "https://66c5eabb134eb8f434961c3e.mockapi.io/blog";

// Fungsi untuk mengambil data dari API
export const getBlogContent = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/BlogContent`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog content:", error);
    throw error;
  }
};
