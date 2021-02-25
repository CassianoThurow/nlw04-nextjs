import styled, {css} from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

const CountdownContainer = styled.div`
    display:flex;
    align-items:center;
    font-family: Rajdhani;
    font-weight:600;
    color:var(--title);

    & > div {
        flex:1;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        background: var(--white);
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
const Button = styled.button<ActiveBtn>`
    width:100%;
    height:5rem;
    margin-top:2rem;
    display:flex;
    align-items:center;
    justify-content: center;
    border:0;
    border-radius:5px;

    background:var(--blue);
    color:var(--white);
    font-size:1.25rem;
    font-weight:600;
    transition: background-color 0.2s;

  
    &:hover{
        background:var(--blue-dark);  
    }

    &:disabled{
        background:var(--white);
        color:var(--text);
        cursor:not-allowed;
        border-bottom:3px solid var(--green);
        display:flex;
    }

    & > img{
        margin-left:10px;
    }

    ${props => props.active && css`

    background: var(--white);
    color:var(--title);
    &:hover{
    background:var(--red);
    color:var(--white);
    }
    `}
`
interface ActiveBtn {
    active?: boolean;
}


const Countdown = () => {

const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext)


const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')





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
            <img src="icons/check_circle.svg"/>
        </Button>
        ) : (
            <>
        { isActive ? (
        <Button onClick={resetCountdown} active >
            Abandonar ciclo 
        </Button> ) : (
        <Button onClick={startCountdown} >
            Iniciar ciclo
        </Button> 
        ) }
            </>
        )}
    </div> 
    )
}

export default Countdown
