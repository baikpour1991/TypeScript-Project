import { createPortal } from 'react-dom'
import { CustomButton } from '../../components'
import { CloseIcon } from '../../assets/icons'
import './modal.scss'
import { ReactNode } from 'react'

interface IModal {
  children: ReactNode
  modalTitle: string
  openFunction: (isOpen: boolean) => void
  onClick?: (e: React.MouseEvent) => void
}

export const Modal = ({ children, modalTitle, openFunction }: IModal) => {
  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    openFunction(false)
  }
  return createPortal(
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__container">
        <div className="modal__title">
          <span>{modalTitle}</span>
        </div>
        <div className="modal__content">{children}</div>
        <div className="modal__close-button">
          <CustomButton className="button button__close-modal" onClick={closeModal}>
            <CloseIcon />
          </CustomButton>
        </div>
      </div>
    </div>,
    document.body
  )
}
