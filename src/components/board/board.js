import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import initialData from '../../config';
import Dice from '../dice/dice';

import './board.css';

function Board({ dices, taskIds }) {

  return (
    <Droppable
      droppableId={initialData.columns.boardColumn.id}
    // direction="horizontal"
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className='board'>
            {taskIds.map((taskId, index) => {
              const dice = dices[taskId]
              console.log(dice)
              if (!dice) return null

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
  );
}

export default Board;
