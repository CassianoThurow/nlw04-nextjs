import {useContext} from 'react'
import styled, { css } from 'styled-components'
import {ChallengesContext} from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

const ChallengeBoxContainer = styled.div`
    height:100%;
    background: var(--white);
    border-radius:5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding:1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;

` 
const ChallengeNotActive = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;

    & > strong{
        font-size: 1.5rem;
        font-weight:600;
        line-height:1.4;
    }

    & > p {
       display: flex;
       flex-direction: column;
       align-items: center;
       line-height:1.4;
       max-width: 70%;
       margin-top:3rem;
    }
    & > p > img {
        margin-bottom:1rem;
     }
` 

const ChallengeActive = styled.div`
     height:100%;
     display:flex;
     flex-direction: column;

     & > header {
         color: var(--blue);
         font-weight:600;
         font-size:1.25rem;
         padding: 0 2rem 1.5rem;
         border-bottom: 1px solid var(--gray-line)
     }

     & > main{
         flex: 1;
         display:flex;
         flex-direction: column;
         align-items: center;
         justify-content:center;
     }

     & > main > strong {
        font-size:2rem;
        font-weight:600;
        color: var(--title);
        margin:1.5rem 0 1rem;
     }
     & > main > p {
         line-height:1.5;
     }

     & > footer {
         display:grid;
         grid-template-columns: repeat(2, 1fr);
         gap:1rem;
     }

`

const ChallengeFailedButton = styled.button`
     height:3rem;
     display:flex;
     align-items:center;
     justify-content:center;
     border:0;
     border-radius:5px;
     color:var(--white);
     font-size:1rem;
     font-weight:600;
     background: var(--red);
     transition: filter 0.2s;
     &:hover{
         filter: brightness(0.9);
     }

`
const ChallengeSucceededButton = styled.button`
        height:3rem;
        display:flex;
        align-items:center;
        justify-content:center;
        border:0;
        border-radius:5px;
        color:var(--white);
        font-size:1rem;
        font-weight:600;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
`


const ChallengeBtn = styled.button<StatusBtn>`
    height:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border:0;
    border-radius:5px;
    color:var(--white);
    font-size:1rem;
    font-weight:600;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.9);
    }
    ${props => props.success && css`
    background: var(--green);
    `}
    ${props => props.failed && css`
    background: var(--red);
    `}
    `

    interface StatusBtn {
        failed?: boolean;
        success?: boolean;
    }  


const ChallengeBox = () => {
const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
const { resetCountdown } = useContext(CountdownContext)

function handleChallengeSucceeded(){
    completeChallenge()
    resetCountdown()
}

function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
}


    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <ChallengeActive>
                <header>Ganhe {activeChallenge.amount}</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <ChallengeBtn failed onClick={handleChallengeFailed}  >
                        Falhei
                    </ChallengeBtn>
                    <ChallengeBtn success onClick={handleChallengeSucceeded}>
                        Completei
                    </ChallengeBtn>
                </footer>

                </ChallengeActive>
            ) : (
               <ChallengeNotActive>
               <strong>Inicie um ciclo para receber desafios a serem completados</strong>
               <p>
                  <img src="icons/level-up.svg" /> 
                  Avance de Nivel completando desafios
               </p>
           </ChallengeNotActive> 
            )}
        </ChallengeBoxContainer>
    )
}

export default ChallengeBox
