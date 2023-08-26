import InputField from "./InputField";

function ExperienceForm({ submitForm, inputChange }) {
  return (
    <form className="contact" onSubmit={submitForm}>
      <h1>Experience</h1>
      <InputField
        inputType={"text"}
        inputName={"Job title:  "}
        inputID={"jobTitle"}
        inputChange={(event) => inputChange(event, "jobInfo")}
      />
      <InputField
        inputType={"text"}
        inputName={"Employer: "}
        inputID={"employer"}
        inputChange={(event) => inputChange(event, "jobInfo")}
      />
      <InputField
        inputType={"month"}
        inputName={"Start date:  "}
        inputID={"jobStartDate"}
        inputPattern={"[0-9]{4}-[0-9]{2}"}
        inputPlaceholder={"yyyy-mm"}
        inputChange={(event) => inputChange(event, "jobInfo")}
      />
      <InputField
        inputType={"month"}
        inputName={"End date:  "}
        inputID={"jobEndDate"}
        inputPattern={"[0-9]{4}-[0-9]{2}"}
        inputPlaceholder={"yyyy-mm"}
        inputChange={(event) => inputChange(event, "jobInfo")}
      />
      <InputField
        inputType={"textarea"}
        inputName={"Description: "}
        inputID={"description"}
        inputChange={(event) => inputChange(event, "jobInfo")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExperienceForm;
