import Button from './Button'
import SectionWrapper from './SectionWrapper'

const CustomDesignServiceCard = () => {
  return (
    <SectionWrapper>
      <div className='bg-primary h-40 lg:h-80 flex flex-1 flex-col justify-center items-start gap-3 lg:gap-6 p-4 lg:px-10'>
        <h3 className='text-lg lg:text-4xl font-semibold tracking-wide lg:mx-4'>
          Looking for custom design ?
        </h3>
        <p className='text lg:text-xl font-extralight my-1 lg:mx-4'>
          If you have custom design, we can print and ship to your location.
        </p>
        <Button name='Get in touch' onClick={() => {}} />
      </div>
    </SectionWrapper>
  )
}

export default CustomDesignServiceCard
