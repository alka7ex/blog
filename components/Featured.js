import React from 'react'
export async function blogpostData() {
    const res = await fetch(process.env.APIURL + '/api/posts?populate=*&filters[featured][$eq]=true');
    const jsonData = res.json();
    return jsonData;
}
const page = async () => {
    const datas = await blogpostData();
    return (
        <div className="container grid w-auto h-auto grid-cols-1 p-5 mx-auto space-y-5 md:grid-cols-2 md:space-y-0 md:space-x-5 ">
            <div className='flex min-h-full m-auto rounded-lg'>
                <div className='m-auto'>
                    <img
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
                        <h1 className='text-2xl font-bold truncate my-4'>
                            {datas.data.attributes.Title}                        </h1>
                        <div className='flex flex-col textarea-bordered'>
                            <div className='container h-32 overflow-hidden md:h-48 lg:h-56'>
                                <h5 className='textarea-bordered text-clip text-lg'>
                                    cepteur in ipsum eiusmod pariatur. Magna laborum cillum sit ad laborum nisi elit voluptate in exercitation est incididunt qui. Enim dolore dolor nostrud Lorem am
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
    )
}
