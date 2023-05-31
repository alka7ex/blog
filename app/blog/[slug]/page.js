import Image from "next/image";
import Blog from '../../../components/Blog'


const blog = ({params: {slug}}) => {
  return (
    <>
      <Blog slug = {slug}>
      </Blog>
    </>
  )
}

export default blog
