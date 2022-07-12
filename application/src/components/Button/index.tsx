import { ButtonHTMLAttributes } from 'react'
import { ButtonComponent, ButtonVariant } from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', ...res }: ButtonProps) {
  return (
    <ButtonComponent variant={variant} {...res}>
      click here
    </ButtonComponent>
  )
}
