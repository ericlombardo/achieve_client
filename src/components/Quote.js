
const Quote = ({quote, classes}) => { // bring in quote and classes to apply
  return (
    <div className={classes}>
      <p>{quote.quote}</p>    {/* display quote and author*/}
      <p>- {quote.author}</p>
    </div>
  )
}

export default Quote
