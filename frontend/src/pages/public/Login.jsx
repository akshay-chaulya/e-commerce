import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const checkCurrentState = (state) => currentState === state;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none w-8 bg-gray-800 h-[1.5px]" />
      </div>
      {checkCurrentState("Sign Up") && (
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}
      <input
        type="email"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        type="password"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />
      <div
        className={`w-full flex text-xs ${
          checkCurrentState("Login") ? "justify-between" : "justify-end"
        }`}
      >
        {checkCurrentState("Login") && (
          <Link to="/forgot-password" className="hover:underline">
            Forgot your password?
          </Link>
        )}
        <p
          onClick={() =>
            setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"))
          }
          className="cursor-pointer hover:underline"
        >
          {checkCurrentState("Login")
            ? "Create account"
            : "Login Here"}
        </p>
      </div>

      <button
        className="bg-black text-white px-8 py-2 mt-4 font-light cursor-pointer"
        type="submit"
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
