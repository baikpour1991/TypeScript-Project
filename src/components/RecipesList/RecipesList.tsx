import { RecipeItem } from '../../components'
import { IRecipe } from '../../interfaces'
import './recipesList.scss'

interface IRecipeList {
  title?: string
  recipeArray: IRecipe[]
}

export const RecipesList = ({ title, recipeArray }: IRecipeList) => {
  return (
    <>
      <div className="recipe-list">
        <h2>{title}</h2>
        <div className="recipe-list-wrapper">
          {recipeArray.map((recipe: IRecipe, index: number) => {
            return (
              <RecipeItem
                key={index}
                id={recipe?.id}
                title={recipe?.title}
                description={recipe?.description}
                ingredients={recipe?.ingredients}
                cookingTime={recipe?.cookingTime}
                isFavorite={recipe?.isFavorite}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
