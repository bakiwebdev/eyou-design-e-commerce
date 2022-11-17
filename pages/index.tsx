import Image from 'next/image'
import FeatureCard from '../components/FeatureCard'
import CreditCardIcon from '../components/icons/CreditCardIcon'
import RightArrowIcon from '../components/icons/RightArrowIcon'
import ShieldIcon from '../components/icons/ShieldIcon'
import ShippingIcon from '../components/icons/ShippingIcon'
import SparklesIcon from '../components/icons/SparklesIcon'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <section className='h-screen w-full relative'>
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
          <div className='mx-5 flex flex-col gap-8'>
            <p className='text-5xl text-white font-semibold tracking-wider'>
              Sales of the
              <br />
              summer
              <br />
              collection
            </p>
            <button className='w-fit flex jusce items-center gap-4 uppercase text-white font-bold'>
              <span className='h-10 w-10 bg-primary rounded-full flex justify-center items-center'>
                <RightArrowIcon />
              </span>
              Shop now
            </button>
          </div>
        </div>
      </section>
      <section className='h-fit w-full p-4 flex flex-col gap-4'>
        <div className='h-40 w-full bg-gray'>
          <p className='text-white font-semibold text-sm mx-2'>
            New arrivals <br />
            are now in!
          </p>
          <button className='mx-1 my-2 px-3 w-fit py-1 bg-white text-sm text-black rounded-full'>
            Show collection
          </button>
        </div>
        <div className='flex gap-4'>
          <div className='h-24 flex-1 bg-gray'>
            <p className='text-white font-semibold text-sm mx-2'>
              Basic t-shirt <br />
              $20
            </p>
            <button className='mx-1 my-2 px-3 w-fit py-1 bg-white text-sm text-black rounded-full'>
              More detail
            </button>
          </div>
          <div className='h-24 flex-1 bg-gray'>
            <span className='flex w-fit px-3 py-1 bg-secondary rounded-full text-xs text-white m-1'>
              50%
            </span>
            <p className='text-white font-semibold text-sm mx-2'>Sales</p>
            <button className='mx-1 my-2 px-3 w-fit py-1 bg-white text-sm text-black rounded-full'>
              View all
            </button>
          </div>
        </div>
      </section>

      <section className='h-fit w-full p-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-extralight'>Selected just for you</p>
          <button className='text-primary font-semibold'>Show more</button>
        </div>
        <div className='h-fit flex flex-1 overflow-x-auto gap-2 py-3'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className='h-fit w-full p-2'>
        <div className='bg-primary h-40 flex flex-col justify-center items-start gap-3 p-4'>
          <h3 className='text-lg font-semibold tracking-wide'>
            Looking for custom design ?
          </h3>
          <p className='text font-extralight my-1'>
            If you have custom design, we can print and ship to your location.
          </p>
          <button className='bg-white text-xs w-fit px-5 py-2 rounded-full'>
            Get in touch
          </button>
        </div>
      </section>
      <section className='h-fit w-full p-4 flex flex-col gap-4'>
        <p className='mx-auto text-xl font-extralight my-4'>
          Why should you choose us ?
        </p>
        <FeatureCard
          icon={<ShippingIcon />}
          title='Free shipping'
          description='All purchases over $199 are eligible for
          free shipping via USPS First Class Mail.'
        />
        <FeatureCard
          icon={<CreditCardIcon />}
          title='Easy payment'
          description='All payments are processed instantly
          over a secure payment protocol.'
          primary
        />
        <FeatureCard
          icon={<ShieldIcon />}
          title='Money back guarantee'
          description={`If an item arrived damaged or you've
          changed your mind, you can send it
          back for a full refund.`}
        />
        <FeatureCard
          icon={<SparklesIcon />}
          title='Finest quality'
          description={`Designed to last, each of our products
          has been crafted with the finest
          materials.`}
        />
      </section>
      <section className='h-fit w-full p-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-extralight'>Products in today</p>
        </div>
        <div className='h-fit flex flex-1 overflow-x-auto gap-2 py-3'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <div className='h-screen bg-green-50'></div>
    </div>
  )
}
