import React from 'react';
import classNames from 'classnames';
import { Droppable } from 'react-beautiful-dnd';

import initialData from '../../config';
import DndItem from '../dnd-item/dnd-item';
import './dnd-column.css';

function DndColumn({ items, items2, column }) {
  const { id, title, itemIds } = column
  const isBoard = id === initialData.columns.boardColumn.id
  const columnClass = classNames({
    'dnd-column-list': true,
    board: isBoard
  })

  const renderList = () => {
    return itemIds.map((itemId, index) => {
      const item = (items[itemId] || items2[itemId])

      if (!item) return null

      return (
        <DndItem
          value={item}
          index={index}
          key={item.id}
        />
      )
    })
  }

  const renderColumn = () => {
    return (
      <Droppable
        droppableId={id}
        direction="horizontal"
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className={columnClass}>
              {renderList()}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }

  return (
    <div className='dnd-column'>
      <div className='dnd-column-title'>{title}:</div>
      {renderColumn()}
    </div>
  );
}

export default DndColumn;
