function InputField({
  inputType,
  inputName,
  inputID,
  inputPlaceholder,
  inputChange: inputChange,
}) {
  return (
    <>
      <label htmlFor={inputID}>{inputName}</label>
      <input
        type={inputType}
        id={inputID}
        name={inputID}
        placeholder={inputPlaceholder}
        onChange={inputChange}
      />
    </>
  );
}

export default InputField;
