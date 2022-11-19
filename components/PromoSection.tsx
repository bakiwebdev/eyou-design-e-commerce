import PromoCard from './PromoCard'
import SectionWrapper from './SectionWrapper'

const PromoSection = () => {
  return (
    <SectionWrapper>
      <div className='h-56 lg:h-96 lg:flex lg:flex-1'>
        <PromoCard
          buttonName='Show Collection'
          onClick={() => {}}
          title={'New arrivals are now in!'}
          tag={'New'}
        />
      </div>
      <div className='flex flex-1 gap-4'>
        <div className='h-32 lg:h-96 w-full'>
          <PromoCard
            buttonName='More detail'
            onClick={() => {}}
            title={'Basic t-shirt $20'}
          />
        </div>
        <div className='h-32 lg:h-96 w-full'>
          <PromoCard
            buttonName='View all'
            onClick={() => {}}
            title={'Sales'}
            tag={'50%'}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PromoSection
