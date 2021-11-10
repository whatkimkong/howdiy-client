import axios from "axios";

// URLS are only Backend URLS

class RecipeService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_HOST}/recipes`,
      withCredentials: true,
    });
  }

  getCategoryList = ({ productImg, funName, descriptiveName }) => {
    return this.service.get("/categorylist", { productImg, funName, descriptiveName });
  };
  
  createHowdiy = ({
    category,
    descriptiveName,
    ingredients,
    preparation,
    productImg,
    isGiftable,
    gallery,
    timeOfPreparation,
    costRating,
    difficultyRating,
  }) => {
    return this.service.post("/create", {
      category,
      descriptiveName,
      ingredients,
      preparation,
      productImg,
      isGiftable,
      gallery,
      timeOfPreparation,
      costRating,
      difficultyRating,
    });
  };

}

const recipeService = new RecipeService();
export default recipeService;
