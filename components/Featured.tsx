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

interface FeaturedData {
  id: number;
  attributes: {
    slug: string;
    title: string;
    content: string;
    thumbnail: {
      data: Array<{
        attributes: {
          formats: {
            small: {
              url: string;
              width: number;
              height: number;
            }
          }
        }
      }>
    }
  }
}

async function fetchFeatured(): Promise<{ data: Array<FeaturedData> }> {
  const res: Response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
    "/api/posts?populate=*&filters[featured][$eq]=true"
  );
  const jsonData: { data: Array<FeaturedData> } = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const Featured: React.FC = async () => {
  const jsonData: { data: Array<FeaturedData> } = await fetchFeatured();
  // console.log(meta_data);
  return (
    <div className="">
      <div className="grid w-auto h-auto grid-cols-1 mx-2 space-y-5 md:grid-cols-2 md:space-y-0 md:space-x- border-b py-4">
        <div className="flex min-h-full m-auto rounded-2xl">
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
        <div className="xl:max-w-lg">
          <CardHeader>
            <Link href={"/blog/" + jsonData.data[0].attributes.slug}>
              <CardTitle className="card-title ">{jsonData.data[0].attributes.title}
              </CardTitle>
            </Link>
            <CardDescription className="h-24 overflow-hidden">{jsonData.data[0].attributes.content}
            </CardDescription>
          </CardHeader>
          <Link href={"/blog/" + jsonData.data[0].attributes.slug} className="">
            <CardFooter>
              <Button variant="outline" >Read More  </Button>
            </CardFooter>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
