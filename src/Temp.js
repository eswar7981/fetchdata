import React from 'react'

const Temp = (props) => {
  return (
    <div>
        <button onClick={()=>(props.setValue())}>
        </button>
    </div>
  )
}

export default Temp
