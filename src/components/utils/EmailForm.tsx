import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loading } from "../../assets/icons/Loading";

export const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setErrorMessage("All fields are required. Please fill in all inputs.");
      return;
    }    
    setLoading(true);
    setErrorMessage(""); // Clear the error message if form is valid


    const serviceId = "service_5qydzjr";
    const templateId = "template_zgcw61k";
    const publicKey = "DPXyIUrMZ-GHyRlbN";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Nico Rojo",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false);
      });
  };
  const ifFormFull = name && email && message;
  return (
    <form onSubmit={handleSubmit} className="gap-2 flex flex-col items-center">
      <input
        className="bg-white border rounded pl-2"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-white border rounded pl-2"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="bg-white border rounded"
        cols={30}
        rows={10}
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-gray-100 p-2 self-center px-2 rounded hover:bg-gray-200"
        type="submit"
      >
        {loading ? (
          <div className="flex">
            <Loading /> Sending...
          </div>
        ) : (
          "Send Email"
        )}
      </button>
      {!ifFormFull && errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}
    </form>
  );
};
