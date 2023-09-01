import InputField from "./InputField";

function ExperienceForm({ inputChange, deleteForm, id }) {
  return (
    <div className="contact">
      <InputField
        inputType={"text"}
        inputName={"Job title:  "}
        inputID={"jobTitle"}
        inputChange={(event) => inputChange(event, id)}
      />
      <InputField
        inputType={"text"}
        inputName={"Employer: "}
        inputID={"employer"}
        inputChange={(event) => inputChange(event, id)}
      />
      <InputField
        inputType={"number"}
        inputName={"Start year:  "}
        inputID={"jobStartDate"}
        max={2023}
        min={1900}
        inputPlaceholder={"yyyy"}
        inputChange={(event) => inputChange(event, id)}
      />
      <InputField
        inputType={"number"}
        inputName={"End year:  "}
        inputID={"jobEndDate"}
        max={2023}
        min={1900}
        inputPlaceholder={"yyyy"}
        inputChange={(event) => inputChange(event, id)}
      />
      <InputField
        inputType={"textarea"}
        inputName={"Description: "}
        inputID={"description"}
        inputChange={(event) => inputChange(event, id)}
      />
      <button type="button" onClick={() => deleteForm(id)}>
        X
      </button>
    </div>
  );
}

export default ExperienceForm;
