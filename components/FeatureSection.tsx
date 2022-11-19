import FeatureCard from './FeatureCard'
import CreditCardIcon from './icons/CreditCardIcon'
import ShieldIcon from './icons/ShieldIcon'
import ShippingIcon from './icons/ShippingIcon'
import SparklesIcon from './icons/SparklesIcon'
import SectionWrapper from './SectionWrapper'

const FeatureSection = () => {
  return (
    <SectionWrapper>
      <div className='flex flex-1 flex-col gap-5 lg:gap-12'>
        <p className='mx-auto flex flex-1 w-full justify-center text-xl lg:text-3xl font-extralight my-5'>
          Why should you choose us ?
        </p>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 w-fit lg:mx-auto'>
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
        </div>
      </div>
    </SectionWrapper>
  )
}

export default FeatureSection
