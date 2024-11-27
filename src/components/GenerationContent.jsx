import TabsSkills from "./TabsSkills";

function GenerationContent() {
  return (
    <div className="flex flex-col mt-[230px] gap-[40px] mb-6 xl:flex xl:flex-row">
      <div className="text-left w-full">
        <div className="leading-[38px]">
          <p className="text-[28px] font-bold">Generation Thailand Bootcamp</p>
          <p className="text-[28px] font-bold">
            Junior Software Developer JSD#8
          </p>
        </div>
        <p className="italic">09 Sep 2024 - Present</p>

        <div className="flex flex-col mt-6 gap-3 text-justify">
          <p>I have been learning both technical and soft skills.</p>
          <p>
            The technical curriculum covers HTML, CSS, JavaScript, and the MERN
            stack for project development, with an emphasis on hands-on
            experience using Agile methodology. This has helped me practice task
            ownership, communication, and teamwork, using tools like Trello for
            task management and creating Data Schemas to organize our work.
          </p>
          <p>
            Soft skills, the bootcamp focuses on developing the growth mindset,
            These are essential for preparing to enter the workforce as a
            software developer and for effectively collaborating within a
            professional environment.
          </p>
        </div>
      </div>
      <div className="w-full">
        <TabsSkills />
      </div>
    </div>
  );
}

export default GenerationContent;