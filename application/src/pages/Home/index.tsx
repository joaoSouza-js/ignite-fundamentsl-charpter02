import * as zod from 'zod'
import {HandPalm,Play} from 'phosphor-react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {differenceInSeconds} from 'date-fns'
import { 
  TaskInput,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  CountDowmContainer,
  StartCountDownButton,
  CancelCountDownButton,
} from './styles'
import { useEffect, useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1,'informe a tarefa'),
  minutesAmout: zod.number()
  .min(1,'um ciclo pode deve ter pelo menos 5 minutos')
  .max(60,'um ciclo deve ter no máximo 60 minutos')
})

type  NewClicleFormData  = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string,
  task: string,
  minutesAmount: number,
  startDate: Date,
  dateInterrupted?: Date,
  dateFinished?: Date
}


export function Home() {

  const {register, handleSubmit, watch,reset} = useForm<NewClicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues:{
      task: '',
      minutesAmout: 0
    }
  })

  const [CycleList, setCycleList] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string| null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


  const activeCycle = CycleList.find(cycle => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0


  useEffect(() =>{
    let interval:number;

    if(activeCycle){
      interval = setInterval(() => {
        const differenceBetweenDatesInSeconds = differenceInSeconds(new Date(), activeCycle.startDate)

        if(differenceBetweenDatesInSeconds > totalSeconds){

          const cyclelistWithOneUpdated = CycleList.map(cycle =>{ 
            if(cycle.id === activeCycle?.id){
              return {...cycle, dateFinished: new Date(),}}
              return cycle
          })

          setCycleList(state => cyclelistWithOneUpdated)
          setActiveCycleId(null)

          clearInterval(interval)

        }
        else{
          setAmountSecondsPassed(state => differenceBetweenDatesInSeconds )
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  },[activeCycle,totalSeconds,activeCycle?.id])



  const task = watch('task')
  const minutesAmout = watch('minutesAmout')

 

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2,'0')
  const seconds = String(secondsAmount).padStart(2,'0')

  
  function handleCreateNewCycle(data:NewClicleFormData){
    const id = String(new Date().getTime())
    const newCyle: Cycle = {
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

  useEffect(()=>{
    if(activeCycle){document.title = `${minutes}:${seconds}`}
  },[minutes,seconds])
  
  
  
  const isSubmitDisabled = !task || !minutesAmout 
  const isActiveCycle = !!activeCycle 
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

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
            min={1}
            {...register('minutesAmout',{valueAsNumber: true})}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDowmContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span className='separator'>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDowmContainer>
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
