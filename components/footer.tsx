import Brand from './Brand'
import IconButton from './IconButton'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import TwitterIcon from './icons/TwitterIcon'
import YoutubeIcon from './icons/YoutubeIcon'

const Footer = () => {
  return (
    <section className='mt-10'>
      <section className='h-fit w-full p-4 flex flex-col items-start gap-4 '>
        <Brand />
        <p className='text-grayText tracking-wide text-md'>
          House My Brand designs clothing for the young, the old & everyone in
          between – but most importantly, for the fashionable
        </p>
        <div className='my-3 flex gap-10'>
          <span className='fill-gray'>
            <IconButton
              icon={<FacebookIcon />}
              onClick={() => console.log('facebook icon')}
            />
          </span>
          <span className='fill-gray'>
            <IconButton
              icon={<TwitterIcon />}
              onClick={() => console.log('twitter icon')}
            />
          </span>
          <span className='fill-gray'>
            <IconButton
              icon={<LinkedinIcon />}
              onClick={() => console.log('linkedin icon')}
            />
          </span>
          <span className='fill-gray'>
            <IconButton
              icon={<InstagramIcon />}
              onClick={() => console.log('instagram icon')}
            />
          </span>
          <span className='fill-gray'>
            <IconButton
              icon={<YoutubeIcon />}
              onClick={() => console.log('youtube icon')}
            />
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-semibold text-lg my-2'>Shopping Online</h2>
          <p className='text-md font-light mx-2'>Order Status</p>
          <p className='text-md font-light mx-2'>Shipping and Delivery</p>
          <p className='text-md font-light mx-2'>Returns</p>
          <p className='text-md font-light mx-2'>Payment Options</p>
          <p className='text-md font-light mx-2'>Contact Us</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-semibold text-lg my-2'>Information</h2>
          <p className='text-md font-light mx-2'>Gift Cards</p>
          <p className='text-md font-light mx-2'>Find a Store</p>
          <p className='text-md font-light mx-2'>Newsletter</p>
          <p className='text-md font-light mx-2'>Bacome a member</p>
          <p className='text-md font-light mx-2'>Site Feedback</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-semibold text-lg my-2'>Contact</h2>
          <p className='text-md font-light mx-2'>ahadusolution@gmail.com</p>
          <p className='text-md font-light mx-2'>+31 6 10 5032 30</p>
        </div>
      </section>
      <div className='p-5 border-t border-gray text-gray flex justify-center items-center text-sm font-light text-center'>
        POWERED BY Eyou Design - © 2022.
        <br /> ALL RIGHTS RESERVED.
      </div>
    </section>
  )
}

export default Footer
