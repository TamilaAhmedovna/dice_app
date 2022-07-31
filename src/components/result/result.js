import { create, all } from 'mathjs';
import React from 'react';

import './result.css';

function Result({ dices, operators, itemIds }) {

  const calc = () => {
    if (!itemIds.length) return null

    let resultStr

    itemIds.map((itemId, index) => {
      const value = (dices[itemId] || operators[itemId]).content

      return resultStr = (!index) ? `${value}` : `${resultStr}${value}`
    })

    const math = create(all)
    const result = math.evaluate(resultStr)

    return result.toFixed(2)
  }

  return (
    <div className='result'>
      <div className='result-title'>Result:</div>
      <div className='result-number'>{calc()}</div>
    </div>
  );
}

export default Result;
