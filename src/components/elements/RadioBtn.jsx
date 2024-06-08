const RadioBtn = ({ status, setStatus, value, title, children }) => {
  return (
    <div className={value}>
      <label htmlFor={value}>
        {children}
        {title}
      </label>
      <input
        type="radio"
        id={value}
        value={value}
        checked={status === value}
        onChange={(event) => setStatus(event.target.value)}
      />
    </div>
  );
};

export default RadioBtn;
