import React from "react";
import { login } from "../../../services/auth";

export default function LoginPage() {
  const [error, setError] = React.useState(null);

  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const changeInput = (inputName: string) => {
    return (e: any) => {
      setInputs({
        ...inputs,
        [inputName]: e.target.value,
      });
    };
  };

  const performLogin = React.useCallback(
    (e) => {
      e.preventDefault();

      // reset the error state
      setError(null);

      console.log(inputs);

      login(inputs)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);

          setError(error.response.data.error);
        });
    },
    [inputs]
  );

  const changeInputValue = (inputName: string, e: any) => {
    setInputs({
      ...inputs,
      [inputName]: e.target.value,
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={performLogin}>
        {error && (
          <div
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          >
            {error}
          </div>
        )}
        <input
          name="email"
          value={inputs.email}
          onChange={(e) => changeInputValue("email", e)}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={inputs.password}
          onChange={changeInput("password")}
          type="password"
          placeholder="Password"
        />

        <button>Login</button>
      </form>
    </>
  );
}
