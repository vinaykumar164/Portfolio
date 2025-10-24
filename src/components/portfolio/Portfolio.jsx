import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/pcmx.jpg";
import card2 from "../../assets/images/portfolio-images/lcp.jpg";
import card3 from "../../assets/images/portfolio-images/adv.jpg";


const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI DESIGN",
    title: "PCMX Admin Network Dashboard",
    description:
      "Worked on healthcare Admin Network Dashboard using Angular, managing patient records and workflows. Built secure REST APIs, optimized components for performance, and ensured a responsive, user-friendly interface.",
    link: "https://uiux.pcmxeb.com/",
  },
  {
    id: 2,
    image: card2,
    category: "UI DESIGN",
    title: "Life Care Plan ",
    description:
      "Developed an interactive Healthcare Admin Dashboard using Angular to monitor patient records, appointment status, and medical report analytics.",
    link: "https://design.medxlifecare.com/",
  },
  {
    id: 3,
    image: card3,
    category: "Frontend Development",
    title: "ADV OPTIX ",
    description:
      "Developed a responsive website for “Advances in Optics and Photonics — An International Conference” using HTML, CSS, and JavaScript, featuring interactive sections for event details, speakers, and registration with a clean and user-friendly design.",
    link: "http://advoptix.org/",
  },

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a collection of my work, highlighting my expertise in building user-friendly and visually engaging web applications that prioritize both design and performance.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
