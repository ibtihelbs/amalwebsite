import Link from 'next/link'
import Image from 'next/image'
const Growth = () => {
  const images = [
    'images/growth/1.jpeg',
    'images/growth/2.jpeg',
    'images/growth/treeday/1.jpg',
    'images/growth/treeday/2.jpg',
    'images/growth/treeday/3.jpg',
  ]
  return (
    <div>
      <Link href="/">
          <a className="goBack"><svg xmlns="http://www.w3.org/2000/svg" className="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>العودة للصفحة الرئيسية</a>
      </Link>
      <div>نمو</div>
      {images.map((image, index) =>( <Image key={index} src={image}/>))}
    </div>
  )
}

export default Growth
