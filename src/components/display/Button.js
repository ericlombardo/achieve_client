
const Button = ({text, classes}) => {
  return (
    <div>
      <button className={classes} type="submit">{text}</button>
    </div>
  )
}

export default Button