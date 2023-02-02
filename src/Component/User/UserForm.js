import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import "./User.scss";
import Button from "@mui/material/Button";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addData, createUser, updateData, updateUser } from "../../Redux/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { UserValidation } from "../../Validation/UserValidation";
import { toast } from 'react-toastify';

const UserForm = () => {
  const param = useParams();
  const navigate = useNavigate();
  const authResp = useSelector((state) => state?.authSlice?.userData);
  const roleResp = useSelector((state) => state?.roleSlice?.roledata);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userName: "",
      mobile: "",
      roleKey: "",
      password: "",
    },
    validationSchema: UserValidation,
    onSubmit: (values, { resetForm }) => {
      if (typeof param?.id !== "undefined") {
        let id = param.id;
        let data = { values, id };
        dispatch(updateUser(data));
        toast.success("Update successfully");
      } else {
        dispatch(createUser(values));
        toast.success("Create successfully");
      }
      resetForm();
      navigate("/user-list");
    },
  });

  useEffect(() => {
    if (typeof param?.id !== "undefined") {
      let current_obj = authResp[param.id];
      formik.setFieldValue("name", current_obj?.name);
      formik.setFieldValue("email", current_obj?.email);
      formik.setFieldValue("userName", current_obj?.userName);
      formik.setFieldValue("mobile", current_obj?.mobile);
      formik.setFieldValue("roleKey", current_obj?.roleKey);
      // formik.setFieldValue("password", current_obj?.password);
    }
  }, [authResp]);

  // useEffect(() => {
  //   setRoleList(roleResp);
  // }, [roleResp]);
  return (
    <>
      <Stack className="form-section">
        <h3>{
          typeof param?.id !== "undefined" ? "Update User" : "Create User"
          }</h3>
          <form onSubmit={formik.handleSubmit}>
          <Grid container sx={{pt:0}} spacing={2}>
            <Grid item xs={6}>
              <div className="form-field">
                <TextField
                  name="name"
                  label="Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="form-field">
                <TextField
                  name="email"
                  label="Email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="form-field">
                <TextField
                  name="userName"
                  label="Username"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="form-field">
                <TextField
                  name="mobile"
                  label="Mobile"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </div>
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="form-field">
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="uncontrolled-native">Rolekey</InputLabel>
                  <Select
                    label="Rolekey"
                    name="roleKey"
                    variant="outlined"
                    autoComplete="off"
                    value={formik.values.roleKey}
                    onChange={formik.handleChange}
                    error={formik.touched.roleKey && Boolean(formik.errors.roleKey)}
                    helperText={formik.touched.roleKey && formik.errors.roleKey}
                  >
                    <MenuItem value="none">{""}</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                    {roleResp?.map((item) => {
                      return (
                        <MenuItem value={item.roleKey}>
                          {item.roleLabel}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="form-field">
                <TextField
                  name="password"
                  label="Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className="form-field">
                <Button variant="contained" type="submit">
                  {param.id ? "Update User" : "Create User"}
                </Button>
              </div>
            </Grid>
          </form>
      </Stack>
    </>
  );
};

export default UserForm;
