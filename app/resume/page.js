import Image from "next/image";


export const metadata = {
  title: "Resume",
  description:
    "This is farhienza haikal resume that to be share with the world",
};

export async function resumedata() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resumes");
  const resume = res.json();
  return resume;
}

export default async function blog({ resume }) {
  const resumedatas = await resumedata();
  console.log(resumedatas);
  return (
    <div className="">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse ">
          <img
            src="1682770822163.jpg"
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
      <div>
        <div className="container px-4 pb-16 xl:pl-24">
          <h2 className="my-4 text-2xl font-bold">Work Experience</h2>
          <p className="">{resumedatas.data[0].attributes.experience}</p>
          <h2 className="my-4 text-2xl font-bold">Skills</h2>
          <p className="">{resumedatas.data[0].attributes.skills}</p>
          <h2 className="my-4 text-2xl font-bold">Tools</h2>
          <p className="">{resumedatas.data[0].attributes.tools}</p>
          <h2 className="my-4 text-2xl font-bold">Education</h2>
          <p className="">{resumedatas.data[0].attributes.education}</p>
          <h2 className="my-4 text-2xl font-bold">Course</h2>
          <ul>
            <li>{resumedatas.data[0].attributes.course}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
