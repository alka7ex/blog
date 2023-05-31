import Image from "next/image";
import Blog from "../../../components/Blog";

export async function generateMetadata({ params: { slug } }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      "/api/posts?populate=*&filters[slug][$eq]=" +
      slug
  );
  const data = await res.json();
  const meta = data;
  console.log(meta);
  return {
    title: meta.data[0].attributes.title,
    description: meta.data[0].attributes.description,
  };
}

const blog = ({ params: { slug } }) => {
  return <Blog slug={slug}></Blog>;
};

export default blog;
