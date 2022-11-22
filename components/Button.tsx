interface ButtonProps {
  name: string
  onClick: () => void
  primary?: boolean
  width?: 'fit' | 'full'
}

const Button = ({ name, onClick, primary, width = 'fit' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 px-4 lg:px-10 w-${width} py-2 tracking-wider text-sm lg:text-xl  rounded-full ${
        primary ? 'bg-primary text-white' : 'bg-white text-black'
      }`}>
      {name}
    </button>
  )
}

export default Button
