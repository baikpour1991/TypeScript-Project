import { IRecipe } from '.'

export interface IRecipeContext {
  recipeList: IRecipe[]
  favoriteRecipeList: IRecipe[]
  exploreRecipeList: IRecipe[]
  currentRecipe: IRecipe
  isDeleteRecipe: boolean
  setRecipeList: (recipes: IRecipe[]) => void
  setIsDeleteRecipe: (isDelete: boolean) => void
  setCurrentRecipe: (recipe: IRecipe) => void
  setFavoriteRecipeList: (recipes: IRecipe[]) => void
  setExploreRecipe: (recipes: IRecipe[]) => void
}
