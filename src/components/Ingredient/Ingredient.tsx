import { CustomButton } from '../../components'
import { INGREDIENTS_LIST, QUANTITY_LIST } from '../../constants'
import { DeleteIcon } from '../../assets/icons'
import { IIngredientProps } from '../../interfaces'

export const Ingredient = ({ index, deleteFunction, register, errors }: IIngredientProps) => {
  const errorMessage: string | undefined =
    errors?.ingredients?.[index]?.count?.message || errors?.ingredients?.[index]?.quantity?.message

  return (
    <div className="recipe__ingredient-wrapper recipe__ingredient--list">
      <div className="recipe recipe__ingredient">
        {index === 0 && (
          <label htmlFor="ingredient" className="recipe-label">
            Ingredient
          </label>
        )}
        <select
          id="subscribe"
          className="input-field input-field--ingredients"
          {...register(`ingredients.${index}.name` as const)}
        >
          <option value="">Select an option</option>
          {INGREDIENTS_LIST.map((ingredient: string) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
        {errors.ingredients && <span className="error-message">{errors?.ingredients?.[index]?.name?.message}</span>}
      </div>
      <div className="recipe__quantity recipe__quantity--ingredient--list">
        <div className="recipe-content">
          {index === 0 && (
            <label htmlFor="countQuantity" className="recipe-label">
              Quantity
            </label>
          )}
          <div className="recipe__quantity-container">
            <div className="recipe__quantity-wrapper">
              <input
                type="number"
                min="1"
                placeholder="15"
                className="input-field input-field--quantity"
                {...register(`ingredients.${index}.count` as const)}
              />
              <select
                id="quantity"
                className="input-field input-field--quantity-type"
                {...register(`ingredients.${index}.quantity` as const)}
              >
                <option value="">Choose</option>
                {QUANTITY_LIST.map((quantityType: string) => (
                  <option key={quantityType} value={quantityType}>
                    {quantityType}
                  </option>
                ))}
              </select>
            </div>
            {index !== 0 && (
              <CustomButton
                className="button button__delete button__delete--ingredient"
                onClick={() => deleteFunction(index)}
              >
                <DeleteIcon />
              </CustomButton>
            )}
          </div>
          {errorMessage && (
            <span className="error-message">
              {errors?.ingredients?.[index]?.quantity?.message}
              <br />
              {errors?.ingredients?.[index]?.count?.message}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
