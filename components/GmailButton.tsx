import GmailIcon from './icons/GmailIcon'

interface GmailButtonProps {
  onClick: () => void
}

const GmailButton = ({ onClick }: GmailButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex w-full gap-4 justify-center items-center bg-white rounded-full h-12 text-lg border border-google'>
      <GmailIcon /> Gmail
    </button>
  )
}

export default GmailButton
