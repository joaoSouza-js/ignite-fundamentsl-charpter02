import styled, {css} from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type statusProps =  {variant : 'Concluído' | 'Em andamento' | 'Interrompido'}

const statusColor = {
    'Em andamento': defaultTheme["yellow-500"],
    'Concluído' : defaultTheme["green-500"],
    'Interrompido': defaultTheme["red-500"]
}

export const TableRowContainer = styled.tr<statusProps>`
    display: grid;
    align-items: center;
    background-color: ${props => props.theme["gray-700"]};
    padding: 1rem 1.5rem;
    margin-bottom: .25rem;
    grid-template-columns: 1fr 8.1875rem 8.1875rem 8.1875rem;


     td{
        display: flex;
        align-items: center;
        text-align: left;
        column-gap: .5rem;

   
        &:last-of-type::before{
            display: block;
            content: '';
            border-radius: .25rem;
            height: .5rem;
            width: .5rem;
            ${props=>  css`background-color: ${statusColor[props.variant]}`}
        }
    }

`