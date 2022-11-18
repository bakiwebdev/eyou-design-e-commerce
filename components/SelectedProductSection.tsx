import ProductCard from './ProductCard'
import SectionWrapper from './SectionWrapper'

interface SelectedProductSectionProps {
  // products: any[]
  header: string
  onClick: () => void
}

const SelectedProductSection = ({
  header,
  onClick,
}: SelectedProductSectionProps) => {
  const imageUrl =
    'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_1280.png'
  return (
    <SectionWrapper>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <p className='text-xl lg:text-2xl font-extralight'>{header}</p>
          <button
            onClick={onClick}
            className='text-primary lg:text-xl font-semibold'>
            Show more
          </button>
        </div>
        <div className='h-fit flex flex-1 overflow-x-auto gap-2 lg:gap-10 my-3 lg:my-12 py-2 lg:py-5'>
          {[...Array(10)].map((_, index) => (
            <ProductCard
              key={index}
              image={imageUrl}
              alt={'Nice T-shirt'}
              tag={'-20%'}
              title={'Basic t-shirt'}
              discount={'$80'}
              price={'$100'}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SelectedProductSection
