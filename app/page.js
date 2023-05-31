import Image from 'next/image'
import { Container } from 'postcss'
import Featured from '@/components/Featured'
import BlogList from '@/components/BlogList'


export async function blogpostData() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/posts?populate=*&sort[0]=createdAt%3Adesc&');
  const jsonData = res.json();
  return jsonData;
}
const page = async () => {
  const datas = await blogpostData();
  console.log(datas.data);
  return (
    <div className='flex flex-col w-auto mx-0 mt-5 space-y-5'>
      <Featured>
      </Featured>
      <BlogList>
      </BlogList>
    </div>
  )
}
export default page
