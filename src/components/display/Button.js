
const Button = ({text, classes, handleClick = null}) => {
  return (
    <>
      <button onClick={handleClick} className={classes} type="submit">{text}</button>
    </>
  )
}

export default Button