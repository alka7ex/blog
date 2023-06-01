import Image from "next/image";

export async function fetchHeader() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resumes");
  const jsonData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const HeaderResume = async ({ jsonData }) => {
  const resumedatas = await fetchHeader();
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
          className="max-w-sm rounded-2xl h-72 md:h-96 w-max object-contain shadow-2xl"
        />
        <div className="mx-auto md:mx-12 lg:mx-16">
          <h1 className="text-5xl font-bold text-center md:text-left">
            Farhienza haikal
          </h1>
          <p className="py-6 w-auto text-center md:text-left">
            {resumedatas.data[0].attributes.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderResume;
