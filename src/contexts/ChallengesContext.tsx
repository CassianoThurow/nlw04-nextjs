import { createContext,useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface challenge  {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentXp: number
    challengesCompleted: number
    levelUp: () => void
    startNewChallenge: () => void
    activeChallenge: challenge
    resetChallenge: () => void
    experienceToNextLevel: number
}

interface ChallengeProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({}as ChallengesContextData);

export function ChallengesProvider({children}: ChallengeProviderProps){
const [level, setLevel] = useState(1)
const [currentXp, setCurrentXp] = useState(0)
const [challengesCompleted, setchallengesCompleted] = useState(0)
const [activeChallenge, setActiveChallenge] = useState(null)


const experienceToNextLevel = Math.pow((level + 1)* 4, 2);


function levelUp(){
    setLevel( level + 1)
}

function startNewChallenge(){
const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
const challeng = challenges[randomChallengeIndex]
setActiveChallenge(challeng)
}

function resetChallenge(){
    setActiveChallenge(null)
}



    return(
    <ChallengesContext.Provider value={{
    level,
    currentXp, 
    challengesCompleted,
    experienceToNextLevel,
    levelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge,
    }}>
        {children}
    </ChallengesContext.Provider>
    )
}