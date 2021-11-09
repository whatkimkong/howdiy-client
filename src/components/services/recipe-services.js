import axios from "axios";

class RecipeService {
  constructor() {
    this.service = axios.get({
      baseURL: `${process.env.REACT_APP_API_HOST}/`,
      withCredentials: true,
    });
  }

  getCategories = (category) => {
    return this.service.get("/categories", { category });
  }
}

const recipeService = new RecipeService();
export default recipeService;
