import React, { useEffect } from "react"
// set them to state
// select one to display
// display one

const Quote = () => {
  
  // useEffect invoked EVERY rendering unless passed empty array
  // empty array only invokes first time like componentDidMount
  useEffect(() => {       
    console.log('bingo')  // set up store and thunk for async fetch
  }, [])
  
  return(
    <div>
      <h1>hello</h1>
    </div>
  )
}





export default Quote