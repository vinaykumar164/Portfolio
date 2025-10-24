import person from "../../assets/images/my-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { jsPDF } from "jspdf";

const Profile = () => {
  // 🔹 Function to dynamically generate and download PDF
  const handleDownload = () => {
    const fileUrl = "../../assets/images/vinay-resume.pdf"; // path from public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Venkata-Vinay-Resume.pdf"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>

          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am a Professional Front-End Developer
          </h2>

          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p>
              I develop and design services for clients, specializing in creating stylish and modern websites, as well as high-quality web applications. As a Front-End Developer, my focus is on crafting beautiful, responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* 🔹 Download Button */}
          {/* <div className="mt-8 flex max-md:justify-center">
            <button
              onClick={handleDownload}
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
