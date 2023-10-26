import { useState, useContext } from 'react'
import { PageLayout, RecipesList, CustomButton, AddForm } from '../../components'
import { RecipeContext } from '../../contexts'

import './main.scss'

export const MainPage = () => {
  const [isOpenFunction, setIsOpenFunction] = useState(false)
  const { recipeList, exploreRecipeList } = useContext(RecipeContext)
  return (
    <PageLayout>
      {isOpenFunction && <AddForm openFunction={setIsOpenFunction} />}
      <div className="content-header">
        <h1>Recipe</h1>
        <CustomButton className="button button__add" onClick={() => setIsOpenFunction(true)}>
          + ADD NEW RECIPE
        </CustomButton>
      </div>
      <div className="content-wrapper">
        <RecipesList title={'recipe of the day'} recipeArray={exploreRecipeList} />
        <RecipesList title={'explore recipes'} recipeArray={recipeList} />
      </div>
    </PageLayout>
  )
}
