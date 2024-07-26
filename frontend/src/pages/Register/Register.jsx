import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PersonIcon from "@mui/icons-material/Person";
import "./Register.css";

const Register = () => {
  const [login, setLogin] = useState("Sign Up");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="register">
          <h4>{login}</h4>
          <div className="logo">
            {false ? (
              ""
            ) : (
              <>
                <label htmlFor="image">
                  {image ? (
                    <>
                      <img src={URL.createObjectURL(image)} id="logo" />
                    </>
                  ) : (
                    <PersonIcon />
                  )}
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </>
            )}
          </div>
          <div className="input-box">
            {login === "login" ? (
              <>
                <input type="email" placeholder="Write Email.." />
                <input type="password" placeholder="Password.." />
              </>
            ) : (
              <>
                <input type="text" placeholder="Enter Your Name.." />
                <input type="email" placeholder="Write Email.." />
                <input type="password" placeholder="Password.." />
                <input type="text" placeholder="Comfirm password.." />
              </>
            )}
          </div>
          <div className="term-condition">
            <input type="checkbox" />
            <small>Term & Condition</small>
          </div>
          <div className="">
            {login === "login" ? (
              <button>
                <span>Login</span>
              </button>
            ) : (
              ""
            )}
            {login === "Sign Up" ? (
              <button>
                <span>Register</span>
              </button>
            ) : (
              ""
            )}
            <div className="register-btn">
              {login === "login" ? (
                <p>
                  I Have an AcCount
                  <button className="login" onClick={() => setLogin("Sign Up")}>
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Create an Account
                  <button
                    className="reigister"
                    onClick={() => setLogin("login")}
                  >
                    Register
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
