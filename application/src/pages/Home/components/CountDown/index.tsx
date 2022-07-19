import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { CountDowmContainer } from "./styled";
import { CycleContext } from "../../../../context/CycleContext";


export function CountDown(){
  const 
  {
    activeCycle,
    markCurruntCycleAsFinished,
    ChangeAmountSecondsPassed,
    amountSecondsPassed
  } = useContext(CycleContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0


  useEffect(() => {
    let interval: number;
  
    if(activeCycle){
      interval = setInterval(() => {
        const differenceBetweenDatesInSeconds = differenceInSeconds
        (new Date(), new Date(activeCycle.startDate))

        if(differenceBetweenDatesInSeconds > totalSeconds){
          markCurruntCycleAsFinished()    
          clearInterval(interval)
        }
        else{
          ChangeAmountSecondsPassed(differenceBetweenDatesInSeconds)
        }
      }, 1000)
    }

    return () => clearInterval(interval)

  },[activeCycle,totalSeconds,activeCycle?.id,markCurruntCycleAsFinished])


  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2,'0')
  const seconds = String(secondsAmount).padStart(2,'0')

  useEffect(() => {
    if(activeCycle){document.title = `${minutes}:${seconds}`}
  },[minutes,seconds, activeCycle])
  

  return(
      <CountDowmContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span className='separator'>:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
      </CountDowmContainer>
  )
}