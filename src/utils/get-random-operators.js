const signs = ['+', '-', '/', '*']
const min = 0
const max = signs.length - 1 

const getRandomOperators = () => {
    const operators = {}

    for (let i = min; i <= max; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        const id = `operator${i}_${randomNum}`
        operators[id] = { id, content: signs[randomNum] }
    }

    return operators;
}

export default getRandomOperators
