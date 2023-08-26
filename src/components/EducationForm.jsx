import InputField from "./InputField";

function EducationForm({ submitForm, inputChange }) {
  return (
    <form className="contact" onSubmit={submitForm}>
      <h1>Education</h1>
      <InputField
        inputType={"text"}
        inputName={"Field of study: "}
        inputID={"eduField"}
        inputChange={(event) => inputChange(event, "eduInfo")}
      />
      <InputField
        inputType={"text"}
        inputName={"School: "}
        inputID={"school"}
        inputChange={(event) => inputChange(event, "eduInfo")}
      />
      <InputField
        inputType={"month"}
        inputName={"Start date:  "}
        inputID={"eduStartDate"}
        inputPattern={"[0-9]{4}-[0-9]{2}"}
        inputPlaceholder={"yyyy-mm"}
        inputChange={(event) => inputChange(event, "eduInfo")}
      />
      <InputField
        inputType={"month"}
        inputName={"End date:  "}
        inputID={"eduEndDate"}
        inputPattern={"[0-9]{4}-[0-9]{2}"}
        inputPlaceholder={"yyyy-mm"}
        inputChange={(event) => inputChange(event, "eduInfo")}
      />
      <InputField
        inputType={"textarea"}
        inputName={"Notes: "}
        inputID={"notes"}
        inputChange={(event) => inputChange(event, "eduInfo")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationForm;
