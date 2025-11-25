import axios from "axios";

const API = "http://localhost:8080/api/meals";

export const searchMeals = name => axios.get(`${API}/search?name=${name}`);
export const getCategories = () => axios.get(`${API}/categories`);
export const getMealsByCategory = cat => axios.get(`${API}/category/${cat}`);
export const getMealDetails = id => axios.get(`${API}/${id}`);
export const getRandomMeal = () => axios.get(`${API}/random`);
