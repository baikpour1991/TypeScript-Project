import { createPortal } from 'react-dom'
import { DeleteButton, CustomButton, FavoriteButton, EditButton } from '../../components'
import { CloseIcon } from '../../assets/icons'
import './drawer.scss'
import { IDrawer, IIngredient } from '../../interfaces'

export const Drawer = ({ id, title, description, ingredients, cookingTime, isFavorite, closeFunction }: IDrawer) => {
  return createPortal(
    <div className="drawer">
      <div className="drawer-overlay" onClick={() => closeFunction(false)} />
      <div className="drawer-container">
        <div className="drawer-img"></div>
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="drawer-title">
              <h3>{title}</h3>
              <span>{cookingTime} min.</span>
            </div>
          </div>
          <div className="drawer-description">{description}</div>
          <div className="drawer-ingredients">
            <span>Ingredients</span>
            <ul>
              {ingredients?.map((ingredient: IIngredient, index: number) => {
                return <li key={index}>{ingredient.name}</li>
              })}
            </ul>
          </div>
          <div className="drawer-buttons">
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
          <div className="drawer-close-button">
            <CustomButton type="button" className="button button__close" onClick={() => closeFunction(false)}>
              <CloseIcon />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
