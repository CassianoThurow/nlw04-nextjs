import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'

const CompletedChallengesContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom:1px solid var(--gray-line);
    font-weight: 500;

    & > span:first-child{
        font-size:1.25rem
    }
    & > span:last-child{
        font-size:1.5rem;
    }
`



const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <CompletedChallengesContainer>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    )
}

export default CompletedChallenges
