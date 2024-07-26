import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useUser } from "../providers/UserProviders";

function Login() {
  const [getData, setData] = useState({
    email: "",
    password: "",
    appType: "music",
  });

  const [getErr, setErr] = useState(null);
  const navigate = useNavigate();
  const {onTokenHandler,onNameHandler,setName} = useUser();

  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErr(null);
     if (!getData.email) {
      setErr("Email is mandatory");
      return;
    } else if (!getData.password) {
      setErr("Password  can not be empty");
      return;
    }
    try {
      const result = await axios.post(
        'https://academics.newtonschool.co/api/v1/user/login',
        getData,
        {
          headers: {
            projectID: 'f104bi07c490'
          }
        }
      );
      onTokenHandler(result.data.token);
      // onNameHandler(result.data.user);
      console.log("printing data.....",result)
      setName(result.data.data.user.name);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      setErr("Internal server error. Please try again later.");
    }
        
        // .then((result) => {
        //     onTokenHandler(result.data.token);
        //     onNameHandler(result.data.user.name);
        //     navigate('/');
        // }).catch((error) => {
        //     setErr("internal server error please try after sometime");
        // })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {getErr && (
              <div className="alert alert-danger" role="alert">
                {getErr}
              </div>
            )}
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={getData.email}
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={getData.password}
                  name="password"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="appType">appType</label>
                <select
                  className="form-control"
                  value={getData.appType}
                  onChange={onChangeHandler}
                  id="name"
                >
                  <option value="music">music</option>
                  <option value="amazon">amazon</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
export default Login;
