import PromoCard from './PromoCard'
import SectionWrapper from './SectionWrapper'

const PromoSection = () => {
  return (
    <SectionWrapper>
      <div className='h-56 lg:h-96 lg:flex lg:flex-1 mb-4 lg:mr-4'>
        <PromoCard
          image='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668853083/Eyou%20Design/photo_2022-11-19_11-13-34_gohsjf.jpg'
          buttonName='Show Collection'
          onClick={() => {}}
          title={'New arrivals are now in!'}
          tag={'New'}
        />
      </div>
      <div className='flex flex-1 gap-4'>
        <div className='h-32 lg:h-96 w-full'>
          <PromoCard
            image='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668858282/Eyou%20Design/photo_2022-02-24_10-31-26_iwg9x6.jpg'
            buttonName='More detail'
            onClick={() => {}}
            title={'Custom t-shirt $20'}
          />
        </div>
        <div className='h-32 lg:h-96 w-full'>
          <PromoCard
            image='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668853083/Eyou%20Design/photo_2022-11-19_11-13-15_sbhwbl.jpg'
            buttonName='View all'
            onClick={() => {}}
            title={'Sales'}
            tag={'up to 50% off'}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PromoSection
