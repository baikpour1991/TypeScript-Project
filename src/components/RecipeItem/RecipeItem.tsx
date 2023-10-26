import { useContext } from 'react'
import { FavoriteButton, EditButton, DeleteButton } from '../../components'
import { RecipeContext, DrawerContext } from '../../contexts'
import './recipe.scss'
import { IRecipe } from '../../interfaces'

export const RecipeItem = ({ id, title, description, ingredients, cookingTime, isFavorite }: IRecipe) => {
  const { setCurrentRecipe } = useContext(RecipeContext)
  const { setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <>
      <div
        className="recipe-item"
        onClick={() => {
          setCurrentRecipe({ id, title, description, ingredients, cookingTime, isFavorite })
          setIsOpenDrawer(true)
        }}
      >
        <div className="recipe-item__wrapper">
          <div className="recipe-header">
            <div className="recipe-header__favorite">
              <FavoriteButton id={id} title={title} isFavorite={isFavorite} />
            </div>
            <div className="recipe-header-manipulation">
              <EditButton
                id={id}
                title={title}
                description={description}
                ingredients={ingredients}
                cookingTime={cookingTime}
                isFavorite={isFavorite}
              />
              <DeleteButton
                id={id}
                title={title}
                description={description}
                ingredients={ingredients}
                cookingTime={cookingTime}
                isFavorite={isFavorite}
              />
            </div>
          </div>
          <div className="recipe-footer">
            <div className="recipe-title">
              <h3>{title}</h3>
              <span>{ingredients?.length} ingredients</span>
            </div>
            <span className="recipe-time">{cookingTime} min</span>
          </div>
        </div>
      </div>
    </>
  )
}
