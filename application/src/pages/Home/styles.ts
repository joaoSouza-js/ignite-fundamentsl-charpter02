import styled from "styled-components";


export const HomeContainer = styled.main`
    flex: 1;
    width: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        row-gap: 3.5rem;

        width: 100%;
        max-width: 40.937rem;
        font-size: 1.125rem;
        flex-wrap: wrap;
        font-weight: bold;
    }

`




const BaseCountDownButton = styled.button`
    width: 100%;
    display:  flex;
    align-items: center;
    justify-content: center;
    column-gap: .5rem;
    font-weight: bold;
    cursor: pointer;
    transition: .2s filter;
    padding: 1.25rem;
    border-radius: 8px;
    transition: .2s background-color;
`

export const StartCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};


    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]};
    }
    &:disabled{
        filter: opacity(.7);
        cursor: not-allowed;
    }

`
export const CancelCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme["red-500"]};
    color: ${props => props.theme.white};

    &:active{
        box-shadow: none;
    }

    &:hover{
        background-color: ${props => props.theme["red-700"]};
    }
` 