function PrintForm({ resumeData }) {
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
          <li>{resumeData.jobInfo1.jobTitle}</li>
          <li>{resumeData.jobInfo1.employer}</li>
          {resumeData.jobInfo1.jobStartDate ? (
            <li>
              {resumeData.jobInfo1.jobStartDate} -{" "}
              {resumeData.jobInfo1.jobEndDate}
            </li>
          ) : null}
        </ul>
        <p>{resumeData.jobInfo1.description}</p>
      </div>

      {resumeData.jobInfo2 ? (
        <div className="experience">
          <ul>
            <li>{resumeData.jobInfo2.jobTitle}</li>
            <li>{resumeData.jobInfo2.employer}</li>
            {resumeData.jobInfo2.jobStartDate ? (
              <li>
                {resumeData.jobInfo2.jobStartDate} -{" "}
                {resumeData.jobInfo2.jobEndDate}
              </li>
            ) : null}
          </ul>
          <p>{resumeData.jobInfo2.description}</p>
        </div>
      ) : null}

      {resumeData.jobInfo3 ? (
        <div className="experience">
          <ul>
            <li>{resumeData.jobInfo3.jobTitle}</li>
            <li>{resumeData.jobInfo3.employer}</li>
            {resumeData.jobInfo3.jobStartDate ? (
              <li>
                {resumeData.jobInfo3.jobStartDate} -{" "}
                {resumeData.jobInfo3.jobEndDate}
              </li>
            ) : null}
          </ul>
          <p>{resumeData.jobInfo3.description}</p>
        </div>
      ) : null}
      {resumeData.eduInfo1.id ? (
        <>
          <h2>Education</h2>

          <div className="education">
            <ul>
              <li>{resumeData.eduInfo1.school}</li>
              <li>{resumeData.eduInfo1.eduField}</li>
              {resumeData.eduInfo1.eduStartDate ? (
                <li>
                  {resumeData.eduInfo1.eduStartDate} -{" "}
                  {resumeData.eduInfo1.eduEndDate}
                </li>
              ) : null}
              <li>{resumeData.eduInfo1.notes}</li>
            </ul>
          </div>
        </>
      ) : null}

      {resumeData.eduInfo2 ? (
        <div className="education">
          <ul>
            <li>{resumeData.eduInfo2.school}</li>
            <li>{resumeData.eduInfo2.eduField}</li>
            {resumeData.eduInfo2.eduStartDate ? (
              <li>
                {resumeData.eduInfo2.eduStartDate} -{" "}
                {resumeData.eduInfo2.eduEndDate}
              </li>
            ) : null}
            <li>{resumeData.eduInfo2.notes}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default PrintForm;
