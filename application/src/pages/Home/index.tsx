import {Play} from 'phosphor-react'
import { useState,ChangeEvent } from 'react'
import 
{ 
  TaskInput,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  CountDowmContainer,
  StartCountDownButton,
} from './styles'


export function Home() {
  const [taskTextDescription, setTaskTextDescription] = useState('')
  const [minutesAmout, setMinutesAmont] = useState(0)

  function handleChangeTaskTaskDescription(event: ChangeEvent<HTMLInputElement>){
    setTaskTextDescription(state => {
      return event.target.value
    })
  }
  function handleChangeMinuteAmount(event: ChangeEvent<HTMLInputElement>){
    
  }

  const disableButton = taskTextDescription.length === 0
 
  
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor='task'> Vou trabalhar em </label>
          <TaskInput
            id='task'
            type="text"
            list='task-suggestion'
            onChange={handleChangeTaskTaskDescription}
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="task-suggestion">
            <option value="projeto01"/>
            <option value="projeto02"/>
            <option value="aprender a cantar"/>
          </datalist>

          <label htmlFor='durationAmount'> durante</label>
          <MinuteAmountInput
            id='durationAmount'
            type="number" 
            step={5}
            min={5}
            max={60}
            placeholder='00'
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDowmContainer>
          <span>0</span>
          <span>0</span>
          <span className='separator'>:</span>
          <span>0</span>
          <span>0</span>
        </CountDowmContainer>

        <StartCountDownButton
          disabled = {disableButton}
          type='submit'
         >
          <Play size={'1.37rem'}/>
          <span>Começar</span>
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
