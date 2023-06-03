import Image from "next/image";

interface ResumeData {
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



// interface ResumeData {
//   data: Array<MyData>
// }


export async function fetchHeader(): Promise<ResumeData> {
  const res: Response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resumes"
  );
  const jsonData: ResumeData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const HeaderResume = async ({ jsonData }: { jsonData: ResumeData }) => {
  const resumedatas: ResumeData = await fetchHeader();
  // console.log(meta_data);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse ">
        <Image
          src="/1682770822163.jpg"
          width={500}
          height={500}
          // className="max-w-sm shadow-2xl"
          alt="Farhienza Haikal"
          className="max-w-sm rounded-2xl h-72 md:h-96 w-max object-contain shadow-2xl text-white"
        />
        <div className="mx-auto md:mx-12 lg:mx-16">
          <h1 className="text-5xl font-bold text-center md:text-left prose text-white">
            Farhienza haikal
          </h1>
          <p className="py-6 w-auto text-center md:text-left prose text-white">
            {resumedatas.data[0].attributes.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderResume;
