import { Context, ReactNode, createContext } from 'react'
import { IConfirmContext } from '../interfaces'

const CONFIRM_MODAL_DEFAULT_VALUE: IConfirmContext = {
  isOpenConfirmModal: false,
  setIsOpenConfirmModal: () => {
    return
  },
}

export const ConfirmContext: Context<IConfirmContext> = createContext(CONFIRM_MODAL_DEFAULT_VALUE)

interface IConfirmContextContainer {
  value: IConfirmContext
  children: ReactNode
}

export const ConfirmContextContainer = ({ value, children }: IConfirmContextContainer) => {
  return <ConfirmContext.Provider value={value}>{children}</ConfirmContext.Provider>
}
