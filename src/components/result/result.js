import React from 'react';

import './result.css';

function Result({ dices, taskIds }) {
  console.log(taskIds)
  console.log(dices)
  let result
  if (!taskIds.length) return null
  taskIds.map((taskId, index) => {
    const value = dices[taskId].content

    if (!index) {
      return result = value
    }

    return result = `${result}${value}`
  })

  return (
    <div className='result'>
      <div className='result-title'>Result:</div>
      <div className='result-number'>{result}</div>
    </div>
  );
}

export default Result;
