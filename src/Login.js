import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const formValidationSchema = yup.object({
  email: yup.string().required("Please fill the email"),

  password: yup
    .string()
    .required("Please fill password")
    .min(8, "Minimum 8 character needed"),
});
function Login() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.userRegisterReducer);
  // console.log("register", users);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log(values);
        if (
          values.email === users.userRegister.email &&
          values.password === users.userRegister.password
        ) {
          navigate("/home");
        } else {
          alert("email or password is not match");
        }
      },
    });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          placeholder="Email"
          variant="outlined"
          className="text-feild"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
        />
        <br />
        <span className="error">
          {touched.email && errors.email ? errors.email : ""}
        </span>
        <span className="error">
          {touched.phone && errors.phone ? errors.phone : ""}
        </span>

        <br />
        <br />
        <input
          placeholder="Password"
          variant="outlined"
          className="text-feild"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="password"
        />
        <br />
        <br />
        <span className="error">
          {touched.password && errors.password ? errors.password : null}
          <br />
        </span>
        <Link to="/">register</Link>
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          color="success"
          className="button"
        >
          Login
        </Button>
        <br />
      </form>
    </div>
  );
}
export default Login;
