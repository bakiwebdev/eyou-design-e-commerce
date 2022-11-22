import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  placeholder: string
  type: HTMLInputTypeAttribute
  onChange: (value: string) => void
  value: string
}

const Input = ({ value, onChange, placeholder, type }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='w-full h-12 rounded-full my-2 px-8 py-3 lg:px-14 lg:py-5 border border-gray focus:ring-2 focus:ring-primary focus:outline-none'
    />
  )
}

export default Input
