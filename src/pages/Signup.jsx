import { useGlobalContext } from "../context";

const Signup = () => {
  const { handleSubmit, name, setName } = useGlobalContext();

  console.log(name);

  return (
    <form className="signup-box" onSubmit={handleSubmit} action="">
      <input
        className="signup-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default Signup;
