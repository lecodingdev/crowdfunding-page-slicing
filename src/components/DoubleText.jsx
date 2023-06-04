import React from 'react'
import Line from './Line'

const DoubleText = ({text1, text2, withLine}) => {
  return (
    <div className="">
        <p className="font-bold text-3xl">{text1}</p>
        <p className="text-dark-gray text-sm mt-2 mb-4">{text2}</p>
        {withLine && <Line />}
    </div>
  )
}

export default DoubleText