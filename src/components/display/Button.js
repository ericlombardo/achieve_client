
const Button = ({text}) => {
  return (
    <div 
      className="bg-elgray-500 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded">
      <button type="submit"
      >{text}</button>
    </div>
  )
}

export default Button