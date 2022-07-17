import * as zod from 'zod'
import { HandPalm,Play } from 'phosphor-react'
import { createContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CountDown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'
import { HomeContainer, StartCountDownButton,CancelCountDownButton} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1,'informe a tarefa'),
  minutesAmout: zod.number()
  .min(5,'um ciclo pode deve ter pelo menos 5 minutos')
  .max(60,'um ciclo deve ter no máximo 60 minutos')
})
type  NewClicleFormData  = zod.infer<typeof newCycleFormValidationSchema>

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
  markCurruntCycleAsFinished: () => void,
  ChangeAmountSecondsPassed: (differenceInSeconds: number) => void
}
export const CycleContext = createContext({} as CycleContextType)

export function Home() {
  const [CycleList, setCycleList] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string| null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed]  = useState(0)

  const newCycleForm = useForm<NewClicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues:{
      task: '',
      minutesAmout: 0
    }
  })
  const { handleSubmit, watch,reset} = newCycleForm

  const activeCycle = CycleList.find(cycle => cycle.id === activeCycleId)

 

  function markCurruntCycleAsFinished(){
    const cyclelistWithOneUpdated = CycleList.map(cycle =>{ 
      if(cycle.id === activeCycle?.id){
        return {...cycle, dateFinished: new Date(),}}
        return cycle
    })
    setCycleList(state => cyclelistWithOneUpdated)
    setActiveCycleId(null)
  }

  function handleCreateNewCycle(data:NewClicleFormData){
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
    reset()
  }

  function handleStopCurrentCycle(){
    const cyclelistWithOneUpdated = CycleList.map(cycle =>{
      if(cycle.id === activeCycle?.id){
        return {...cycle, dateInterrupted: new Date(),}
      }
      return cycle
    })
    setCycleList(state => cyclelistWithOneUpdated)
    
    setActiveCycleId(null)
    document.title = 'Ignite Timer'
    console.log(CycleList)
  }

  function  ChangeAmountSecondsPassed(differenceInSeconds: number){
    setAmountSecondsPassed(state => differenceInSeconds)
  }

  const task = watch('task')
  const minutesAmout = watch('minutesAmout')

  const isSubmitDisabled = !task || !minutesAmout 
  const isActiveCycle = !!activeCycle 

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <CycleContext.Provider
         value={{
          activeCycle,
          activeCycleId,
          isActiveCycle,
          amountSecondsPassed,
          markCurruntCycleAsFinished,
          ChangeAmountSecondsPassed}}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm/>
          </FormProvider>
          <CountDown/>
        </CycleContext.Provider>

        {
          activeCycle 
          ? <CancelCountDownButton
              type='button'
              onClick={handleStopCurrentCycle}
            >
              <HandPalm size={'1.37rem'}/>
              <span>Interromper</span>
            </CancelCountDownButton>


          : <StartCountDownButton
              disabled={isSubmitDisabled}
              type='submit'
            >
              <Play size={'1.37rem'}/>
              <span>Começar</span>
            </StartCountDownButton>
        }
      </form>
    </HomeContainer>
  )
}
