import React, { useState, useEffect } from "react" //allows for setting state and lifecycle methods

const Quote = ({quote, classes}) => {
  return (
    <div className={classes}>
      <p>{quote.quote}</p>
      <p>- {quote.author}</p>
    </div>
  )
}

export default Quote
