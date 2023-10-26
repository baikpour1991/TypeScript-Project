import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DUMMY_DATA } from './constants'
import { ConfirmationModal, Sidebar, EditForm, Drawer } from './components'
import { DEFAULT_EXPLORE_IDS } from './constants'
import {
  RecipeContextContainer,
  EditFormContextContainer,
  DrawerContextContainer,
  ConfirmContextContainer,
} from './contexts'
import { IRecipe } from './interfaces'
import { INITIAL_RECIPE_VALUE } from './constants/recipeInitialValue'

export function App() {
  const [recipeList, setRecipeList] = useState(DUMMY_DATA)
  const [exploreRecipeList, setExploreRecipe] = useState(
    recipeList.filter((recipe: IRecipe) => DEFAULT_EXPLORE_IDS.indexOf(+recipe.id) != -1)
  )
  const [favoriteRecipeList, setFavoriteRecipeList] = useState(
    recipeList.filter((item: IRecipe) => item.isFavorite === true)
  )
  const [isOpenEditForm, setIsOpenEditForm] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState(INITIAL_RECIPE_VALUE)
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
  const [isDeleteRecipe, setIsDeleteRecipe] = useState(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  useEffect(() => {
    setExploreRecipe(recipeList.filter((recipe: IRecipe) => DEFAULT_EXPLORE_IDS.indexOf(+recipe.id) != -1))
    setFavoriteRecipeList(recipeList.filter((item: IRecipe) => item.isFavorite === true))
  }, [recipeList])

  return (
    <RecipeContextContainer
      value={{
        recipeList,
        exploreRecipeList,
        favoriteRecipeList,
        currentRecipe,
        isDeleteRecipe,
        setFavoriteRecipeList,
        setExploreRecipe,
        setRecipeList,
        setCurrentRecipe,
        setIsDeleteRecipe,
      }}
    >
      <EditFormContextContainer
        value={{
          isOpenEditForm,
          setIsOpenEditForm,
        }}
      >
        <DrawerContextContainer
          value={{
            isOpenDrawer,
            setIsOpenDrawer,
          }}
        >
          <ConfirmContextContainer
            value={{
              isOpenConfirmModal,
              setIsOpenConfirmModal,
            }}
          >
            {isOpenEditForm && <EditForm />}
            {isOpenDrawer && (
              <Drawer
                closeFunction={setIsOpenDrawer}
                id={currentRecipe.id}
                title={currentRecipe.title}
                description={currentRecipe.description}
                ingredients={currentRecipe.ingredients}
                cookingTime={currentRecipe.cookingTime}
                isFavorite={currentRecipe.isFavorite}
              />
            )}
            {isOpenConfirmModal && <ConfirmationModal openFunction={setIsOpenConfirmModal} />}
            <div className="main-container">
              <Sidebar />
              <Outlet />
            </div>
          </ConfirmContextContainer>
        </DrawerContextContainer>
      </EditFormContextContainer>
    </RecipeContextContainer>
  )
}
