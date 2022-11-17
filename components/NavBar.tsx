import Brand from './Brand'
import IconButton from './IconButton'
import CartIcon from './icons/CartIcon'
import MenuIcon from './icons/MenuIcon'
import SearchIcon from './icons/SearchIcon'
import UserIcon from './icons/UserIcon'

const NavBar = () => {
  return (
    <nav className='fixed top-0 right-0 h-14 lg:h-24 lg:max-h-32 max-h-14  w-full flex justify-between items-center px-4 lg:px-20 py-2 border-b border-gray bg-white z-30'>
      <Brand />
      <div className='hidden lg:flex gap-20'>
        <p className='capitalize cursor-pointer text-lg hover:text-primary'>
          women
        </p>
        <p className='capitalize cursor-pointer text-lg hover:text-primary'>
          men
        </p>
        <p className='capitalize cursor-pointer text-lg hover:text-primary'>
          kids
        </p>
      </div>
      <div className='flex justify-center items-center gap-4 lg:gap-10'>
        <IconButton
          onClick={() => {
            console.log('search icon clicked')
          }}
          icon={<SearchIcon />}
        />
        <IconButton
          onClick={() => {
            console.log('cart icon clicked')
          }}
          icon={<CartIcon />}
        />
        <span className='lg:hidden'>
          <IconButton
            onClick={() => {
              console.log('menu icon clicked')
            }}
            icon={<MenuIcon />}
          />
        </span>
        <span className='hidden lg:flex'>
          <IconButton
            onClick={() => {
              console.log('User icon clicked')
            }}
            icon={<UserIcon />}
          />
        </span>
      </div>
    </nav>
  )
}

export default NavBar
