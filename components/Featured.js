import Link from "next/link";
import Image from "next/image";

export async function fetchFeatured() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      "/api/posts?populate=*&filters[featured][$eq]=true"
  );
  const jsonData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const Featured = async ({ slug }) => {
  const jsonData = await fetchFeatured(slug);
  // console.log(meta_data);
  return (
    <div className="">
      <div className="container grid w-auto h-auto grid-cols-1 p-5 mx-auto space-y-5 md:grid-cols-2 md:space-y-0 md:space-x-5 ">
        <div className="flex min-h-full m-auto rounded-2xl">
          <div className="m-auto">
            <Link href={"/blog/" + jsonData.data[0].attributes.slug}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  jsonData.data[0].attributes.thumbnail.data[0].attributes
                    .formats.small.url
                }
                width={
                  jsonData.data[0].attributes.thumbnail.data[0].attributes
                    .formats.small.width
                }
                height={
                  jsonData.data[0].attributes.thumbnail.data[0].attributes
                    .formats.small.height
                }
                alt="Picture of the author"
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="flex min-h-full m-auto">
            <div className="max-w-full p-5 m-auto">
              <Link href={"/blog/" + jsonData.data[0].attributes.slug}>
                <h1 className="text-2xl truncate my-4">
                  {jsonData.data[0].attributes.title}
                </h1>
              </Link>
              <div className="flex flex-col textarea-bordered">
                <div className="container h-24 overflow-hidden md:h-32 lg:h-56">
                  <h5 className="textarea-bordered text-clip ">
                    {jsonData.data[0].attributes.content}
                  </h5>
                </div>
              </div>
              <div className="container flex justify-end w-auto mx-2 my-8">
                <Link href={"/blog/" + jsonData.data[0].attributes.slug}>
                  <button className="relative btn btn-sm sm:btn-sm md:btn-md lg:btn-lg w-28">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
