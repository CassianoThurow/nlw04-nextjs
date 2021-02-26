import ExpBar from "../components/ExpBar"
import styled from 'styled-components'
import Profile from "../components/Profile"
import CompletedChallenges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"
import ChallengeBox from "../components/ChallengeBox"
import { CountdownProvider } from "../contexts/CountdownContext"
import { GetServerSideProps} from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext'

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`

const SectionHome = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6.25rem;
  align-content: center;

  @media(max-width:425px){
    grid-template-columns: 1fr
  }
`

interface HomeProps {
  level: number
  currentXp: number
  challengesCompleted: number
}

export default function Home(props:HomeProps) {


  return (
    <>
    <ChallengesProvider level={props.level} currentXp={props.currentXp} challengesCompleted={props.challengesCompleted}>
    <Container>
    <ExpBar />
    <CountdownProvider>
    <SectionHome>
      <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdown />
      </div>
      <div>
        <ChallengeBox/>
      </div>
    </SectionHome>
    </CountdownProvider>
    </Container>
    </ChallengesProvider>
    </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>{

  const { level, currentXp, challengesCompleted} = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted)
    },
  }
}