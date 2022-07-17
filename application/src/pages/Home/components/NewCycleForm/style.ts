import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    display:  flex;
    align-items: center;
    justify-content: center;
    column-gap: .5rem;
    flex-wrap: wrap;   
   
`
export const BaseInput = styled.input`
    padding: 0 .5rem;
    background-color: transparent;
    height: 2.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => props.theme["gray-100"]};
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    transition: .2s border-color;

    &:focus{
        border-color: ${props => props.theme["green-500"]};
        box-shadow: none;
    }

    &::placeholder{
        color: ${props => props.theme["gray-500"]};

    }
    &::-webkit-calendar-picker-indicator{
       display: none !important
    }

`

export const TaskInput = styled(BaseInput)`
    text-align: center;
    flex : 1;

`
export const MinuteAmountInput = styled(BaseInput)`
    text-align: center;
    width: 4.5rem;


   
`