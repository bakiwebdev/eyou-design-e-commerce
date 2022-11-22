import Link from 'next/link'
import Button from '../components/Button'
import FacebookButton from '../components/FacebookButton'
import GmailButton from '../components/GmailButton'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import Input from '../components/Input'
import NavBar from '../components/NavBar'
import RadioBoxWithLabel from '../components/RadioBoxWithLabel'
import SectionWrapper from '../components/SectionWrapper'

const Login = () => {
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
            <h1 className='font-bold text-3xl my-3'>Log in</h1>
            <p className='text-grayText font-light text-lg my-3 tracking-wider lg:text-center leading-6 font-poppins'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <Input
              value=''
              placeholder='Enter your email'
              onChange={() => {}}
              type={'email'}
            />
            <Input
              value=''
              placeholder='Enter your password'
              onChange={() => {}}
              type={'password'}
            />
            <div className='flex lg:w-full justify-between px-2 my-1'>
              <RadioBoxWithLabel label='Keep me signed in' />
              <Link href={'/forget-password'}>
                <span className='text-grayText text-md'>Forgot password?</span>
              </Link>
            </div>
            <div className='flex lg:w-full justify-around my-4 gap-4'>
              <FacebookButton onClick={() => {}} />
              <GmailButton onClick={() => {}} />
            </div>
            <Button name='Sign up' onClick={() => {}} primary width='full' />
            <div className='flex justify-center gap-3 lg:gap-10 my-4'>
              <span className='text-grayText text-md'>
                Dont have an account?
              </span>
              <Link href={'/signup'}>
                <span className='font-semibold text-md cursor-pointer'>
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Login
