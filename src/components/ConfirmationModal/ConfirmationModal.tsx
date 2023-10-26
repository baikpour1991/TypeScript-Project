import React, { useContext } from 'react'
import { CustomButton, Modal } from '../../components'
import { RecipeContext, DrawerContext, ConfirmContext } from '../../contexts'
import './confirmationNodal.scss'
import { IRecipe } from '../../interfaces'

interface IConfirmationModal {
  openFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export const ConfirmationModal = ({ openFunction }: IConfirmationModal) => {
  const { recipeList, setRecipeList, setIsDeleteRecipe, currentRecipe } = useContext(RecipeContext)
  const { setIsOpenDrawer } = useContext(DrawerContext)
  const { setIsOpenConfirmModal } = useContext(ConfirmContext)

  const saveRecipe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsDeleteRecipe(false)
    setIsOpenConfirmModal(false)
    setIsOpenDrawer(false)
  }

  const deleteRecipe = (e: React.MouseEvent) => {
    e.stopPropagation()
    setRecipeList(recipeList.filter((recipe: IRecipe) => recipe.id !== currentRecipe.id))
    setIsOpenConfirmModal(false)
    setIsOpenDrawer(false)
  }
  return (
    <Modal openFunction={openFunction} modalTitle="Confirmation" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <span className="confirmation__content">Are you sure you want to delete this recipe?</span>
      <div className="confirmation__buttons-container">
        <CustomButton className="button button__confirm" onClick={saveRecipe}>
          Cancel
        </CustomButton>
        <CustomButton className="button button__confirm button__confirm--active" onClick={deleteRecipe}>
          Yes, Delete
        </CustomButton>
      </div>
    </Modal>
  )
}
