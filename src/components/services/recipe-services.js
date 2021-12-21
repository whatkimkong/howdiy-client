import axios from "axios";

const RecipeService = axios.create({
      baseURL: `${process.env.REACT_APP_API_HOST}/recipes`,
      withCredentials: true,
    });

export function getCategoryList(category) {
    return RecipeService.get(`/categorylist/${category}`);
  };

export function createHowdiy({
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
  }) {
    return RecipeService.post("/create", {
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