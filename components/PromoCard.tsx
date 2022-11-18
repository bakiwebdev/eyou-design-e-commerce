import Image from 'next/image'
import Button from './Button'

interface PromoCardProps {
  tag?: string
  title: string
  buttonName: string
  onClick: () => void
}

const PromoCard = ({ tag, title, buttonName, onClick }: PromoCardProps) => {
  return (
    <div className='relative h-full w-full flex flex-col justify-end px-3 lg:px-8 py-5 lg:py-10 gap-2 lg:gap-5'>
      {tag && (
        <span className='absolute lg:relative z-10 top-0 left-0 my-2 mx-4 lg:m-4 flex w-fit px-3 py-1 lg:px-4 lg:py-2 bg-secondary rounded-full text-xs lg:text-base text-white'>
          {tag}
        </span>
      )}
      <p className='z-10 text-white font-semibold text-sm lg:text-2xl mx-2 lg:mx-5 max-w-[10rem]'>
        {title}
      </p>
      <div className='z-10'>
        <Button name={buttonName} onClick={onClick} className={''} />
      </div>
      <div className='absolute top-0 left-0 h-full w-full'>
        <Image
          src='https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828786_1280.jpg'
          alt='hero image'
          fill
          className='object-cover'
        />
        <div className='bg-black bg-opacity-25 w-full h-full absolute top-0 left-0'></div>
      </div>
    </div>
  )
}

export default PromoCard
