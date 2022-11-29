import Link from 'next/link'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import NavBar from '../components/NavBar'
import SectionWrapper from '../components/SectionWrapper'

const ProductDetail = () => {
  return (
    <div className='relative'>
      <NavBar />
      <SectionWrapper>
        <div className='my-5 flex lg:flex-1 flex-col justify-center items-start lg:items-center'>
          <Link
            href={'/'}
            className='flex w-full justify-start items-center gap-5 my-6 cursor-pointer'>
            <LeftArrowIcon />
            <span className='font'>Continue Shopping</span>
          </Link>
          {/* Shopping state indicator */}
          {/* Shopping cart */}
          <div>
            <h3 className='font-bold text-3xl my-3'>Shopping Cart</h3>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default ProductDetail
