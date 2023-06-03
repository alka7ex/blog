import Markdown from "markdown-to-jsx";

interface ResumeData {
  data: Array<{
    attributes: {
      experience: string;
      skills: string;
      tools: string;
      education: string;
      course: string;
      // add more properties here if needed
    };
    // add more properties here if needed
  }>;
  // add more properties here if needed
}

export async function fetchBody(): Promise<ResumeData> {
  const res: Response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resumes"
  );
  const jsonData: ResumeData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const BodyResume = async ({
  jsonData,
}: {
  jsonData: ResumeData;
}): Promise<JSX.Element> => {
  const resumedatas: ResumeData = await fetchBody();
  // console.log(meta_data);
  return (
    <div className="container px-4 pb-16 ">
      <h2 className="my-4 text-2xl font-bold text-white">Work Experience</h2>
      <div className="prose max-w-none text-white">
        <Markdown>{resumedatas.data[0].attributes.experience}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold text-white">Skills</h2>
      <div className="prose max-w-none text-white">
        <Markdown>{resumedatas.data[0].attributes.skills}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold text-white">Tools</h2>
      <div className="prose max-w-none text-white">
        <Markdown>{resumedatas.data[0].attributes.tools}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold text-white">Education</h2>
      <div className="prose max-w-none text-white">
        <Markdown>{resumedatas.data[0].attributes.education}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold text-white">Course</h2>
      <div className="prose max-w-none text-white">
        <Markdown>{resumedatas.data[0].attributes.course}</Markdown>
      </div>
    </div>
  );
};

export default BodyResume;
