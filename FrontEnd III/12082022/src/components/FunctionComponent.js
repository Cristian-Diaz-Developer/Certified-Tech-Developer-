import React from 'react'

const FunctionComponent = ({nombre, tarea}) => {
  return (
    <div>
      <li>{nombre} traera {tarea}</li>
    </div>
  )
}

export default FunctionComponent