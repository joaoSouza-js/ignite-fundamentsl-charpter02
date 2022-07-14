import { TableRowContainer } from "./style"



interface StatusProps{
    task:{
        descripiton: string,
        duration: number,
        initDate:  Date,
        status?:  "Concluído" | "Interrompido" | "Em andamento"
    }
}

export function Status({task}:StatusProps){

    const {descripiton,duration,initDate, status='Concluído'} = task

    return(
        <TableRowContainer variant={status}>
            <td>{descripiton}</td>
            <td>{duration}</td> 
            <td>{initDate.toLocaleDateString('pt-br')}</td> 
            <td>{status}</td>  
        </TableRowContainer>
    )
}