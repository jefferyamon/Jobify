import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { toast } from "react-toastify";
import { FormRow, Logo, SubmitBtn } from "../components";
import CustomFetch from "../utils/CustomFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await CustomFetch.post("/auth/register", data);
    console.log(data);

    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);

    toast.error(error?.response?.data?.msg);
    // const message = error?.response?.data?.msg;
    // toast.error(typeof message === "string" ? message : "Something went wrong");
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" action="" className="form">
        <Logo />
        <h4 className="">Register</h4>
        <FormRow type={"text"} name={"name"} />
        <FormRow type={"text"} name={"lastName"} labelText={"last name"} />
        <FormRow labelText={"location"} type={"text"} name={"location"} />
        <FormRow labelText={"email"} type={"email"} name={"email"} />
        <FormRow labelText={"password"} type={"password"} name={"password"} />
        <SubmitBtn formBtn />
        <p>
          Already a member?
          <Link to={"/login"} className="member-btn">
            login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
