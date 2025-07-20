import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This job tracking app streamlines your career management with
            intuitive features that log applications, deadlines, and interview
            schedules in one place. It offers customizable status boards,
            real-time notifications, and analytics to track progress and success
            rates. Designed for clarity and control, it transforms job hunting
            into an organized, proactive journey.
          </p>
          <Link to={"/register"} className="btn register-link">
            Register
          </Link>
          <Link to={"/login"} className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} className="img main-img" alt="job hunt" />
      </div>
    </Wrapper>
  );
};
export default Landing;
