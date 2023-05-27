import Image from 'next/image'
import { Container } from 'postcss'
export default function blog() {
  return (
    <div className='flex flex-col w-auto mx-0 mt-5 space-y-5 bg-base-200'>
      <div className="container grid w-auto h-auto grid-cols-1 p-5 mx-auto space-y-5 md:grid-cols-2 md:space-y-0 md:space-x-5 ">
        <div className='flex min-h-full m-auto rounded-lg'>
          <div className='m-auto'>
            <Image
              src='/monkey2.webp'
              width={600}
              height={400}
              alt="Picture of the author"
              className='rounded-xl'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex min-h-full m-auto'>
            <div className='max-w-full p-5 m-auto'>
              <div className='flex flex-row text-xs my-4'>
                Tag 1
                Tag 2
              </div>
              <h2 className='text-2xl truncate my-4'>
                Amet enim esse ex Lorem commodo commodo voluptate est ipsum ipsum pariatur enim aliqua enim.
              </h2>
              <div className='flex flex-col textarea-bordered'>
                <div className='container h-32 overflow-hidden md:h-48 lg:h-56'>
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
      <div className='container h-auto p-5 mx-auto bg-base-200 rounded-md '>
        <div className='container grid grid-cols-1 mx-auto space-y-5 md:grid-cols-3 md:space-y-0 md:space-x-5'>
          <div className="mx-auto max-w-sm bg-slate-800  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/image2.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-sm bg-slate-800  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/image2.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-sm bg-slate-800  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/image2.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
