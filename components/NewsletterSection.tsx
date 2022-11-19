import Image from 'next/image'
import Button from './Button'
import SectionWrapper from './SectionWrapper'

const NewsletterSection = () => {
  return (
    <SectionWrapper>
      <div className='relative h-56 lg:h-96 w-full flex lg:flex-row flex-col justify-center lg:items-center gap-5 px-5 lg:px-40'>
        <p className='text-xl lg:text-4xl font-light text-start z-10 text-white tracking-widest'>
          Subscribe to our newsletter and receive exclusive offers every week
        </p>
        <div className='flex flex-wrap lg:flex-nowrap w-full lg:w-fit items-center justify-start gap-3 z-10 h-fit'>
          <input
            type='text'
            placeholder='Enter your email'
            className='w-60 lg:w-96 h-10 rounded-full px-8 py-3 lg:px-14 lg:py-5 active:outline-none focus:outline-none'
          />
          <Button name='Subscribe' onClick={() => {}} primary />
        </div>
        <div className='absolute top-0 left-0 h-full w-full'>
          <Image
            src='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668855194/Eyou%20Design/photo_2021-01-11_15-18-20_eqy7l1.jpg'
            alt='Newsletter'
            fill
            className='object-cover'
          />
          <div className='bg-black bg-opacity-40 w-full h-full absolute top-0 left-0'></div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default NewsletterSection
