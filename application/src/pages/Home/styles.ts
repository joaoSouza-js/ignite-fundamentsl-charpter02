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

export const CountDowmContainer = styled.section`
    width: 100%;
    display: flex;
    column-gap: 1rem;


    
    span{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 12.375rem;
        width: 8rem;
        line-height: 8rem;
        background-color: ${props => props.theme["gray-700"]};
        border-radius: 8px;
        font-family: 'Roboto Mono';
        font-size: 10rem;

        &.separator{
            text-align: center;
            width: 4.06rem  ;
            background-color: transparent;
            color: ${props => props.theme["green-500"]};
        }
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