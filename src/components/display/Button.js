// renders button element with type submit and base styling
const Button = ({text, classes, handleClick = null}) => {
  return (
    <div id="button" className="transform transition-all hover:scale-110 text-center f-title ">
      <button onClick={handleClick} className={classes} type="submit">{text}</button>
    </div>
  )
}

export default Button