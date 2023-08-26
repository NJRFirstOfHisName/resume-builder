function PrintForm({ resumeData }) {
  console.log(resumeData);
  return (
    <div className="resume">
      <div className="contactInfo">
        <ul>
          <li>
            {resumeData.contactInfo.firstName} {resumeData.contactInfo.lastName}
          </li>
          <li>{resumeData.contactInfo.primaryPhone}</li>
          {resumeData.contactInfo.secondaryPhone ? (
            <li>{resumeData.contactInfo.secondaryPhone}</li>
          ) : null}
          <li>{resumeData.contactInfo.emailAddress}</li>
        </ul>
      </div>
      <h2>Experience</h2>
      <div className="experience">
        <ul>
          <li>{resumeData.jobInfo.jobTitle}</li>
          <li>{resumeData.jobInfo.employer}</li>
          <li>
            {resumeData.jobInfo.jobStartDate} - {resumeData.jobInfo.jobEndDate}
          </li>
        </ul>{" "}
        <p>{resumeData.jobInfo.description}</p>
      </div>
      <h2>Education</h2>
      <div className="education">
        <ul>
          <li>{resumeData.eduInfo.school}</li>
          <li>{resumeData.eduInfo.eduField}</li>
          <li>
            {resumeData.eduInfo.eduStartDate} - {resumeData.eduInfo.eduEndDate}
          </li>
          <li>{resumeData.eduInfo.notes}</li>
        </ul>
      </div>
    </div>
  );
}

export default PrintForm;
