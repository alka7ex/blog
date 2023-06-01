import Markdown from "markdown-to-jsx";

export async function fetchBody() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resumes");
  const jsonData = await res.json();
  // console.log(JSON.stringify(jsonData))
  return jsonData;
}

const BodyResume = async ({ jsonData }) => {
  const resumedatas = await fetchBody();
  // console.log(meta_data);
  return (
    <div className="container px-4 pb-16">
      <h2 className="my-4 text-2xl font-bold">Work Experience</h2>
      <div className="prose max-w-none">
        <Markdown>{resumedatas.data[0].attributes.experience}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold">Skills</h2>
      <div className="prose max-w-none">
        <Markdown>{resumedatas.data[0].attributes.skills}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold">Tools</h2>
      <div className="prose max-w-none">
        <Markdown>{resumedatas.data[0].attributes.tools}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold">Education</h2>
      <div className="prose max-w-none">
        <Markdown>{resumedatas.data[0].attributes.education}</Markdown>
      </div>
      <h2 className="my-4 text-2xl font-bold">Course</h2>
      <div className="prose max-w-none">
        <Markdown>{resumedatas.data[0].attributes.course}</Markdown>
      </div>
    </div>
  );
};

export default BodyResume;
