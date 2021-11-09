import axios from "axios";

// URLS are only Backend URLS

class RecipeService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_HOST}/recipes`,
      withCredentials: true,
    });
  }

  getCategories = (category) => {
    return this.service.get("/categories", { category });
  };
}

const recipeService = new RecipeService();
export default recipeService;
