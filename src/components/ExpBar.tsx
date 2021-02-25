import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'

const Head = styled.header`
display: flex;
align-items: center;
`
const Start = styled.span`
font-size: 1rem;
`
const Wrapper = styled.div`
flex: 1;
height: 4px;
border-radius: 4px;
background: var(--gray-line);
margin: 0 1.5rem;
position: relative;
`
const CurrentProgress = styled.div`
height: 4px;
border-radius: 4px;
background: var(--green);
`
const CurrentXp = styled.div`
position: absolute;
top: 12px;
transform: translateX(-50%);
`

const ExpBar = () => {
const { currentXp, experienceToNextLevel } = useContext(ChallengesContext)

const percentToNextLevel = Math.round((currentXp * 100)) / experienceToNextLevel


    return (
        <Head>
            <Start>0 xp</Start>
            <Wrapper>
                <CurrentProgress style={{width:`${percentToNextLevel}%`}}/>
                <CurrentXp style={{left: `${percentToNextLevel}%`}}>{currentXp} xp</CurrentXp>
            </Wrapper>
            <Start>{experienceToNextLevel} xp</Start>
        </Head>
    )
}

export default ExpBar
