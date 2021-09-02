import React, { useState, useEffect } from "react" //allows for setting state and lifecycle methods
import Quote from './Quote'

const QuoteContainer = () => {
  
  const [quotes, updateQuotes] = useState([])   // create quotes state and updateLoading to update
  const [loading, updateLoading] = useState(true) // handles async timing for render


  useEffect(() => {   // fetch quotes to add to local state
    async function fetchQuotes() {  // must be own function to use a hook
      const resp = await fetch('http://localhost:3000/quotes').then(resp => resp.json()) // fetch and wait for all quotes
      updateQuotes(resp) // update quotes state with response
      updateLoading(false) // set loading to false
    }   
    fetchQuotes() // call function we just created
  }, [])  // useEffect invoked EVERY rendering unless passed empty array


  // generate random number to select quote
  const ranIndex = Math.floor(Math.random() * quotes.length)
  

  if (loading === true) { // if loading
    return null // pass by
  } else { // if not loading
    return (  // return quote
      <div id="quote" className="text-center rounded-2xl shadow-2xl f-title">
        
        <Quote 
          quote={quotes[ranIndex]} 
          classes="bg-black opacity-98 text-white text-center rounded-2xl shadow-2xl f-body p-4"
        />

      </div> 
    )
  }
}

export default QuoteContainer