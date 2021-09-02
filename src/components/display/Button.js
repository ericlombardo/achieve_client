
const Button = ({text, color, hover, width}) => {
  return (
    <div 
      className={`bg-${color} hover:bg-${hover} text-white font-bold py-2 px-4 rounded w-${width} text-center`}>
      <button type="submit"
      >{text}</button>
    </div>
  )
}

export default Button