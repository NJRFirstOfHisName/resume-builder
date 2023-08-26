function InputField({
  inputType,
  inputName,
  inputID,
  inputChange: inputChange,
  inputPattern,
  inputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={inputID}>{inputName}</label>
      {inputType === "month" ? (
        <input
          type={inputType}
          id={inputID}
          name={inputID}
          onChange={inputChange}
          pattern={inputPattern}
          placeholder={inputPlaceholder}
        />
      ) : (
        <input
          type={inputType}
          id={inputID}
          name={inputID}
          onChange={inputChange}
        />
      )}
    </>
  );
}

export default InputField;
