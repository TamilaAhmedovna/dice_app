import { create, all } from 'mathjs';
import React from 'react';

import './result.css';

function Result({ dices, operators, itemIds }) {

  const calculate = resultStr => {
    try {
      const math = create(all)
      const result = math.evaluate(resultStr)

      return result.toFixed(2)
    } catch (e) {
      return '--'
    }
  }

  const renderResult = () => {
    if (!itemIds.length) return null
    let resultStr
    itemIds.map((itemId, index) => {
      const value = (dices[itemId] || operators[itemId]).content
      return resultStr = (!index) ? `${value}` : `${resultStr}${value}`
    })

    return calculate(resultStr)
  }

  return (
    <div className='result'>
      <div className='result-title'>Result:</div>
      <div className='result-number'>{renderResult()}</div>
    </div>
  );
}

export default Result;
