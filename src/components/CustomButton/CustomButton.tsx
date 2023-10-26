import { ButtonHTMLAttributes, ReactNode } from 'react'
// write type for every properties of ButtonProps
type ButtonProps = {
  className: string
  children: ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const CustomButton = (props: ButtonProps) => {
  const { children } = props

  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
