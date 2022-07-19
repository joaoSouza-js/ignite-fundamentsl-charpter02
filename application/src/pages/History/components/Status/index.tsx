import { TableRowContainer } from "./style"
import {formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js"
import { CycleProps } from "../../../../reducers/reducer"
interface StatusProps{
    cycle: CycleProps
}

export function Status({cycle}:StatusProps){
    const {task,minutesAmount, startDate,dateFinished,dateInterrupted} = cycle
    const cycleDiferenceToNow = formatDistanceToNow(new Date(startDate),{
        locale: ptBR,
        addSuffix: true
    })

    function currentStatus(){
        if(dateFinished){
            return 'Concluído' as const
        }
        else if(dateInterrupted){
            return 'Interrompido' as const
        }
        else{
            return 'Em andamento' as const
        }
    }

    const status = currentStatus()
    
    return(
        <TableRowContainer variant={status}>
            <td>{task}</td>
            <td>{minutesAmount} minutos</td> 
            <td>{cycleDiferenceToNow}</td> 
            <td>{status}</td>  
        </TableRowContainer>
    )
}