import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Dice from '../dice/dice';
import initialData from '../../config';
import './dices.css';

function Dices({ dices }) {

  const renderDicesList = () => {
    return (
      <Droppable 
      droppableId={initialData.columns.diceColumn.id}
      // direction="horizontal"
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {Object.keys(dices).map((key, index) => {
              return (
                <Dice
                  dice={dices[key]}
                  index={index}
                  key={dices[key].id}
                />
              )
            })}
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
