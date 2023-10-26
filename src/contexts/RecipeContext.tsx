import { Context, ReactNode, createContext } from 'react'
import { IRecipeContext } from '../interfaces'
import { INITIAL_RECIPE_VALUE } from '../constants/recipeInitialValue'

const RECIPE_CONTEXT_DEFAULT_VALUE: IRecipeContext = {
  recipeList: [],
  favoriteRecipeList: [],
  exploreRecipeList: [],
  setRecipeList: () => {
    return
  },
  setIsDeleteRecipe: () => {
    return
  },
  currentRecipe: INITIAL_RECIPE_VALUE,
  isDeleteRecipe: false,
  setCurrentRecipe: () => {
    return
  },
  setFavoriteRecipeList: () => {
    return
  },
  setExploreRecipe: () => {
    return
  },
}

export const RecipeContext: Context<IRecipeContext> = createContext(RECIPE_CONTEXT_DEFAULT_VALUE)

interface IRecipeContextContainer {
  value: IRecipeContext
  children: ReactNode
}

export const RecipeContextContainer = ({ value, children }: IRecipeContextContainer) => {
  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}
