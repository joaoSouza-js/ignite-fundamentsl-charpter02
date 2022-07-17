import {  createContext, ReactNode, useState } from "react"

interface CreateCycleData{
    task: string,
    minutesAmout: number
}
export interface CycleProps {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    dateFinished?: Date
    dateInterrupted?: Date,
}
interface CycleContextType{
    isActiveCycle: boolean
    amountSecondsPassed: number,
    activeCycleId: string | null,
    activeCycle: CycleProps | undefined,
    interuptCurrentCycle: () => void
    markCurruntCycleAsFinished: () => void,
    createNewCycle: (data: CreateCycleData) => void
    ChangeAmountSecondsPassed: (differenceInSeconds: number) => void
}
interface CycleContextProvierProps{
    children: ReactNode
}

export const CycleContext = createContext({} as CycleContextType )

export function CycleContextProvider({children}:CycleContextProvierProps){
    
    const [CycleList, setCycleList] = useState<CycleProps[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string| null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed]  = useState(0)

    const activeCycle = CycleList.find(cycle => cycle.id === activeCycleId)
    const isActiveCycle = !!activeCycle


    function  ChangeAmountSecondsPassed(differenceInSeconds: number){
        setAmountSecondsPassed(state => differenceInSeconds)
    }

    function createNewCycle(data: CreateCycleData){
        const id = String(new Date().getTime())
        const newCyle: CycleProps = {
          id: id,
          minutesAmount: data.minutesAmout,
          task: data.task,
          startDate: new Date()
        }
        setCycleList(state => [...state, newCyle])
        setActiveCycleId(id)
        setAmountSecondsPassed(0)  
    }

    function markCurruntCycleAsFinished(){
        const cyclelistWithOneUpdated = CycleList.map(cycle =>{ 
          if(cycle.id === activeCycle?.id){
            return {...cycle, dateFinished: new Date(),}}
            return cycle
        })
        setCycleList(state => cyclelistWithOneUpdated)
        setActiveCycleId(null)
    }
    
    function interuptCurrentCycle(){
        const cyclelistWithOneUpdated = CycleList.map(cycle =>{
          if(cycle.id === activeCycle?.id){
            return {...cycle, dateInterrupted: new Date(),}
          }
          return cycle
        })
        setCycleList(state => cyclelistWithOneUpdated)
        
        setActiveCycleId(null)
        document.title = 'Ignite Timer'
    }

    return(
        <CycleContext.Provider value={{
                activeCycle,
                activeCycleId,
                isActiveCycle,
                amountSecondsPassed,
                createNewCycle,
                interuptCurrentCycle,
                ChangeAmountSecondsPassed,
                markCurruntCycleAsFinished
            }}
        >
            {children}
        </CycleContext.Provider>
    )
}