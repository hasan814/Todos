import Loader from "@/elements/Loader";

const ProfileForm = ({
  name,
  lastName,
  password,
  setName,
  loader,
  data,
  setLastName,
  setPassword,
  submitHandler,
}) => {
  return (
    <>
      <div className="profile-form__input">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {data ? <Loader /> : <button onClick={submitHandler}>Submit Data</button>}
    </>
  );
};

export default ProfileForm;
