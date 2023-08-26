import InputField from "./InputField";

function ContactForm({ submitForm, inputChange }) {
  return (
    <form className="contact" onSubmit={submitForm}>
      <h1>Contact Information</h1>
      <InputField
        inputType={"text"}
        inputName={"First Name: "}
        inputID={"firstName"}
        inputChange={(event) => inputChange(event, "contactInfo")}
      />
      <InputField
        inputType={"text"}
        inputName={"Last Name: "}
        inputID={"lastName"}
        inputChange={(event) => inputChange(event, "contactInfo")}
      />
      <InputField
        inputType={"tel"}
        inputName={"Phone Number: "}
        inputID={"primaryPhone"}
        inputChange={(event) => inputChange(event, "contactInfo")}
      />
      <InputField
        inputType={"tel"}
        inputName={"Secondary phone: "}
        inputID={"secondaryPhone"}
        inputChange={(event) => inputChange(event, "contactInfo")}
      />
      <InputField
        inputType={"email"}
        inputName={"Email Address: "}
        inputID={"emailAddress"}
        inputChange={(event) => inputChange(event, "contactInfo")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
