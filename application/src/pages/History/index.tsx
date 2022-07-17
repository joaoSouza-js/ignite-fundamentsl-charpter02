import { useContext, useEffect } from "react"
import { CycleContext } from "../../context/CycleContext"
import { Status } from "./components/Status"
import { HistoryContainer, HistoryList, TableBody, TableBodyWithoutTask, TableContainer, TableHeader } from "./style"

export function History() {
  const {CycleList,amountSecondsPassed} = useContext(CycleContext)


  return (
    <HistoryContainer>
      <h1>
        Meu histórico
      </h1>

      <HistoryList>
        <TableContainer>

          <TableHeader>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Staus</th>
            </tr>   
          </TableHeader>
          
          {
            CycleList.length === 0
            ? ( <TableBodyWithoutTask/> )
            :
              ( <TableBody>
                  {
                    CycleList.map(cycle =>{
                      return(
                      <Status
                          key={cycle.id}
                          cycle={cycle}
                        />
                      )
                    })
                  }
               </TableBody>
              )
          }
        </TableContainer>
      </HistoryList>
    </HistoryContainer>
  )
}
