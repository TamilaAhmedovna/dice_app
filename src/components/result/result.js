import { create, all } from 'mathjs';
import React from 'react';

import './result.css';

function Result({ dices, operators, taskIds }) {

  const calc = () => {
    if (!taskIds.length) return null

    let resultStr

    taskIds.map((taskId, index) => {
      const value = (dices[taskId] || operators[taskId]).content

      resultStr = (!index) ? `${value}` : `${resultStr}${value}`
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
