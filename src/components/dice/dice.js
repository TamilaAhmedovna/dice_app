import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './dice.css';

function Dice({ dice, index }) {

  return (
    <Draggable draggableId={dice.id.toString()} index={index}>
      {(provided) => (
        <div
          className='dice'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {dice.content}
        </div>
      )}
    </Draggable>
  );
}

export default Dice;
