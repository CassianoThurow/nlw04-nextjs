import styled, {css} from 'styled-components'
import { useState, useEffect } from 'react'

const CountdownContainer = styled.div`
    display:flex;
    align-items:center;
    font-family: Rajdhani;
    font-weight:600;
    color:#2e384d;

    & > div {
        flex:1;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        background: #fff;
        box-shadow: 0 0 60px rgba (0, 0, 0, 0.05 )
        border-radius:5px;
        font-size: 8.5rem;
        text-align:center;
    }

    & > div > span {
        flex:1;
    }

    & > div > span:first-child {
        border-right: 1px solid #f8f1f3
    }
    & > div > span:last-child {
        border-left: 1px solid #f8f1f3
    }

    & > span {
        font-size:6.25rem;
        margin:0 0.5rem;
    }
`
const Button = styled.button`
    width:100%;
    height:5rem;
    margin-top:2rem;
    display:flex;
    align-items:center;
    justify-content: center;
    border:0;
    border-radius:5px;

    background:#5965e0;
    color:#fff;
    font-size:1.25rem;
    font-weight:600;
    transition: background-color 0.2s;

  
    &:not(:disable):hover{
        background:#4953b8;  
    }

    &:disabled{
        background:#fff;
        color:#666666;
        cursor:not-allowed;
    }

    ${props => props.active && css`

    background: #fff;
    color:#2e384d;
    &:hover{
    background:#e83f5b;
    color:#fff;
    }
    `}
`

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {



const [time, setTime] = useState(0.1 * 60)
const [isActive, setIsAtive] = useState(false)
const [hasFinished, setHasFinished] = useState(false)


const minutes = Math.floor(time / 60);
const seconds = time % 60;

const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


function startCountdown(){
    setIsAtive(true)
}

function resetCountdown(){
    clearTimeout(countdownTimeout)
    setIsAtive(false)
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
        }
    },[isActive, time])


    return (
    <div>
        <CountdownContainer>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
                <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </CountdownContainer>



        {hasFinished ? (
        <Button disabled>
            Ciclo encerado
        </Button>
        ) : (
            <>
        { isActive ? (
        <Button onClick={resetCountdown} active >
            Abandonar ciclo
        </Button> ) : (
        <Button onClick={startCountdown}>
            Iniciar ciclo
        </Button> 
        ) }
            </>
        )}
    </div> 
    )
}

export default Countdown
