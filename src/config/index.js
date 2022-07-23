const getDices = () => {
    const dices = {}
    const numbers = [1, 2, 3, 4, 5, 6]
    const randomNumbers = numbers.sort(() => Math.random() - 0.5);
    randomNumbers.pop()
    randomNumbers.map(num => dices[`dice${num}`] = { id: num, content: num })

    return dices;
}

const initialData = {
    dices: getDices(),
    columns: {
        diceColumn: {
            id: 'diceColumn',
            title: 'Dices',
            taskIds: ['dice1', 'dice2', 'dice3', 'dice4', 'dice5']
        },
        operatorsColumn: {
            id: 'operatorsColumn',
            title: 'Operators',
            taskIds: []
        },
        boardColumn: {
            id: 'operatorsColumn',
            title: 'Board',
            taskIds: []
        }
    },
    columnOrder: ['diceColumn']
}

export default initialData;
