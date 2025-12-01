import { IoIosMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ChatBot from "./ChatBot";

function Contact() {
  const contactInfo = [
    { logo: <MdOutlinePhone />, title: "Call Me", info: "787-420-6440", link: "tel:787-420-6440" },
    { logo: <IoIosMail />, title: "Email Me", info: "joseanralat49@gmail.com", link:"mailto:joseanralat49@gmail.com" },
    { logo: <FaLinkedin />, title: "LinkedIn", info: "Josean Ralat",link:"https://www.linkedin.com/in/josean-ralat-5b0aa0328/" },
    { logo: <FaGithub />, title: "GitHub", info: "joseanralat49", link:"https://github.com/joseanralat49" },
  ];

  return (
    <section id="contact" className="py-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
    <div className="flex-1">
      <h2 className="text-4xl font-semibold mb-10">Contact Me</h2>

      <div className="space-y-4">
        {contactInfo.map((c) => (
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            key={c.title}
            className="flex items-center gap-4 p-4"
          >
            <div className="text-2xl text-green-500">{c.logo}</div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-400">{c.title}</span>
              <span className="text-base text-gray-200 hover:text-green-500">
                {c.info}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
    <section id="chatbot">
    <ChatBot />
    </section>
  </div>
</section>
  );
}

export default Contact;
