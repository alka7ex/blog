import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  attributes: {
    slug: string;
    title: string;
    content: string;
    createdAt: string;
    altthumbnail: string;
    thumbnail: {
      data: Array<{
        attributes: {
          url : string;
          width :number;
          height :number;
          }
      }>;
    }
  };
}

interface BlogProps {
  slug: string;
}

export async function fetchBlog(slug: string): Promise<{ data: Post[] }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&filters[slug][$eq]=${slug}`
  );
  const jsonData = await res.json();
  return jsonData;
}

const Blog: React.FC<BlogProps> = async ({ slug }) => {
  const jsonData = await fetchBlog(slug);

  return (
    <div className="">
      <div className="container flex flex-cols mt-8 mb-12 mx-8 xl:pl-24">
        <Link href="/resume">
          <div className="avatar">
            <div className="w-24 h-24 my-auto rounded-full">
              <Image
                src="/1682770822163.jpg"
                width={24}
                height={24}
                alt="Farhienza Haikal"
              />
            </div>
          </div>
        </Link>
        <div className="container flex-col mx-8 my-auto">
          <h4 className="text-sm font-bold my-2 md:text-md">
            {jsonData.data[0].attributes.createdAt}
          </h4>
          <Link href="/resume">
            <h2 className="text-xl font-bold my-2 md:text-2xl">
              Farhienza Haikal
            </h2>
            <h5 className="text-lg md:text-xl">
              Associate Product Manager @ RedDoorz
            </h5>
          </Link>
        </div>
      </div>
        <div className="container px-4 pb-16 mx-auto">
          <Link href={`/blog/${jsonData.data[0].attributes.slug}`}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                jsonData.data[0].attributes.thumbnail.data[0].attributes.url
              }
              width={
                jsonData.data[0].attributes.thumbnail.data[0].attributes
                  .width
              }
              height={
                jsonData.data[0].attributes.thumbnail.data[0].attributes
                  .height}
                  
              alt={jsonData.data[0].attributes.altthumbnail}
              className="rounded-2xl mx-auto"
            />
          </Link>
          <div className="container mx-auto">
            <h1 className="my-8 text-2xl font-bold prose-h1:">
              {jsonData.data[0].attributes.title}
            </h1>
            <div className="max-w-none prose-p:">
              {jsonData.data[0].attributes.content}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Blog;
