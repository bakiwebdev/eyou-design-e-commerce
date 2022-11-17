import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className='flex flex-col min-w-[10rem] w-92 h-fit bg-white'>
      <div className='h-40 w-full relative'>
        <Image
          src='https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_1280.png'
          alt='product image'
          fill
          className='object-cover'
        />
        <span className='absolute flex w-fit px-3 py-1 bg-secondary rounded-full text-xs text-white m-1'>
          20%
        </span>
      </div>
      <div>
        <p className='font-extralight text-lg'>Basic t-shirt</p>
        <div className='flex gap-4'>
          <p className='text-secondary'>$80</p>
          <p className='text-gray'>$100</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
