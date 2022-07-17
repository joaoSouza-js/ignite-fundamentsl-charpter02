import * as zod from 'zod'
import { HandPalm,Play } from 'phosphor-react'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CountDown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'
import { HomeContainer, StartCountDownButton,CancelCountDownButton} from './styles'
import { CycleContext } from '../../context/CycleContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1,'informe a tarefa'),
  minutesAmout: zod.number()
  .min(5,'um ciclo pode deve ter pelo menos 5 minutos')
  .max(60,'um ciclo deve ter no máximo 60 minutos')
})
type  NewClicleFormData  = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const {createNewCycle,activeCycle,interuptCurrentCycle} = useContext(CycleContext)
  const newCycleForm = useForm<NewClicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues:{
      task: '',
      minutesAmout: 0
    }
  })

  const { handleSubmit, watch,reset} = newCycleForm
  
  const task = watch('task')
  const minutesAmout = watch('minutesAmout')
  const isSubmitDisabled = !task || !minutesAmout 

  function handleCreateNewCycle(data:NewClicleFormData){
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        
        <FormProvider {...newCycleForm}>
          <NewCycleForm/>
        </FormProvider>
        <CountDown/>

        {
          activeCycle 
          ? <CancelCountDownButton
              type='button'
              onClick={interuptCurrentCycle}
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
