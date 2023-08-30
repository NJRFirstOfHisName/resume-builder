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

    jobInfo1: {
      id: "job1",
      jobTitle: "Philanthropist",
      employer: "City of Gotham",
      jobStartDate: "1934",
      jobEndDate: "",
      description:
        "Provide financial assistance to the many charitable causes of Gotham. Engage in hands-on volunteer work to reform the city's criminal element. Act as mentor to vulnerable and troubled youths.",
    },

    jobInfo2: {
      id: "job2",
      jobTitle: "Consultant",
      employer: "Gotham Police Department",
      jobStartDate: "1932",
      jobEndDate: "",
      description:
        "Often called upon to give insight into criminal psychology and assist Gotham PD in the investigation of various crimes.",
    },

    eduInfo1: {
      id: "edu1",
      eduField: "Criminal Law",
      school: "Yale Law School",
      eduStartDate: "1930",
      eduEndDate: "1933",
      notes: "Fraternity head, Kappa Kappa Wayne",
    },

    eduInfo2: {
      id: "edu2",
      eduField: "Self-Defense",
      school: "Hard Knocks",
      eduStartDate: "1920",
      eduEndDate: "1932",
      notes: "Mastered several forms of martial arts, investigation, brooding",
    },
  });

  const inputChange = (e, changeForm, i) => {
    console.log(i);
    setResumeData((resumeData) => ({
      ...resumeData,
      [changeForm + i]: {
        ...resumeData[changeForm + i],
        [e.target.name]: e.target.value,
      },
    }));
    console.log(resumeData);
  };

  const [jobInputs, setJobInputs] = useState([
    { id: "job1", i: 1 },
    { id: "job2", i: 2 },
  ]);

  const [eduInputs, setEduInputs] = useState([
    { id: "edu1", i: 1 },
    { id: "edu2", i: 2 },
  ]);

  const addInput = (isJob) => {
    let i;
    if (isJob) {
      jobInputs.length === 1 ? (i = 2) : (i = 3);
      setJobInputs(
        jobInputs.concat(
          <ExperienceForm
            inputChange={inputChange}
            key={"job" + i}
            id={"job" + i}
            i={i}
          />
        )
      );
    } else {
      eduInputs.length ? (i = 2) : (i = 1);
      setEduInputs(
        eduInputs.concat(
          <EducationForm
            inputChange={inputChange}
            key={"edu" + i}
            id={"edu" + i}
            i={i}
          />
        )
      );
    }
  };

  const deleteForm = (id) => {
    const type = id.slice(0, 3);
    console.log(type);
    if (type === "job") {
      setJobInputs((jobInputs) => jobInputs.filter((job) => job.id !== id));
    } else {
      setEduInputs((eduInputs) => eduInputs.filter((edu) => edu.id !== id));
    }
  };
  return (
    <>
      <div className="inputData">
        <ContactForm inputChange={inputChange} />
        <h1>Experience</h1>
        {jobInputs.map((job) => (
          <ExperienceForm
            inputChange={inputChange}
            deleteForm={deleteForm}
            key={job.id}
            id={job.id}
            i={job.i}
          />
        ))}
        {jobInputs.length < 3 ? (
          <button onClick={() => addInput(true)}>Add</button>
        ) : null}
        <h1>Education</h1>
        {eduInputs.map((edu) => (
          <ExperienceForm
            inputChange={inputChange}
            deleteForm={deleteForm}
            key={edu.id}
            id={edu.id}
            i={edu.i}
          />
        ))}
        {eduInputs.length < 2 ? (
          <button onClick={() => addInput(false)}>Add</button>
        ) : null}
      </div>
      <div className="printResume">
        <PrintForm resumeData={resumeData} />
      </div>
    </>
  );
}

export default App;
