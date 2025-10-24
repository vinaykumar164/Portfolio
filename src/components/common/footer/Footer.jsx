import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Skills", url: "blog" },
  { id: 6, name: "Contact", url: "Contact" },

];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white pt-10 pb-10 md:pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="flex items-center mb-6 md:mb-0">
          <p className="text-3xl sm:text-[32px] font-semibold pt-20">Portfolio</p>
        </a>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-20">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.url.toLowerCase()}`}
              className="relative text-[12px] sm:text-[16px] hover:text-white"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-1 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-10 right-10">
       
      </div>
    </div>

  );
};

export default Footer;
