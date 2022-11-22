import Link from 'next/link'
import Button from '../components/Button'
import FacebookButton from '../components/FacebookButton'
import GmailButton from '../components/GmailButton'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import Input from '../components/Input'
import NavBar from '../components/NavBar'
import RadioBoxWithLabel from '../components/RadioBoxWithLabel'
import SectionWrapper from '../components/SectionWrapper'

const SignUp = () => {
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
            <h1 className='font-bold text-3xl my-3 text-center'>
              Create an account and discover the benefits
            </h1>
            <p className='text-grayText font-light text-lg my-3 tracking-wider leading-6 font-poppins text-center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Input
              value=''
              placeholder='First Name'
              onChange={() => {}}
              type={'text'}
            />
            <Input
              value=''
              placeholder='Last Name'
              onChange={() => {}}
              type={'text'}
            />
            <Input
              value=''
              placeholder='Email'
              onChange={() => {}}
              type={'email'}
            />
            <Input
              value=''
              placeholder='Password'
              onChange={() => {}}
              type={'password'}
            />
            <div className='flex lg:w-full justify-between px-2 my-1'>
              <RadioBoxWithLabel
                label={
                  'I agree to the Google Terms of Service and Privacy Policy'
                }
              />
            </div>
            <div className='flex lg:w-full justify-around my-4 gap-4'>
              <FacebookButton onClick={() => {}} />
              <GmailButton onClick={() => {}} />
            </div>
            <Button name='Sign up' onClick={() => {}} primary width='full' />
            <div className='flex justify-center my-4 gap-3'>
              <span className='text-grayText text-md'>Already a member?</span>
              <Link href={'/login'}>
                <span className='font-semibold text-md cursor-pointer'>
                  Log in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default SignUp
