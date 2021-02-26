import { createContext,useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import LevelUpModal from '../components/LevelUpModal';

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
    completeChallenge: ()  => void
    closeLevelUpModal: () => void
}

interface ChallengeProviderProps {
    children: ReactNode
    level: number
    currentXp: number
    challengesCompleted: number
}

export const ChallengesContext = createContext({}as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengeProviderProps){
const [level, setLevel] = useState(rest.level ?? 1)
const [currentXp, setCurrentXp] = useState(rest.currentXp ?? 0)
const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0)
const [activeChallenge, setActiveChallenge] = useState(null)
const [ isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)


const experienceToNextLevel = Math.pow((level + 1)* 4, 2);

useEffect(()=>{
  Notification.requestPermission()  
},[])


useEffect(()=>{
    Cookies.set('level', String(level))
    Cookies.set('currentXp', String(currentXp))
    Cookies.set('challengesCompleted', String(challengesCompleted))
},[level, currentXp, challengesCompleted])


function levelUp(){
    setLevel( level + 1)
    setIsLevelUpModalOpen(true)
}

function closeLevelUpModal(){
    setIsLevelUpModalOpen(false)
}

function startNewChallenge(){
const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
const challeng = challenges[randomChallengeIndex]
setActiveChallenge(challeng)

new Audio('/notification.mp3').play();

if(Notification.permission === 'granted'){
    new Notification('Novo desafio 💪',{
      body: `Valendo ${challeng.amount}xp`   
    })
}
}

function resetChallenge(){
    setActiveChallenge(null)
}

function completeChallenge(){
    if(!activeChallenge){
        return;
    }
    const { amount } = activeChallenge;

    let finalXp = currentXp + amount;

    if(finalXp >= experienceToNextLevel ){
        finalXp = finalXp - experienceToNextLevel;
        levelUp()
    }
    setCurrentXp(finalXp)
    setActiveChallenge(null)
    setchallengesCompleted(challengesCompleted + 1)
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
    completeChallenge,
    closeLevelUpModal,
    }}>
        {children}
       {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
    )
}