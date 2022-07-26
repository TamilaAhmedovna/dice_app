const getRandomDices = () => {
    const dices = {}
    const numbers = [1, 2, 3, 4, 5, 6]
    const randomNumbers = numbers.sort(() => Math.random() - 0.5);
    randomNumbers.pop()
    randomNumbers.map(num => dices[`dice${num}`] = { id: num, content: num })

    return dices;
}

export default getRandomDices
