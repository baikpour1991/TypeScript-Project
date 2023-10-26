import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { IIngredient, IData } from '.'

export interface IIngredientProps {
  index: number
  deleteFunction: (arg: number) => void
  register: UseFormRegister<IData>
  errors: FieldErrors<{
    name: string
    description: string
    cookingTime: string
    ingredients: IIngredient[] | undefined
  }>
}
