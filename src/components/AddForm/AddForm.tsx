import { useContext } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import { Ingredient, Modal } from '../../components'
import { RecipeContext } from '../../contexts'
import { validationSchema } from '../../../utils'
import { IRecipe, IIngredient, IData } from '../../interfaces'
import './addForm.scss'

export const AddForm = ({ openFunction }: { openFunction: (arg: boolean) => void }) => {
  const { recipeList, setRecipeList } = useContext(RecipeContext)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: '',
      description: '',
      cookingTime: '',
      ingredients: [{ name: '', count: 0, quantity: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
    rules: {
      required: 'Please append at least 1 item',
    },
  })

  const onSubmit: SubmitHandler<IData> = (data: IData): void => {
    const recipeListLength: number = recipeList.filter((item: IRecipe) => item.title === data.title).length
    const ingredients: IIngredient[] | undefined = data?.ingredients?.map((ingredient: IIngredient) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,
      count: +ingredient.count,
    }))

    if (!recipeListLength) {
      setRecipeList([...recipeList, { ...data, ingredients, id: uuidv4(), isFavorite: false }])
      reset()
      openFunction(false)
    } else {
      alert('Recipe with the same name has already exist')
    }
  }

  return (
    <Modal modalTitle="ADDING NEW RECIPE" openFunction={openFunction}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__block form__header">
          <div className="recipe recipe__title">
            <label htmlFor="title" className="recipe-label">
              Name of recipe
            </label>
            <input
              defaultValue=""
              type="text"
              id="title"
              placeholder="Name"
              className="input-field input-field--title"
              {...register('title')}
            />
            {errors.title && <span className="error-message">{errors.title.message}</span>}
          </div>

          <div className="form__cooking-time">
            <div className="recipe recipe__cooking-time">
              <label htmlFor="cookingTime" className="recipe-label">
                Cooking time
              </label>
              <div className="recipe__cooking-time-wrapper">
                <input
                  type="number"
                  id="cookingTime"
                  placeholder="15"
                  className="input-field input-field--cooking-time"
                  {...register('cookingTime')}
                />
                <span>min</span>
              </div>
              {errors.cookingTime && <span className="error-message">{errors.cookingTime.message}</span>}
            </div>
          </div>
        </div>
        <div className="form__block form__description">
          <div className="recipe recipe__description">
            <label htmlFor="description" className="recipe-label">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              cols={30}
              rows={3}
              className="input-field input-field--description"
              {...register('description')}
            />
            {errors.description && <span className="error-message">{errors.description.message}</span>}
          </div>
        </div>
        <div className="form__block form__ingredient">
          <div className="recipe recipe__ingredient-list">
            {fields.map((_field: object, index: number) => {
              return (
                <Ingredient key={index} index={index} deleteFunction={remove} register={register} errors={errors} />
              )
            })}
          </div>
          <div className="form__button-wrapper">
            <button
              type="button"
              onClick={() => {
                append({
                  name: '',
                  count: 0,
                  quantity: 'gr',
                })
              }}
              className="form__button--add-button"
            >
              + Add ingredient
            </button>
          </div>
        </div>
        <div className="form__button-wrapper">
          <button className="button button__add">add new recipe</button>
        </div>
      </form>
    </Modal>
  )
}
