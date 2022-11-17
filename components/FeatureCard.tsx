import { ReactElement } from 'react'

interface FeatureCardProps {
  icon: ReactElement
  title: string
  description: string
  primary?: boolean
}

const FeatureCard = ({
  icon,
  title,
  description,
  primary,
}: FeatureCardProps) => {
  return (
    <div className='flex gap-3 justify-start items-start w-fit'>
      <div
        className={`rounded-md flex box-border justify-center items-center p-4 bg-lightGray ${
          primary && 'bg-lightPrimary text-primary'
        }`}>
        {icon}
      </div>
      <div className='flex flex-col'>
        <h3 className='text-md font-semibold'>{title}</h3>
        <p className='text-sm font-extralight'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
