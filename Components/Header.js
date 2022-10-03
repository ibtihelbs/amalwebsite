import Link from 'next/link'
const Header = () => {

  return (
    <ul className="flex justify-around gap-2">
      <li  className='self-center'>
        <Link href="/Blog">
          <a>
            <h3>Home</h3>
          </a>
        </Link>
      </li>
      <li  className='self-center'>
        <Link href="/Blog">
          <a>
            <h3>Blog</h3>
          </a>
        </Link>
      </li>
      <li  className='self-center'>
          <a href="#Contact">
            <h3>Contact</h3>
          </a>
      </li>
      
    </ul>
  )
  //()=> router.push('/')
}

export default Header
