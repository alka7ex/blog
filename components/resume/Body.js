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
  );
};

export default BodyResume;
