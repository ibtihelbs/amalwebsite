import Link from 'next/link'
import { BlogContext } from '../Context/BlogContext'
import NewPost from './NewPost'
import { useContext } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
Modal.setAppElement('#__next')

const costumStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding:0,
    border:'none'
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.69)',
  }
}

const Header = () => {
  const router = useRouter()
  const {currentUser ,hundleAuth} = useContext(BlogContext)
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
      {!currentUser ? <li onClick={hundleAuth}>
        sign in 
      </li>: <>
              <li className="underline">you're logged in</li>
              <Link href="/?addNew=1">
               <li  className='self-center'>write</li>
              </Link> 
             </>
      }
      <Modal
       isOpen={Boolean(router.query.addNew)}
       onRequestClose={()=> router.push('/')}
       style={costumStyles}
      >
        <NewPost/>
      </Modal>
    </ul>
  )
  //()=> router.push('/')
}

export default Header
