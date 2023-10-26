import { Context, ReactNode, createContext } from 'react'
import { IDrawerContext } from '../interfaces'

const DRAWER_DEFAULT_VALUE: IDrawerContext = {
  isOpenDrawer: false,
  setIsOpenDrawer: () => {
    return
  },
}
export const DrawerContext: Context<IDrawerContext> = createContext(DRAWER_DEFAULT_VALUE)

interface IDrawerContextContainer {
  value: IDrawerContext
  children: ReactNode
}

export const DrawerContextContainer = ({ value, children }: IDrawerContextContainer) => {
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}
