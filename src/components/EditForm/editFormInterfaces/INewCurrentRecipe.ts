import { IIngredient } from '../../../interfaces'

export interface INewCurrentRecipe {
  id: string
  isFavorite: boolean
  title: string
  description: string
  cookingTime: string
  ingredients: IIngredient[] | undefined
}
