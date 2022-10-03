import Link from 'next/link'
import { BlogContext } from '../Context/BlogContext'
import NewPost from '../Components/NewPost'
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
    border:'none',
    width: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.69)',
  }
}

const Admin = () => {
  const router = useRouter()
  const {currentUser ,hundleAuth} = useContext(BlogContext)
  return (
    <ul>
      {!currentUser ? <li onClick={hundleAuth}>
        sign in 
      </li>: <>
              <li className="underline">you're logged in</li>
              <Link href="Admin/?addNew=1">
               <li  className='self-center'>write</li>
              </Link> 
             </>
      }
      <Modal
       isOpen={Boolean(router.query.addNew)}
       onRequestClose={()=> router.push('/Admin')}
       style={costumStyles}
      >
        <NewPost/>
      </Modal>
    </ul>
  )
}

export default Admin
