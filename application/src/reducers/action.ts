import { CycleProps } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPTED_CURRENT_CYCLE = 'INTERRUPTED_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: CycleProps){
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload:{
            newCycle
        }
    
    }
}

export function markCurruntCycleAsFinishedAction(){
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
}

export function interuptCurrentCycleAction(){
    return {
        type: ActionTypes.INTERRUPTED_CURRENT_CYCLE,
    }     
}