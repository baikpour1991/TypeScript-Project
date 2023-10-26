import { useContext } from 'react'
import { CustomButton } from '../../components'
import { FavoriteIcon } from '../../assets/icons'
import { RecipeContext } from '../../contexts'
import { IRecipe } from '../../interfaces'

interface IFavoriteButton {
  id: string
  title: string
  isFavorite: boolean
}

export const FavoriteButton = ({ id, title, isFavorite }: IFavoriteButton) => {
  const { recipeList, setRecipeList, setCurrentRecipe } = useContext(RecipeContext)
  const favoriteClasses: string = isFavorite ? 'button__favorite--active' : 'button__favorite'

  const changeFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const recipeIndex: number = recipeList.findIndex((recipe: IRecipe) => recipe.id === id)
    recipeList.splice(recipeIndex, 1, { ...recipeList[recipeIndex], isFavorite: !recipeList[recipeIndex].isFavorite })
    setCurrentRecipe({ ...recipeList[recipeIndex], title, isFavorite: !isFavorite })
    setRecipeList([...recipeList])
  }
  return (
    <CustomButton type="button" className={`button ${favoriteClasses}`} onClick={changeFavorite}>
      <FavoriteIcon />
    </CustomButton>
  )
}
