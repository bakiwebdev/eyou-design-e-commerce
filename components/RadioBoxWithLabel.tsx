interface RadioBoxWithLabelProps {
  label: string
}

const RadioBoxWithLabel = ({ label }: RadioBoxWithLabelProps) => {
  return (
    <label className='md:w-2/3 block cursor-pointer'>
      <input className='mr-2 leading-tight border-gray' type='checkbox' />
      <span className='text-md'>{label}</span>
    </label>
  )
}

export default RadioBoxWithLabel
