export const operatorsConfig = {
    plus: '+', 
    minus: '-', 
    division: '/', 
    multiplication: '*'
}

export const getRandomOperators = () => {
    const operators = {}
    const min = 0
    const max = 3

    for (let i = min; i <= max; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        const id = `operator${i}_${randomNum}`
        const randomOpetator = Object.keys(operatorsConfig)[randomNum]
        operators[id] = { id, content: operatorsConfig[randomOpetator] }
    }

    return operators;
}
