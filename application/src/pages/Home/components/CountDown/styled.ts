import styled from "styled-components";

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