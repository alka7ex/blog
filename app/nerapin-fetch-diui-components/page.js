import Image from 'next/image'
import { Container } from 'postcss'
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
      <div className="container grid w-auto h-auto grid-cols-1 p-5 mx-auto space-y-5 md:grid-cols-2 md:space-y-0 md:space-x-5 ">
        <div className='flex min-h-full m-auto rounded-2xl'>
          <div className='m-auto'>
            <Image
              src='/monkey2.webp'
              width={549}
              height={309}
              alt="Picture of the author"
              className='rounded-2xl'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex min-h-full m-auto'>
            <div className='max-w-full p-5 m-auto'>
              <h2 className='text-2xl truncate my-4'>
                Amet enim esse ex Lorem commodo commodo voluptate est ipsum ipsum pariatur enim aliqua enim.
              </h2>
              <div className='flex flex-col textarea-bordered'>
                <div className='container h-24 overflow-hidden md:h-32 lg:h-56'>
                  <h5 className='textarea-bordered text-clip'>
                    Content9
                    Ea pariatur labore in ex consectetur do in et veniam. Ea voluptate aliquip nostrud est cupidatat veniam nisi fugiat est sint est amet. Dolor incididunt mollit velit velit adipisicing laborum commodo.
                    Incididunt ea ad excepteur non excepteur in ipsum eiusmod pariatur. Magna laborum cillum sit ad laborum nisi elit voluptate in exercitation est incididunt qui. Enim dolore dolor nostrud Lorem amet ea sint veniam incididunt proident. Sunt dolore et quis commodo mollit esse commodo labore eiusmod sunt enim deserunt. Ullamco minim sit proident tempor sit esse adipisicing. Est occaecat dolore in commodo ullamco voluptate cillum commodo ad elit est esse.
                    Nostrud nostrud reprehenderit sint consequat excepteur ex. Fugiat culpa velit ipsum aliqua nulla mollit et adipisicing Lorem ullamco aliqua quis velit. Lorem eu proident mollit quis officia enim quis labore proident. In duis pariatur aliqua cupidatat officia esse. Ex fugiat incididunt exercitation ex aliqua laborum. Ex consequat proident deserunt ullamco minim Lorem qui. Excepteur velit occaecat ipsum culpa pariatur proident proident enim deserunt magna ad.
                    Ex exercitation sint amet fugiat ipsum quis. Velit labore aliquip veniam eiusmod aliquip. Voluptate occaecat incididunt ullamco reprehenderit cillum. Amet sunt irure irure aliqua minim deserunt nostrud ea qui et voluptate reprehenderit enim culpa.
                  </h5>
                </div>
              </div>
              <div className='container flex justify-end w-auto mx-2 my-8'>
                <button className='relative btn btn-sm sm:btn-sm md:btn-md lg:btn-lg w-28'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-auto p-5 w-27 mx-auto'>
        <div className='container grid grid-cols-1 mx-auto space-y-5 lg:grid-cols-3 lg:space-y-0'>
          {datas.data.slice(0, 3).map((data) => (
            <div className="card w-3/4 md:w-3/5 lg:w-4/5 2xl:w-5/6 bg-slate-800 shadow-xl mx-auto">
              <a href={data.attributes.slug}>
                <figure className=''>
                  <img className='h-48 w-full object-cover rounded-t-2xl' src={process.env.APIURL + data.attributes.thumbnail.data[0].attributes.formats.thumbnail.url} alt={data.attributes.altthumbnail} />
                </figure>
              </a>
              <div className="card-body">
                <a href={data.attributes.slug}>
                  <h2 className="card-title truncate">{data.attributes.titles}</h2>
                </a>
                <p className='h-24 overflow-hidden'>{data.attributes.content}</p>
                <a href={data.attributes.slug}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" href={data.attributes.slug}>Read More</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default page
