import { useContext } from 'react'
import { PageLayout, RecipesList } from '../../components'
import { RecipeContext } from '../../contexts'

export const Favorites = () => {
  const { favoriteRecipeList } = useContext(RecipeContext)

  return (
    <PageLayout>
      <div className="content-header">
        <h1>FAVORITES RECIPES</h1>
      </div>
      <div className="content-wrapper">
        <RecipesList recipeArray={favoriteRecipeList} />
      </div>
    </PageLayout>
  )
}
