import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;

    }

    *:focus{
        outline: 0;
        box-shadow: 0px 0px 0px 2px ${(props) => props.theme['gray-500']};
    }

    body{
        background-color: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme.white}
    }
    body,input, textarea, button{
        font-family: "Roboto",sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
