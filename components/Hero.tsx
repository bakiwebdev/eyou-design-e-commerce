import Image from 'next/image'
import FeatureCard from './FeatureCard'
import CreditCardIcon from './icons/CreditCardIcon'
import LeftArrowIcon from './icons/LeftArrowIcon'
import RightArrowIcon from './icons/RightArrowIcon'
import ShippingIcon from './icons/ShippingIcon'
import SparklesIcon from './icons/SparklesIcon'

const Hero = () => {
  return (
    <section className='h-screen w-full relative mb-10'>
      <div className='h-full w-full relative'>
        <Image
          src='https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828786_1280.jpg'
          alt='hero image'
          fill
          className='object-cover'
        />
        <div className='bg-black bg-opacity-25 w-full h-full absolute top-0 left-0'></div>
      </div>
      <div className='absolute top-0 left-0 flex w-full h-full justify-start items-center'>
        <div className='mx-5 md:mx-80 flex flex-col gap-8 lg:gap-16'>
          <p className='text-5xl lg:text-7xl text-white font-semibold tracking-wider'>
            Sales of the
            <br />
            summer
            <br />
            collection
          </p>
          <button className='w-fit flex jusce items-center gap-4 uppercase text-white font-bold'>
            <span className='h-10 w-10  bg-primary rounded-full flex justify-center items-center'>
              <RightArrowIcon />
            </span>
            Shop now
          </button>
        </div>
      </div>
      {/* footer */}
      <div className='absolute bottom-0 left-0 hidden md:flex h-32 w-full'>
        <div className='flex h-full justify-center items-center gap-20 bg-white w-3/4 rounded-tr-[100px]'>
          <FeatureCard
            icon={<ShippingIcon />}
            title='Free shipping'
            description='All purchases over $199 are eligible for
          free shipping via USPS First Class Mail.'
            primary
          />
          <FeatureCard
            icon={<CreditCardIcon />}
            title='Easy payment'
            description='All payments are processed instantly
            over a secure payment protocol.'
            primary
          />
          <FeatureCard
            icon={<SparklesIcon />}
            title='Finest quality'
            description='Designed to last, each of our products
            has been crafted with the finest
            materials.'
            primary
          />
        </div>
        <div className='flex flex-1 w-full gap-10 justify-center'>
          <div className='w-16 h-16 flex justify-center items-center cursor-pointer text-white bg-white bg-opacity-10'>
            <LeftArrowIcon />
          </div>
          <div className='w-16 h-16 flex justify-center items-center cursor-pointer bg-white'>
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
