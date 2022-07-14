import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    width: 100%;
    max-width: 58.187rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.875rem;

    h1{
        font-size: 1.5rem;
    }

`
export const HistoryList = styled.div`
  
    flex:  1;
    margin-top: 2rem;
    overflow: auto;
    max-height: 25rem;

`
export const TableContainer = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    min-width: 600px;
    max-height: 100%;


`

export const TableHeader = styled.thead`
    width: 100%;
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 8px 8px 0 0;
    display: flex;
    line-height: 1.6;
    padding: 1rem 1.5rem;

    tr{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 8.1875rem 8.1875rem 8.1875rem
    }
    th{
        text-align: start;
    }
`
export const TableBody = styled.tbody`
    margin-top: .25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
   


`
export const TableBodyWithoutTask = styled.tbody`
    width: 100%;
    background-color: ${props => props.theme["gray-700"]};
    height: 25.5rem;
    border-radius: 0px 0px 8px 8px;

`