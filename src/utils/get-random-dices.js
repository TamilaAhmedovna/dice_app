const getRandomDices = () => {
    const dices = {}
    const min = 1
    const max = 6

    for (let i = min; i <= (max - 1); i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        const id = `dice${i}_${randomNum}`
        dices[id] = { id, content: randomNum }
    }

    return dices;
}

export default getRandomDices
