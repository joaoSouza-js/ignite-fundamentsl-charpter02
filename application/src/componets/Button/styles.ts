import styled, {css}from "styled-components"

export type ButtonVariant =  "primary" | "secundary" | "danger" | "succes"


interface ButtonComponentProps {
    variant: ButtonVariant
}
const buttonVariants = {
    primary: '#f5216c',
    secundary: '#ffff6c',
    danger: '#d20000',
    succes: '#00dd6f'
}

export const ButtonComponent =  styled.button<ButtonComponentProps>`
width:  200px;
height: 50px;

${props => css`background-color: ${buttonVariants[props.variant]}`}

`