import { useRef, useState } from "react";
import logo from "../../assests/netFlix2.png";
import "./Signup.scss";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    if (emailRef.current !== null) {
      setEmail(emailRef.current.value);
    }
  };

  const handleFinish = () => {
    if (passwordRef.current !== null) {
      setPassword(passwordRef.current.value);
    }
  };

  console.log(email, password);
  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="" />
          <button className="loginBtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button onClick={() => handleStart()} className="registerButton">
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={() => handleFinish()} className="registerButton">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
