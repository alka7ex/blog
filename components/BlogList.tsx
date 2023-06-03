import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface BlogData {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    altthumbnail: string | null;
    descriptions: string | null;
    thumbnail: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null | string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null | string;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: null;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    };
  };
}

interface BlogListData {
  data: Array<BlogData>
}

async function fetchFeatured(): Promise<BlogListData> {
  const res: Response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/posts?populate=*"
  );
  const jsonData: BlogListData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const BlogList: React.FC = async () => {
  const jsonData: BlogListData = await fetchFeatured();
  console.log(jsonData.data);
  return (
    <div className="grid grid-cols-1 mx-2 space-y-5 md:grid-cols-2 md:grid-row-2  lg:px-16 pb-8 ">
      {jsonData.data.slice(0, 4).map((data: BlogData) => (
        <div className="lg:max-w-xl px-2 my-4" key={data.id}>
          <CardHeader>
            <Link className="my-2" href={"/blog/" + jsonData.data[0].attributes.slug}>
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
            <Link className="my-2" href={"/blog/" + data.attributes.slug}>
              <CardTitle className="">{data.attributes.title}
              </CardTitle>
            </Link>
            <CardDescription className="h-24 overflow-hidden max-w-xl my-4">{data.attributes.content}
            </CardDescription>
            <Link href={"/blog/" + data.attributes.slug} className="">
              <Button variant="outline" className="" >Read More  </Button>
            </Link>
          </CardHeader>
        </div>
      ))}
    </div>
  )
}

export default BlogList
