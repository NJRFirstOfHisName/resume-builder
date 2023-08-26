import { useState } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import PrintForm from "./components/PrintForm";

function App() {
  const [resumeData, setResumeData] = useState({
    contactInfo: {
      firstName: "Bruce",
      lastName: "Wayne",
      primaryPhone: "555-123-4567",
      secondaryPhone: "",
      emailAddress: "chiroptera@wayneindustries.com",
    },
    eduInfo: {
      eduField: "Criminal Law",
      school: "Yale Law School",
      eduStartDate: "1930-09",
      eduEndDate: "1933-05",
      notes: "Fraternity head, Kappa Kappa Wayne",
    },
    jobInfo: {
      jobTitle: "Philanthropist",
      employer: "City of Gotham",
      jobStartDate: "1934",
      jobEndDate: "",
      description:
        "Provide financial assistance to the many charitable causes of Gotham, engage in hands-on work to reform the city's criminal element, assist Gotham PD in the investigation of various crimes.",
    },
  });

  const inputChange = (e, changeForm) => {
    setResumeData((resumeData) => ({
      ...resumeData,
      [changeForm]: {
        ...resumeData[changeForm],
        [e.target.name]: e.target.value,
      },
    }));
    console.log(resumeData);
  };

  function submitForm(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(formData);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    return (
      <>
        <PrintForm formJson={formJson} />
      </>
    );
  }

  return (
    <>
      <div>
        <ContactForm submitForm={submitForm} inputChange={inputChange} />
        <ExperienceForm submitForm={submitForm} inputChange={inputChange} />
        <EducationForm submitForm={submitForm} inputChange={inputChange} />
      </div>
      <div className="printResume">
        <PrintForm resumeData={resumeData} />
      </div>
    </>
  );
}

export default App;
