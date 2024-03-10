import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {
  const [getData, setData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "music",
  });

  const [getErr, setErr] = useState(null);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setErr(null);
    if (!getData.name) {
      setErr("Username is mandatory");
      return;
    } else if (!getData.email) {
      setErr("Email is mandatory");
      return;
    } else if (!getData.password) {
      setErr("Password  can not be empty");
      return;
    }
    axios.post('https://academics.newtonschool.co/api/v1/user/signup',getData, {
            headers: {
                projectID: 'f104bi07c490'
            }
        }).then((result) => {
            console.log(result);
            navigate('/login');
        }).catch((error) => {
            setErr("internal server error please try after sometime");
        })
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
                <label htmlFor="name">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={getData.name}
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
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
                Register
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
export default Register;
