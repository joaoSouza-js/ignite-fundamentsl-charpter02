import { differenceInSeconds } from "date-fns"
import {  createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { addNewCycleAction, interuptCurrentCycleAction, markCurruntCycleAsFinishedAction } from "../reducers/action"
import {  CycleProps, CyclesReducer } from "../reducers/reducer"

interface CreateCycleData{
    task: string,
    minutesAmout: number
}

interface CycleContextType{
    CycleList: CycleProps[]
    isActiveCycle: boolean
    amountSecondsPassed: number,
    activeCycleId: string | null,
    activeCycle: CycleProps | undefined,
    interuptCurrentCycle: () => void,
    markCurruntCycleAsFinished: () => void,
    createNewCycle: (data: CreateCycleData) => void,
    ChangeAmountSecondsPassed: (differenceInSeconds: number) => void
}
interface CycleContextProvierProps{
    children: ReactNode
}

export const CycleContext = createContext({} as CycleContextType )

export function CycleContextProvider({children}:CycleContextProvierProps){
    

    const [CyclesState, dispatch] = useReducer(CyclesReducer,{
        CycleList : [],
        activeCycleId: null
    },
        () => {
            const localStorageState = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')
            if(localStorageState){
                return JSON.parse(localStorageState)
            }
    })

    useEffect(() => {
        const stateJson = JSON.stringify(CyclesState)
        localStorage.setItem('@ignite-timer:cycles-state-1.0.0',stateJson)
    },[CyclesState])

    const {CycleList,activeCycleId} = CyclesState
    const activeCycle = CycleList.find(cycle => cycle.id === activeCycleId)

    
    const [amountSecondsPassed, setAmountSecondsPassed]  = useState(()=>{
        if(activeCycle){
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }
        return 0
    })
    
 

    
    
    const isActiveCycle = !!activeCycle


    function  ChangeAmountSecondsPassed(differenceInSeconds: number){
        setAmountSecondsPassed(state => differenceInSeconds)
    }

    function createNewCycle(data: CreateCycleData){
        const id = String(new Date().getTime())
        const newCycle: CycleProps = {
          id: id,
          minutesAmount: data.minutesAmout,
          task: data.task,
          startDate: new Date()
        }
        
        dispatch(addNewCycleAction(newCycle))   
        setAmountSecondsPassed(0) 
    }

    function markCurruntCycleAsFinished(){
        dispatch(markCurruntCycleAsFinishedAction())
    }
    
    function interuptCurrentCycle(){
        dispatch(interuptCurrentCycleAction())       
        document.title = 'Ignite Timer'
    }

    return(
        <CycleContext.Provider value={{
                CycleList,
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