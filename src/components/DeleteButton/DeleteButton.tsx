import { useContext } from 'react'
import { DeleteIcon } from '../../assets/icons'
import { CustomButton } from '../../components'
import { RecipeContext, ConfirmContext } from '../../contexts'
import { IRecipe } from '../../interfaces'

export const DeleteButton = ({ id, title, description, ingredients, cookingTime, isFavorite }: IRecipe) => {
  const { setCurrentRecipe } = useContext(RecipeContext)
  const { setIsOpenConfirmModal } = useContext(ConfirmContext)

  const openConfirmModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setCurrentRecipe({ id, title, description, ingredients, cookingTime, isFavorite })
    setIsOpenConfirmModal(true)
  }

  return (
    <>
      <CustomButton type="button" className="button button__delete" onClick={openConfirmModal}>
        <DeleteIcon />
      </CustomButton>
    </>
  )
}
