import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    
      <ul className="Navbar flex justify-around">
     <Image height = "100%" width= "100%" src="/recycle.png" alt="recycle"/>
     <Image height = "100%" width= "100%" src="/growth.png" alt="growth" />
     <Image height = "100%" width= "100%" src="/energy.png"    alt="cooperation"/> 
     <Image height = "100%" width= "100%" src="/repair.png"    alt="cooperation"/>
     <Image height = "100%" width= "100%" src="/earth.png"    alt="cooperation"/>
    </ul>
    
  )
}

export default Navbar
