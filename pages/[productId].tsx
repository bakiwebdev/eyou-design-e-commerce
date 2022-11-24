import NavBar from '../components/NavBar'
import Image from 'next/image'
import Slider from 'react-slick'
import SectionWrapper from '../components/SectionWrapper'
import ReactStars from 'react-stars'
import Footer from '../components/footer'
import SelectedProductSection from '../components/SelectedProductSection'
import { today_deal_data } from '../data/product'
import MinusIcon from '../components/icons/MinusIcon'
import PlusIcon from '../components/icons/PlusIcon'
import Button from '../components/Button'

const ProductDetail = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className='relative flex flex-col w-screen h-fit overflow-x-hidden gap-5'>
      <NavBar />
      <section className='relative w-full h-96 mt-14 bg-lightPrimary'>
        <Slider {...settings}>
          <div className='relative h-96 w-full'>
            <Image
              src='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668853082/Eyou%20Design/photo_2022-11-19_11-13-25_kzbd6l.jpg'
              alt='product image'
              fill
              className='object-contain'
            />
          </div>
          <div className='relative h-96 w-full'>
            <Image
              src='https://res.cloudinary.com/dcmvndqd1/image/upload/v1668853082/Eyou%20Design/photo_2022-11-19_11-12-55_vhw8fl.jpg'
              alt='product image'
              fill
              className='object-contain'
            />
          </div>
        </Slider>
      </section>
      <section className='h-fit w-full px-4 lg:px-28 mt-5 mb-2 lg:my-28 flex lg:flex-row flex-col gap-2'>
        {/* collection name */}
        <p className='font-light tracking-wider text-sm'>My collection name</p>
        {/* product name */}
        <h1 className='text-2xl tracking-wider'>Brand new Hoodie</h1>
        {/* price with discount */}
        <div className='flex gap-4 text-2xl '>
          {<p className='text-secondary'>$80</p>}
          <p className='text-gray line-through'>$100</p>
        </div>
        {/* color if exist */}
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-grayText'>Color</p>
          {/* available color lists */}
          <div className='flex flex-wrap gap-4'>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <span className='w-5 h-5 bg-green-400' />
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-primary shadow-md'>
              <span className='w-5 h-5 bg-blue-400' />
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <span className='w-5 h-5 bg-red-400' />
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <span className='w-5 h-5 bg-orange-400' />
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <span className='w-5 h-5 bg-black' />
            </div>
          </div>
        </div>
        {/* size if exist */}
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-grayText'>Size</p>
          {/* available color lists */}
          <div className='flex flex-wrap gap-4'>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <p className='text-sm uppercase'>s</p>
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <p className='text-sm uppercase'>m</p>
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <p className='text-sm uppercase'>l</p>
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-primary shadow-md'>
              <p className='text-sm uppercase'>xl</p>
            </div>
            <div className='flex justify-center items-center w-9 h-9 border border-gray shadow-md'>
              <p className='text-sm uppercase'>2xl</p>
            </div>
          </div>
        </div>
        {/* Discription and Review */}
        <div className='flex flex-col gap-4 my-5'>
          {/* menu toggle */}
          <div className='flex justify-around items-center my-2'>
            <p className='text-lg border-b border-primary py-1 px-3 uppercase'>
              Discription
            </p>
            <p className='text-lg text-grayText py-1 px-3 uppercase'>
              Review (2)
            </p>
          </div>
          {/* description */}
          <p className='text-sm text-grayText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
          </p>
        </div>
        {/* rating */}
        <div className='flex flex-col gap-4'>
          {/* total rating */}
          <div className='flex gap-2 justify-start items-center'>
            <p className='text-3xl font-semibold'>4.5</p>
            <ReactStars
              value={4.5}
              half={true}
              count={5}
              edit={false}
              size={50}
              color2={'#ffd700'}
            />
          </div>
          {/* suggest rating */}
          {/* <div className='flex flex-col gap-1'>
            <p className='text-sm text-grayText uppercase'>
              Review this product
            </p>
            <ReactStars
              value={0}
              count={5}
              onChange={() => {}}
              size={50}
              color2={'#ffd700'}
            />
          </div> */}
        </div>
        {/* Quantity and add cart button */}
        <div className='flex gap-4 items-end'>
          {/* quantity selector button */}
          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-sm text-grayText'>Quantity</p>
            <div className='flex justify-between items-center border border-gray rounded-full h-12 px-5'>
              <button className='w-10 h-10 text-gray flex justify-center items-center'>
                <MinusIcon />
              </button>
              <p className='text-2xl'>1</p>
              <button className='w-10 h-10 flex justify-center items-center'>
                <PlusIcon />
              </button>
            </div>
          </div>
          {/* add to cart button */}
          <Button name='Add to cart' primary onClick={() => {}} />
        </div>
      </section>
      <SelectedProductSection
        products={today_deal_data}
        header='Similar Products'
        onClick={() => {}}
      />
      <Footer />
    </section>
  )
}

export default ProductDetail
