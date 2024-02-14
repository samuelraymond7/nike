import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* Logo and Social Media */}
        <div className=" flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46}/>
          </a>
          <p className=" mt-6 text-base leading-7 font-montserrat sm:max-w-sm text-white-400">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store and get the rewards.</p>
          <div className=" flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>

        {/* Product Help Get in Touch */}
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Copyright and TC */}
      <div className=" flex justify-between text-white-400 max-sm:flex-col max-sm:items-center mt-5">
        <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className=" rounded-full m-0"/>      
          <a href="https://youtu.be/tS7upsfuxmo?si=tNRKeOaqsAasIyeQ" target="_blank"rel='noopener noreferrer' className=" hover:underline">Design by JavaScript Mastery</a>  
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer