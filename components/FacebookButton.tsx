import FacebookIcon from './icons/FacebookIcon'

interface FacebookButtonProps {
  onClick: () => void
}

const FacebookButton = ({ onClick }: FacebookButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex w-full gap-4 justify-center items-center bg-fb rounded-full h-12 text-white fill-white text-lg'>
      <FacebookIcon /> Facebook
    </button>
  )
}

export default FacebookButton
