import ExpBar from "../components/ExpBar"
import styled from 'styled-components'
import Profile from "../components/Profile"
import CompletedChallenges from "../components/CompletedChallenges"
import Countdown from "../components/Countdown"
import ChallengeBox from "../components/ChallengeBox"
import { CountdownProvider } from "../contexts/CountdownContext"


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
`

export default function Home() {
  return (
    <>
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
    </>
    )
}
