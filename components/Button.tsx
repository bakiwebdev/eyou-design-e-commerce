interface ButtonProps {
  name: string
  onClick: () => void
  className?: string
}

const Button = ({ name, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`m-1 lg:m-2 px-4 lg:px-10 w-fit py-2 tracking-wider bg-white text-sm lg:text-xl text-black rounded-full ${className}`}>
      {name}
    </button>
  )
}

export default Button
