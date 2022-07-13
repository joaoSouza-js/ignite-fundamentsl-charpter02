import {Play} from 'phosphor-react'
import { CountDowmContainer, FormContainer, HomeContainer, MinuteAmountInput, StartCountDownButton, TaskInput } from './styles'


export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor='task'> Vou trabalhar em </label>
          <TaskInput
            id='task'
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor='durationAmount'> durante</label>
          <MinuteAmountInput
            id='durationAmount'
            type="number" 
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

        <StartCountDownButton type='submit' >
          <Play size={'1.37rem'}/>
          <span>Começar</span>
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
