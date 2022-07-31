import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { initialData } from '../../config';

import DndItem from '../dice/dnd-item';
import './dices.css';

function Dices({ dices, dicesColumn }) {
  const { id, title, taskIds } = dicesColumn

  const renderDicesList = () => {
    console.log(id)
    console.log(id === initialData.columns.operatorsColumn.id)
    return (
      <Droppable
        droppableId={id}
        direction="horizontal"
        // type={(id === initialData.columns.operatorsColumn.id)
          // ? 'boardColumn' : 'operationsColumn'}
          type='board'
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className='dices-list'>
              {taskIds.map((taskId, index) => {
                const dice = dices[taskId]

                return (
                  <DndItem
                    value={dice}
                    index={index}
                    key={dice.id}
                  />
                )
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }

  return (
    <div className='dices'>
      <div className='dices-title'>{title}:</div>
      {renderDicesList()}
    </div>
  );
}

export default Dices;
