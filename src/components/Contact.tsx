import { Github } from "../assets/icons/Github";
import { LinkedIn } from "../assets/icons/LinkedIn";
import { Whatsapp } from "../assets/icons/Whatsapp";
import { EmailForm } from "./utils/EmailForm";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <EmailForm />
      <div className="flex justify-center gap-2 items-center mt-10">
        <a
          href="https://www.linkedin.com/in/nicolasbrojo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/Nicostudent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://wa.me/3816171727?text=Hi%20Nico%20I'm%20interested%20in%20hire%20you%20are%20you%20avalible%20?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp />
        </a>
      </div>
    </div>
  );
};
