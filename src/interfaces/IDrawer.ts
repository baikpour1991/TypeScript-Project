import { IRecipe } from '.'

export interface IDrawer extends IRecipe {
  closeFunction: React.Dispatch<React.SetStateAction<boolean>>
}
