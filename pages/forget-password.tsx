import Link from 'next/link'
import Button from '../components/Button'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import Input from '../components/Input'
import NavBar from '../components/NavBar'
import SectionWrapper from '../components/SectionWrapper'

const ForgetPassword = () => {
  return (
    <div className='relative'>
      <NavBar />
      <SectionWrapper>
        <div className='my-5 flex lg:flex-1 flex-col justify-center items-start lg:items-center'>
          <Link
            href={'/'}
            className='flex w-full justify-start items-center gap-5 my-6 cursor-pointer'>
            <LeftArrowIcon />
            <span className='font'>Back to home</span>
          </Link>
          <div className='flex flex-col justify-start lg:items-center gap-3 lg:max-w-md mx-auto'>
            <h1 className='font-bold text-3xl my-3'>Forgot your password?</h1>
            <p className='text-grayText font-light text-lg my-3 tracking-wider lg:text-center leading-6 font-poppins'>
              Enter your email or phone number and recover your account
            </p>
            <Input
              value=''
              placeholder='Email'
              onChange={() => {}}
              type={'email'}
            />
            <Button
              name='Reset password'
              onClick={() => {}}
              primary
              width='full'
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default ForgetPassword
