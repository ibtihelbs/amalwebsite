import Link from 'next/link'
const Navbar = () => {
  return (
    
      <ul className="Navbar flex justify-around">
      <li>
        <Link href="/Recycle">
          <a>
            <h1>رسكلة</h1> 
            <img src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="recycle"/>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Growth">
          <a>
              <h1>نمو</h1>
              <img src="https://images.unsplash.com/photo-1533626904905-cc52fd99285e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="growth" />
            </a>
        </Link>
      </li>
      <li>
        <Link href="/Cooperation">
          <a>
              <h1>تعاون</h1>
              <img src="https://images.unsplash.com/photo-1534289693734-75ccd8320f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="cooperation"/> 
            </a>
        </Link>
      </li>
    </ul>
    
  )
}

export default Navbar
