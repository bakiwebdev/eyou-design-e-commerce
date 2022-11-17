import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  onClick: () => void
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button onClick={onClick} type='button' className=' hover:bg-gray-100 '>
      {icon}
    </button>
  )
}

export default IconButton
