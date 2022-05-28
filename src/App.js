import "./styles.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

export default function App() {
  const searchElement = useRef(null);
  useEffect(() => {
    if (searchElement.current) {
      // 할당한 DOM 요소가 불러지면 (마운트 되면)
      searchElement.current.focus(); // focus 할당!
    }
  }, []);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Sign In</li>
          <li>Sign Up</li>
          <li>Profile</li>
          <li>Profile Edit</li>
        </ul>
      </nav>
      <Layout>
        <Form>
          <h1>Sign In</h1>
          <div className="mb-16">
            <label>Username</label>
            <input
              className="form-input-text"
              type={"text"}
              placeholder="Enter Username"
              ref={searchElement}
            />
          </div>
          <div className="mb-16">
            <label>Password</label>
            <input
              className="form-input-text"
              type={"password"}
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-16">
            <div>
              <input type="checkbox" />
              <label className="">Remember me</label>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
          <p className="forgot">
            Forgot <a href="#">password?</a>
          </p>
        </Form>
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  margin: 8px;
  padding: 8px;
  margin-bottom: 24px;
  background-color: #fee0b7;
  display: flex;
`;

const Form = styled.form`
  width: ${(props) => props.width || "450px"};
  padding-top: ${(props) => props.pt || "40px"};
  padding-right: ${(props) => props.pr || "55px"};
  padding-bottom: ${(props) => props.pt || "45px"};
  padding-left: ${(props) => props.pt || "55px"};
  margin: auto;
  display: grid;
  align-items: center;
  grid-template-rows: repeat(${(props) => props.row || 3}, minmax(52px, 1fr));
  /* border: 2px solid black; */
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor || "white"};
  .mb-16 {
    margin-bottom: 16px;
  }
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1;
    font-weight: 500;
    font-family: "Fira Sans", sans-serif;
    padding-bottom: 20px;
  }
  label {
    display: inline-block;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;
  }
  .form-input-text {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-input-text:focus {
    border-color: #167bff;
    box-shadow: none;
  }
  .btn {
    display: grid;
    button {
      line-height: 1.5;
      padding: 6px 12px;
      font-size: 16px;
      border: none;
      color: #515151;
      background-color: #fccc8d;
      border-radius: 4px;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      cursor: pointer;
    }
    button:hover {
      color: white;
      background-color: #ffa42e;
    }
  }
  .forgot {
    font-weight: 400;
    text-align: right;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
