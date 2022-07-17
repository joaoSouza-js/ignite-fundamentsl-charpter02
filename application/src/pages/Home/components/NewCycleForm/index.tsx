import { useContext, useState } from "react";
import {useFormContext} from 'react-hook-form'
import { CycleContext } from "../../../../context/CycleContext";

import { FormContainer, MinuteAmountInput, TaskInput } from "./style";




export function NewCycleForm(){

  const {isActiveCycle} = useContext(CycleContext )
  const {register} = useFormContext()

  return(
    
    <FormContainer>
      <label htmlFor='task'> Vou trabalhar em </label>
      <TaskInput
        id='task'
        type="text"
        disabled={isActiveCycle}
        list='task-suggestion'
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="projeto01"/>
        <option value="projeto02"/>
        <option value="aprender a cantar"/>
      </datalist>

      <label htmlFor='durationAmount'> durante</label>
      <MinuteAmountInput
        id='durationAmount'
        placeholder='00'
        disabled = {isActiveCycle}
        type="number" 
        max={60}
        step={5}
        min={5}
        {...register('minutesAmout',{valueAsNumber: true})}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}