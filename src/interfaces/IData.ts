import { IIngredient } from '.'

export interface IData {
  title: string
  description: string
  cookingTime: string
  ingredients?: IIngredient[] | undefined
}
