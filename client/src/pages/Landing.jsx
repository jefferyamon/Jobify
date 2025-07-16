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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            explicabo odio fuga eos aliquid officia iure saepe dicta ex dolore!
            Iste iusto excepturi mollitia natus neque quod perferendis fuga
            accusantium est suscipit blanditiis, at enim corrupti autem porro
            beatae ullam, exercitationem ea, placeat temporibus. Deleniti
            voluptatum quidem eveniet rerum veniam!
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
