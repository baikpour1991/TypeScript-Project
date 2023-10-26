import { Context, ReactNode, createContext } from 'react'
import { IEditFormContext } from '../interfaces'

const EDIT_FROM_DEFAULT_VALUE: IEditFormContext = {
  isOpenEditForm: false,
  setIsOpenEditForm: () => {
    return
  },
}

export const EditFormContext: Context<IEditFormContext> = createContext(EDIT_FROM_DEFAULT_VALUE)

interface IEditFormContextContainer {
  value: IEditFormContext
  children: ReactNode
}

export const EditFormContextContainer = ({ value, children }: IEditFormContextContainer) => {
  return <EditFormContext.Provider value={value}>{children}</EditFormContext.Provider>
}
