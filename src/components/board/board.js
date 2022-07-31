import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { initialData } from '../../config';
import DndItem from '../dice/dnd-item';

import './board.css';

function Board({ dices, operators, taskIds }) {

  return (
    <Droppable
      droppableId={initialData.columns.boardColumn.id}
      direction="horizontal"
      type='board'
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className='board'>
            {taskIds.map((taskId, index) => {
              const value = (dices[taskId] || operators[taskId])
              if (!value) return null

              return (
                <DndItem
                  value={value}
                  index={index}
                  key={value.id}
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
