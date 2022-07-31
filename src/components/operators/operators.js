import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DndItem from '../dice/dnd-item';

import './operators.css';

function Operators({ operators, operatorsColumn }) {
  const { id, title, taskIds } = operatorsColumn

  const renderOperatorsList = () => {
    return (
      <Droppable
        droppableId={id}
        type='board'
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div>
              {taskIds.map((taskId, index) => {
                const operator = operators[taskId]

                return (
                  <DndItem
                    value={operator}
                    index={index}
                    key={operator.id}
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
    <div className='operators'>
      <div className='operators-title'>{title}:</div>
      {renderOperatorsList()}
    </div>
  );
}

export default Operators;
// return operators.map((op, index) => {
//   return <Operator operator={op} key={index} />
// })