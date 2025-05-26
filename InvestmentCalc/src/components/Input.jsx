export default function Input({ inputLabel, inputChanged }) {
  function handleInputChange(e) {
    let val = e.target.name;
    let targetName = val.replace(/\s+/g, "");
    inputChanged(targetName, Number(e.target.value));
  }
  return (
    <div className="input-group">
      <p>
        <label htmlFor={inputLabel}>{inputLabel}</label>
        <input type="number" onChange={handleInputChange} name={inputLabel} />
      </p>
    </div>
  );
}
