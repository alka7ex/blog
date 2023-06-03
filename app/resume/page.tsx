import HeaderResume from "@/components/resume/Header";
import BodyResume from "@/components/resume/Body";



interface BlogPostData {
  data: {
      id: number;
      attributes: {
          bio: string;
          experience: string;
          skills: string;
          tools: string;
          education: string;
          course: string;
          createdAt: string;
          updatedAt: string;
          summary: string;
      };
  }[];
  meta: {
      pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
      };
  };
}

export async function blogpostData(): Promise<BlogPostData> {
  const res: Response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      "/api/posts?populate=*&sort[0]=createdAt%3Adesc&"
  );
  const jsonData: BlogPostData = await res.json();
  return jsonData;
}

const page = async (): Promise<JSX.Element> => {
  const datas: BlogPostData = await blogpostData();
  console.log(datas.data);
  return (
    <div className="flex flex-col w-auto mx-0 mt-5 space-y-5">
      <HeaderResume jsonData={datas}></HeaderResume>
      <div className="container prose max-w-none">
        <BodyResume jsonData={datas}></BodyResume>
      </div>
    </div>
  );
};

export default page;
