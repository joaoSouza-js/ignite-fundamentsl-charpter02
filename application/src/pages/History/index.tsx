import { Status } from "../../components/Status"
import { HistoryContainer, HistoryList, TableBody, TableBodyWithoutTask, TableContainer, TableHeader } from "./style"

export function History() {
  const tasks = [
    {
      id: 1,
      descripiton: 'Conserto de débitos técnicos ',
      duration: 22,
      initDate: new Date("02-07-2020 18:30:23"),
      status: 'Interrompido' as const
    },
    {
      id: 3,
      descripiton: 'Conserto de débitos técnicos ',
      duration: 24,
      initDate: new Date("02-07-2020 18:30:23"),
      status: "Concluído" as const
    },
    {
      id: 2,
      descripiton: 'Conserto de débitos técnicos ',
      duration: 25,
      initDate: new Date("02-07-2020 18:30:23"),
      status: "Em andamento" as const
    },



    
  ]

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
            tasks.length === 0
            ? <TableBodyWithoutTask/>
            :
              <TableBody>
                {
                  tasks.map(task =>{
                    return(
                    <Status
                        key={task.id}
                        task = {task}
                      />
                    )
                  })
                }
              </TableBody>

          }
        </TableContainer>
      </HistoryList>
    </HistoryContainer>
  )
}
