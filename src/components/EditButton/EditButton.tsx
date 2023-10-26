import { useContext } from 'react'
import { CustomButton } from '../../components'
import { EditIcon } from '../../assets/icons'
import { RecipeContext, EditFormContext } from '../../contexts'
import { IRecipe } from '../../interfaces'

export const EditButton = ({ id, title, description, ingredients, cookingTime, isFavorite }: IRecipe) => {
  const { setCurrentRecipe } = useContext(RecipeContext)
  const { setIsOpenEditForm } = useContext(EditFormContext)

  const openEditForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setCurrentRecipe({ id, title, description, ingredients, cookingTime, isFavorite })
    setIsOpenEditForm(true)
  }
  return (
    <>
      <CustomButton type="button" className="button button__edit" onClick={openEditForm}>
        <EditIcon />
      </CustomButton>
    </>
  )
}
