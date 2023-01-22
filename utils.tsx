import { randomFacts } from "./constants"

export const getRandomFact = () => {
    let index = Math.round(Math.random()* (randomFacts.length - 0) + 0)
    console.log("getrandom index? ", index)
    console.log(randomFacts[0])
    return (randomFacts[index])
}