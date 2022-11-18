import Image from 'next/image'

interface ProductCardProps {
  title: string
  price: string
  image: string
  alt: string
  tag?: string
  discount?: string
  onClick: () => void
}

const ProductCard = ({
  image,
  alt,
  tag,
  title,
  discount,
  price,
  onClick,
}: ProductCardProps) => {
  return (
    <div className='flex flex-col my-4 min-w-[10rem] w-96 lg:min-w-[18rem] h-fit bg-white gap-2 lg:gap-4'>
      <div
        className='h-40 lg:h-80 w-full relative cursor-pointer'
        onClick={onClick}>
        <Image src={image} alt={alt} fill className='object-cover' />
        {tag && (
          <span className='absolute flex w-fit px-3 py-1 bg-secondary rounded-full text-xs text-white m-1'>
            {tag}
          </span>
        )}
      </div>
      <div className='flex flex-col gap-1 lg:gap-4'>
        <p className='font-extralight text-lg lg:text-2xl'>{title}</p>
        <div className='flex gap-4 lg:text-2xl'>
          {discount && <p className='text-secondary'>{discount}</p>}
          <p className='text-gray'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
