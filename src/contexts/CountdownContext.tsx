import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData {
    minutes: number
    seconds: number
    hasFinished: boolean
    isActive: boolean
    startCountdown: () => void
    resetCountdown: () => void

}

interface CountdownProviderProps{
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData )


export function CountdownProvider({children}: CountdownProviderProps){
let countdownTimeout: NodeJS.Timeout;


    const { startNewChallenge } = useContext(ChallengesContext)


    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsAtive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setIsAtive(true)
    }
    
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsAtive(false)
        setHasFinished(false)
        setTime(25 * 60)
    }
    
        useEffect(()=>{
            if(isActive && time >0){
                countdownTimeout = setTimeout(()=>{
             setTime(time -1)
            }, 1000)
        }
            else if(isActive && time === 0){
            setHasFinished(true)
            setIsAtive(false)
            startNewChallenge()
            }
        },[isActive, time])





    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}