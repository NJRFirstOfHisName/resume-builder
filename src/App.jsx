import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      title: "jobInfo1",
      id: uuidv4(),
      type: "job",
      jobTitle: "Philanthropist",
      employer: "City of Gotham",
      jobStartDate: "1934",
      jobEndDate: "",
      description:
        "Provide financial assistance to the many charitable causes of Gotham. Engage in hands-on volunteer work to reform the city's criminal element. Act as mentor to vulnerable and troubled youths.",
    },

    jobInfo2: {
      title: "jobInfo2",
      id: uuidv4(),
      type: "job",
      jobTitle: "Consultant",
      employer: "Gotham Police Department",
      jobStartDate: "1932",
      jobEndDate: "",
      description:
        "Often called upon to give insight into criminal psychology and assist Gotham PD in the investigation of various crimes.",
    },

    jobInfo3: {
      title: "jobInfo3",
    },

    eduInfo1: {
      title: "eduInfo1",
      id: uuidv4(),
      type: "edu",
      eduField: "Criminal Law",
      school: "Yale Law School",
      eduStartDate: "1930",
      eduEndDate: "1933",
      notes: "Fraternity head, Kappa Kappa Wayne",
    },

    eduInfo2: {
      title: "eduInfo2",
      id: uuidv4(),
      type: "edu",
      eduField: "Self-Defense",
      school: "Hard Knocks",
      eduStartDate: "1920",
      eduEndDate: "1932",
      notes: "Mastered several forms of martial arts, investigation, brooding",
    },
  });

  const inputChange = (e, id) => {
    const toChange = Object.values(resumeData).filter(
      (input) => input.id === id
    )[0];
    setResumeData((resumeData) => ({
      ...resumeData,
      [toChange.title]: {
        ...resumeData[toChange.title],
        [e.target.name]: e.target.value,
      },
    }));
    console.log(resumeData);
  };

  const [inputFields, setInputFields] = useState([
    { id: resumeData.jobInfo1.id, type: "job" },
    { id: resumeData.jobInfo2.id, type: "job" },
    { id: resumeData.eduInfo1.id, type: "edu" },
    { id: resumeData.eduInfo2.id, type: "edu" },
  ]);

  const addInput = (isJob) => {
    if (isJob) {
      !resumeData.jobInfo2.id
        ? setResumeData((resumeData) => ({
            ...resumeData,
            jobInfo2: { id: uuidv4, type: "job" },
          }))
        : setResumeData((resumeData) => ({
            ...resumeData,
            jobInfo3: { id: uuidv4, type: "job" },
          }));
    } else {
      setResumeData((resumeData) => ({
        ...resumeData,
        eduInfo2: { id: uuidv4, type: "edu" },
      }));
    }
  };

  const deleteForm = (id) => {
    const delResumeData = Object.values(resumeData).filter(
      (input) => input.id === id
    )[0];
    const num = delResumeData.title.slice(-1);
    if (delResumeData.type === "job") {
      switch (num) {
        case "1":
          if (resumeData.jobInfo2.id) {
            const ji2 = resumeData.jobInfo2;
            ji2.title = "jobInfo1";
            if (resumeData.jobInfo3) {
              const ji3 = resumeData.jobInfo3;
              ji3.title = "jobInfo2";
              setResumeData((resumeData) => ({
                ...resumeData,
                jobInfo1: ji2,
                jobInfo2: ji3,
                jobInfo3: { title: "jobInfo3" },
              }));
            } else {
              setResumeData((resumeData) => ({
                ...resumeData,
                jobInfo1: ji2,
                jobInfo2: { title: "jobInfo2" },
              }));
            }
          }
          break;
        case "2":
          if (resumeData.jobInfo3.id) {
            const ji3 = resumeData.jobInfo3;
            ji3.title = "jobInfo2";
            setResumeData((resumeData) => ({
              ...resumeData,
              jobInfo2: ji3,
              jobInfo3: { title: "jobInfo3" },
            }));
          }
          break;
        default:
          setResumeData((resumeData) => ({
            ...resumeData,
            jobInfo3: { title: "jobInfo3" },
          }));
      }
    } else {
      if (num === "1" && resumeData.eduInfo2.id) {
        const ei2 = resumeData.eduInfo2;
        ei2.title = "eduInfo1";
        setResumeData((resumeData) => ({
          ...resumeData,
          eduInfo1: ei2,
          eduInfo2: { title: "eduInfo2" },
        }));
      }
    }
  };

  return (
    <>
      <div className="inputData">
        <ContactForm inputChange={inputChange} />
        <h1>Experience</h1>
        {Object.values(resumeData)
          .filter((input) => input.type === "job")
          .map((job) => (
            <ExperienceForm
              inputChange={inputChange}
              deleteForm={deleteForm}
              key={job.id}
              id={job.id}
            />
          ))}
        {Object.values(resumeData).filter((input) => input.type === "job")
          .length < 3 ? (
          <button onClick={() => addInput(true)}>Add</button>
        ) : null}
        <h1>Education</h1>
        {Object.values(resumeData)
          .filter((input) => input.type === "edu")
          .map((job) => (
            <EducationForm
              inputChange={inputChange}
              deleteForm={deleteForm}
              key={job.id}
              id={job.id}
            />
          ))}
        {Object.values(resumeData).filter((input) => input.type === "edu")
          .length < 2 ? (
          <button onClick={() => addInput(true)}>Add</button>
        ) : null}
      </div>
      <div className="printResume">
        <PrintForm resumeData={resumeData} />
      </div>
    </>
  );
}

export default App;
