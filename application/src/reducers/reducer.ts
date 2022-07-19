import produce from "immer"
import { ActionTypes } from "./action"

interface CycleState {
    CycleList: CycleProps[],
    activeCycleId: string | null
}
export interface CycleProps {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    dateFinished?: Date
    dateInterrupted?: Date,
}


export function CyclesReducer(state:CycleState, action: any){
    switch(action.type){
        case(ActionTypes.ADD_NEW_CYCLE):{
            return produce(state, draft => {
                draft.CycleList.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
        }
        case(ActionTypes.INTERRUPTED_CURRENT_CYCLE):{
            const currentCycleIndex = state.CycleList.findIndex(cycle =>{
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0 ){
                return state
            }

            return produce(state, draft => {
                draft.CycleList[currentCycleIndex].dateInterrupted = new Date()
                draft.activeCycleId = null
            })
        }
        case(ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED):{
            const currentCycleIndex = state.CycleList.findIndex(cycle =>{
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0 ){
                return state
            }

            return produce(state, draft =>{
                draft.CycleList[currentCycleIndex].dateFinished= new Date()
                draft.activeCycleId = null
            })
        }
        default: return state
    }
}
