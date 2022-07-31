import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './dnd-item.css';

function DndItem({ value, index }) {

  return (
    <Draggable draggableId={value.id.toString()} index={index}>
      {(provided) => (
        <div
          className='dnd-item'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {value.content}
        </div>
      )}
    </Draggable>
  );
}

export default DndItem;
