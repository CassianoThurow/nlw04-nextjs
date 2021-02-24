import React from 'react'
import styled from 'styled-components'


const ChallengeBoxContainer = styled.div`
    height:100%;
    background: #fff;
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
        background: var(--green);
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
`




const ChallengeBox = () => {
const hasActiveChallenge = true


    return (
        <ChallengeBoxContainer>
            {hasActiveChallenge ? (
                <ChallengeActive>
                <header>Ganhe 400xp</header>
                <main>
                    <img src="icons/body.svg"/>
                    <strong>Novo desafio</strong>
                    <p>Levante e faça uma caminhada de 3 minutos</p>
                </main>

                <footer>
                    <ChallengeFailedButton>
                        Falhei
                    </ChallengeFailedButton>
                    <ChallengeSucceededButton>
                        Completei
                    </ChallengeSucceededButton>
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
