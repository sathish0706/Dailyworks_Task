import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Redux/Reducer/userRegisterSlice.reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("Please fill name")
    .min(3)
    .max(15)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Latin letters."
    ),
  email: yup.string().required("Please fill email"),

  password: yup
    .string()
    .required("Please fill password")
    .min(8, "Minimum 8 character needed"),
});
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userRegisterReducer);
  console.log("register", users);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        if (values) {
          dispatch(addUser(values));
          navigate("/login");
        }
      },
    });

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          variant="outlined"
          className="text-feild"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
        />
        <br />
        <br />
        <span className="error">
          {touched.name && errors.name ? errors.name : ""}
        </span>
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
        <br />

        <br />
        <Button variant="contained" type="submit" className="button">
          Register
        </Button>
        <br />
      </form>
    </div>
  );
}
export default Register;
