import ProductCard from './ProductCard'
import SectionWrapper from './SectionWrapper'

interface SelectedProductSectionProps {
  products: any[]
  header: string
  onClick: () => void
}

const SelectedProductSection = ({
  products,
  header,
  onClick,
}: SelectedProductSectionProps) => {
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              alt={product.alt}
              tag={product.tag}
              title={product.title}
              discount={product.discount}
              price={product.price}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SelectedProductSection
