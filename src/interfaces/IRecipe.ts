import { IIngredient } from '.'

export interface IRecipe {
  id: string
  title: string
  description: string
  cookingTime: string
  isFavorite: boolean
  ingredients?: IIngredient[]
}
