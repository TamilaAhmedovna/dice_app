const getRandomOperators = () => {
    const signs = ['+', '-', '/', '*']
    const operators = {}
    const min = 0
    const max = 3

    for (let i = min; i <= max; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        const id = `operator${i}_${randomNum}`
        operators[id] = { id, content: signs[randomNum] }
    }

    return operators;
}

export default getRandomOperators
