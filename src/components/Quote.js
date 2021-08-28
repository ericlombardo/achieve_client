import React, { useState, useEffect } from "react" //allows for setting state and lifecycle methods

const Quote = () => {
  
  const [quotes, updateQuotes] = useState([])   // create quotes state and updateLoading to update
  const [loading, updateLoading] = useState(true) // handles async timing for render
  
  useEffect(() => {   // must be own function to use a hook
    async function fetchQuotes() {
      const resp = await fetch('http://localhost:3000/quotes').then(resp => resp.json()) // wait until you have quotes
      updateQuotes(resp)
      updateLoading(false)
    }   
    fetchQuotes() // call function we just created
  }, [])  // useEffect invoked EVERY rendering unless passed empty array

  // generate random number to select quote
  const ranIndex = Math.floor(Math.random() * quotes.length)
  
  if (loading === true) { // if loading
    return null // pass by
  } else { // if not loading
    return (  // return quote
      <div>
        <p>{quotes[ranIndex].quote}</p>
        <p>- {quotes[ranIndex].author}</p>
      </div> 
    )
  }
}

export default Quote
