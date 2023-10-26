import * as yup from 'yup'
import { IData } from '../src/interfaces'

export const validationSchema: yup.ObjectSchema<IData> = yup.object({
  title: yup.string().required('Title is required').min(2, 'Tittle must have at least 2 characters'),
  description: yup.string().required('Description is required').min(5, 'Description must have at least 5 characters'),
  cookingTime: yup.string().required('Cooking time is required'),
  ingredients: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Choose type of ingredient'),
      count: yup.number().required('Quantity`s count is required'),
      quantity: yup.string().required('Quantity category is required'),
    })
  ),
})
