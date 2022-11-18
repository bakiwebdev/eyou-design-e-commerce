import FeatureCard from '../components/FeatureCard'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import CreditCardIcon from '../components/icons/CreditCardIcon'
import ShieldIcon from '../components/icons/ShieldIcon'
import ShippingIcon from '../components/icons/ShippingIcon'
import SparklesIcon from '../components/icons/SparklesIcon'
import NavBar from '../components/NavBar'
import PromoSection from '../components/PromoSection'
import SelectedProductSection from '../components/SelectedProductSection'

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <PromoSection />
      <SelectedProductSection
        header='Selected just for you'
        onClick={() => {}}
      />
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
      <SelectedProductSection header='Products in today' onClick={() => {}} />
      <Footer />
    </div>
  )
}
