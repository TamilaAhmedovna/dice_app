import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Dice from '../dice/dice';
import { initialData } from '../../config';
import './dices.css';

function Dices({ dices, taskIds }) {

  const renderDicesList = () => {
    return (
      <Droppable
        droppableId={initialData.columns.diceColumn.id}
        direction="horizontal"
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
                  <Dice
                    dice={dice}
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
      <div className='dices-title'>Dices:</div>
      {renderDicesList()}
    </div>
  );
}

export default Dices;
