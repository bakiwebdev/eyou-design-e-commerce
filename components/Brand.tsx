import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.png'

const Brand = () => {
  return (
    <Link href='/'>
      <div className='flex justify-center items-center gap-2'>
        <Image
          src={logo}
          alt='Eyou Design Logo'
          className='cursor-pointer rounded-full  h-10 w-10 lg:h-20 lg:w-20'
          placeholder='blur' // Optional blur-up while loading
        />
        <span className='uppercase self-center text-sm lg:text-2xl font-light whitespace-nowrap'>
          <span className='text-primary'>Eyou</span> Design
        </span>
      </div>
    </Link>
  )
}

export default Brand
