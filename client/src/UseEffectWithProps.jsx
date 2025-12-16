import React, { useEffect } from 'react'

const useEffectWithProps = (props) => {
   useEffect(() => {
      console.log("Use Effect With Props", props);
   })
  return (
    <>
      <h2>Use Effect With Props</h2>
      <h3>Count: {props.data} </h3>
    </>
  )
}

export default useEffectWithProps
