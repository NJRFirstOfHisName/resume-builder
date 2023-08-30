import InputField from "./InputField";

function EducationForm({ inputChange, i, deleteForm }) {
  return (
    <div className="contact">
      <InputField
        inputType={"text"}
        inputName={"Field of study: "}
        inputID={"eduField"}
        inputChange={(event) => inputChange(event, "eduInfo", i)}
      />
      <InputField
        inputType={"text"}
        inputName={"School: "}
        inputID={"school"}
        inputChange={(event) => inputChange(event, "eduInfo", i)}
      />
      <InputField
        inputType={"number"}
        inputName={"Start year:  "}
        inputID={"eduStartDate"}
        max={2023}
        min={1900}
        inputPlaceholder={"yyyy"}
        inputChange={(event) => inputChange(event, "eduInfo", i)}
      />
      <InputField
        inputType={"number"}
        inputName={"End year:  "}
        inputID={"eduEndDate"}
        min={1900}
        inputPlaceholder={"yyyy"}
        inputChange={(event) => inputChange(event, "eduInfo", i)}
      />
      <InputField
        inputType={"textarea"}
        inputName={"Notes: "}
        inputID={"notes"}
        inputChange={(event) => inputChange(event, "eduInfo", i)}
      />
      <button type="button" onClick={deleteForm}>
        X
      </button>
    </div>
  );
}

export default EducationForm;
