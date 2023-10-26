import { useContext } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Ingredient, Modal } from '../../components'
import { RecipeContext, EditFormContext } from '../../contexts'
import { validationSchema } from '../../../utils'
import { IIngredient, IRecipe, IData } from '../../interfaces'
import { INewCurrentRecipe } from './editFormInterfaces'

export const EditForm = () => {
  const { recipeList, currentRecipe, setRecipeList, setCurrentRecipe } = useContext(RecipeContext)
  const { setIsOpenEditForm } = useContext(EditFormContext)

  const ingredientList: IIngredient[] | undefined = currentRecipe?.ingredients?.map((ingredient: IIngredient) => ({
    name: ingredient.name,
    count: +ingredient.count,
    quantity: ingredient?.quantity || 'gr',
  }))

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: currentRecipe.title,
      description: currentRecipe.description,
      cookingTime: currentRecipe.cookingTime,
      ingredients: ingredientList,
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
    const filterParam = (item: IRecipe) => item.id === currentRecipe.id
    const recipeIndex: number = recipeList.findIndex(filterParam)
    const ingredients: IIngredient[] | undefined = data?.ingredients?.map((ingredient: IIngredient) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,
      count: +ingredient.count,
    }))
    const newCurrentRecipe: INewCurrentRecipe = {
      ...data,
      id: currentRecipe.id,
      isFavorite: currentRecipe.isFavorite,
      ingredients,
    }

    if (recipeIndex !== -1) {
      recipeList.splice(recipeIndex, 1, newCurrentRecipe)
      setRecipeList([...recipeList])
      setCurrentRecipe(newCurrentRecipe)
      reset()
      setIsOpenEditForm(false)
    }
  }
  return (
    <Modal modalTitle="EDITING YOUR RECIPE" openFunction={setIsOpenEditForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__block form__header">
          <div className="recipe recipe__title">
            <label htmlFor="title" className="recipe-label">
              Name of recipe
            </label>
            <input
              type="title"
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
          <button className="button button__add">Edit recipe</button>
        </div>
      </form>
    </Modal>
  )
}
