import React from 'react'

const ProgressBar = () => {
  return (
    <div className="relative w-10/12">
        <div className="absolute bg-gray-200 py-1.5 w-full rounded-full" />
        <div className="absolute bg-moderate-cyan py-1.5 w-2/3 rounded-full"/>
    </div>
  )
}

export default ProgressBar