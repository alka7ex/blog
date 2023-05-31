export async function fetchBlog(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/posts?populate=*&filters[slug][$eq]="+(slug));
  const jsonData =  await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}


export async function generateMetadata(slug){
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/posts?populate=*&filters[slug][$eq]="+(slug));
  const data = await res.json();
  const meta = data;
  console.log(meta);
    return {
      title: meta.data[0].attributes.title
    };
}




const Blog = async ({slug}) => {
    const jsonData  = await fetchBlog(slug);
    const meta_data = await generateMetadata(slug);
    // console.log(meta_data);
    return (
      <div className="">
        <h1>
        {meta_data.title}
        </h1>
      <div className="container flex flex-cols mt-8 mb-12 mx-8 xl:pl-24">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src="/1682770822163.jpg"
              className="max-w-sm rounded-full shadow-2xl"
            />
          </div>
        </div>
        <div className="container flex-col mx-8 my-auto">
          <h4 className="text-sm font-bold my-2 md:text-md">24-January-2023</h4>
          <h2 className="text-xl font-bold my-2 md:text-2xl">
            Farhienza Haikal
          </h2>
          <h5 className="text-lg md:text-xl">
            Associate Product Manager @ RedDoorz
          </h5>
        </div>
      </div>
      <div>
        <div className="container px-4 pb-16 xl:pl-24 mx-4">
          <img
            src={process.env.NEXT_PUBLIC_STRAPI_URL + jsonData.data[0].attributes.thumbnail.data[0].attributes.url}
            width={549}
            height={309}
            alt="Picture of the author"
            className="rounded-2xl"
          />
          <h1 className="my-8 text-4xl font-bold">
            {jsonData.data[0].attributes.title}
          </h1>
          <p className="mx-auto md:text-xl">
            {jsonData.data[0].attributes.content}
          </p>
        </div>
      </div>
    </div>
    )
}

export default Blog

