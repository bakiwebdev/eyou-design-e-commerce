interface ButtonProps {
  name: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ name, onClick, primary }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`m-1 lg:m-2 px-4 lg:px-10 w-fit py-2 tracking-wider text-sm lg:text-xl  rounded-full ${
        primary ? 'bg-primary text-white' : 'bg-white text-black'
      }`}>
      {name}
    </button>
  )
}

export default Button
