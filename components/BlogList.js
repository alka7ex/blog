import Link from "next/link";
import Image from "next/image";

export async function fetchFeatured() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/posts?populate=*"
  );
  const jsonData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const BlogList = async ({ slug }) => {
  const jsonData = await fetchFeatured(slug);
  // console.log(meta_data);
  return (
    <div className="h-auto w-auto mx-auto">
      <div className="container grid grid-cols-1 mx-auto space-y-5 lg:grid-cols-3 lg:space-y-0">
        {jsonData.data.slice(0, 3).map((data) => (
          <div className="card w-5/6 md:w-3/5 lg:w-4/5 2xl:w-5/6 bg-slate-800 shadow-xl mx-auto">
            <Link
              href={"/blog/" + data.attributes.slug}
              alt={data.attributes.altthumbnail}
            >
              <Image
                className="h-48 w-full object-cover rounded-t-2xl"
                src={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  data.attributes.thumbnail.data[0].attributes.formats.thumbnail
                    .url
                }
                width={
                  data.attributes.thumbnail.data[0].attributes.formats.thumbnail
                    .width
                }
                height={
                  data.attributes.thumbnail.data[0].attributes.formats.thumbnail
                    .height
                }
              />
            </Link>

            <div className="card-body">
              <Link href={"/blog/" + data.attributes.slug}>
                <h2 className="card-title truncate">{data.attributes.title}</h2>
              </Link>
              <p className="h-24 overflow-hidden">{data.attributes.content}</p>
              <Link href={"/blog/" + data.attributes.slug}>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    href={"/blog/" + data.attributes.slug}
                  >
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
