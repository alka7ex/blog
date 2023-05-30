import { data } from "autoprefixer";
import Image from "next/image";
import { Container } from "postcss";

export async function mutliApi() {
  const [blogRes, featuredRes] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort[0]=createdAt%3Adesc&filters[featured][$eq]=false`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&filters[featured][$eq]=true`
    ),
  ]);
  const [blog, featured] = await Promise.all([
    blogRes.json(),
    featuredRes.json(),
  ]);
  const blogdata = blog;
  const featureddata = featured;
  return {
    blogdata,
    featureddata,
  };
}

export default async function blog({ blogdata, featureddata }) {
  const featureds = await mutliApi(); /*<<udah jadi object */
  console.log(featureds);
  return (
    <div className="flex flex-col w-auto mx-0 mt-5 space-y-5">
      <div className="container grid w-auto h-auto grid-cols-1 p-5 mx-auto space-y-5 md:grid-cols-2 md:space-y-0 md:space-x-5 ">
        <div className="flex min-h-full m-auto rounded-2xl">
          <div className="m-auto">
             <img
              src={process.env.NEXT_PUBLIC_STRAPI_URL + featureds.featureddata.data[0].attributes.thumbnail.data[0].attributes.formats.thumbnail.url}
              width={549}
              height={309}
              alt="Picture of the author"
              className='rounded-2xl'
            />
          </div>
        </div>
        <div className="">
          <div className="flex min-h-full m-auto">
            <div className="max-w-full p-5 m-auto">
              <h2 className="text-2xl truncate my-4">
                {featureds.featureddata.data[0].attributes.title}
              </h2>
              <div className="flex flex-col textarea-bordered">
                <div className="container h-24 overflow-hidden md:h-32 lg:h-56">
                  <h5 className="textarea-bordered text-clip ">
                    {featureds.featureddata.data[0].attributes.content}
                  </h5>
                </div>
              </div>
              <div className="container flex justify-end w-auto mx-2 my-8">
                <button className="relative btn btn-sm sm:btn-sm md:btn-md lg:btn-lg w-28">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto p-5 w-27 mx-auto">
        <div className="container grid grid-cols-1 mx-auto space-y-5 lg:grid-cols-3 lg:space-y-0">
          {featureds.blogdata.data.slice(0, 3).map((data) => (
            <div className="card w-3/4 md:w-3/5 lg:w-4/5 2xl:w-5/6 bg-slate-800 shadow-xl mx-auto">
              <a href={data.attributes.slug}>
                <figure className="">
                  <img
                    className="h-48 w-full object-cover rounded-t-2xl"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      data.attributes.thumbnail.data[0].attributes.formats
                        .thumbnail.url
                    }
                    alt={data.attributes.altthumbnail}
                  />
                </figure>
              </a>
              <div className="card-body">
                <a href={data.attributes.slug}>
                  <h2 className="card-title truncate">
                    {data.attributes.title}
                  </h2>
                </a>
                <p className="h-24 overflow-hidden">
                  {data.attributes.content}
                </p>
                <a href={data.attributes.slug}>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      href={data.attributes.slug}
                    >
                      Read More
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
