import Image from "next/image";
import Link from "next/link";

export async function fetchBlog(slug) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      "/api/posts?populate=*&filters[slug][$eq]=" +
      slug
  );
  const jsonData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const Blog = async ({ slug }) => {
  const jsonData = await fetchBlog(slug);
  // console.log(meta_data);
  return (
    <div className="">
      <div className="container flex flex-cols mt-8 mb-12 mx-8 xl:pl-24">
        <Link href="/resume">
          <div className="avatar">
            <div className="w-24 h-24 my-auto rounded-full">
              <Image
                src="/1682770822163.jpg"
                width={500}
                height={500}
                // className="max-w-sm shadow-2xl"
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
      <div>
        <div className="container px-4 pb-16 mx-auto">
          <Link href={"/blog/" + jsonData.data[0].attributes.slug}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                jsonData.data[0].attributes.thumbnail.data[0].attributes.url
              }
              width={549}
              height={309}
              alt={jsonData.data[0].attributes.altthumbnail}
              className="rounded-2xl mx-auto"
            />
          </Link>
          <div className="mx-auto">
            <h1 className="my-8 text-2xl font-bold prose">
              {jsonData.data[0].attributes.title}
            </h1>
            <div className="container prose max-w-none">
              {/* {jsonData.data[0].attributes.content} */}
              Pariatur Lorem quis amet ipsum id. Quis culpa fugiat mollit ad
              commodo ad reprehenderit labore ea consequat esse exercitation.
              Exercitation Lorem occaecat proident reprehenderit eiusmod
              adipisicing consequat incididunt id adipisicing dolor dolor
              commodo Lorem. Ullamco aliquip sint ex nisi do enim sint minim et.
              Sit in ullamco aliqua pariatur nisi aliquip sunt excepteur. Culpa
              ad magna reprehenderit ut officia sunt voluptate Lorem. Fugiat id
              culpa laborum laborum in proident dolor amet culpa incididunt qui
              commodo aliquip reprehenderit. Et Lorem adipisicing veniam veniam
              enim proident aliqua adipisicing eu. Consectetur laborum nulla
              occaecat id aliquip cupidatat nisi. Cillum sunt aliqua nostrud
              commodo et. Veniam duis irure incididunt do cillum qui. Culpa
              pariatur est do tempor consectetur sit id cillum aliqua magna.
              Aute dolor qui laborum aliquip. Ex consectetur sint in fugiat.
              Deserunt enim officia quis tempor aliqua consectetur. Aliquip
              commodo veniam duis commodo culpa velit. Ex cupidatat dolor id
              exercitation non eiusmod magna deserunt laboris amet aute
              reprehenderit laboris. Labore deserunt amet nisi proident ipsum
              reprehenderit commodo. Aute incididunt anim nulla ullamco qui sunt
              sit ad amet laboris proident minim. Eiusmod labore laboris qui
              minim ex aute sint reprehenderit culpa eu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
