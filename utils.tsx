import { randomFacts } from "./constants"

export const getRandomFact = () => {
    let index = Math.random()* (randomFacts.length - 0) + 0
    return (<p>{randomFacts[index]}</p>)
}