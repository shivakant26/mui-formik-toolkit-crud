import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import "./Role.scss";
import Button from "@mui/material/Button";
import { Alert, Grid, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { roleValidation } from "../../Validation/RoleValidation";
import { addRole, updateRole } from "../../Redux/roleSlice";
import { toast } from "react-toastify";

const RoleForm = () => {
  const param = useParams();
  const navigate = useNavigate();
  const roleResp = useSelector((state) => state?.roleSlice?.roledata);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      roleLabel: "",
      roleKey: "",
    },
    validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      if (typeof param?.id !== "undefined") {
        let id = param.id;
        let data = { values, id };
        dispatch(updateRole(data));
        toast.success("Update Role Successfully");
      } else {
        dispatch(addRole(values));
        toast.success("Create Role Successfully");
      }
      resetForm();
      navigate("/role-list");
    },
  });

  useEffect(() => {
    if (typeof param?.id !== "undefined") {
      let current_obj = roleResp[param.id];
      formik.setFieldValue("roleLabel", current_obj?.roleLabel);
      formik.setFieldValue("roleKey", current_obj?.roleKey);
    }
  }, [roleResp]);

  return (
    <>
      <Box className="form-section">
        <h3>{
          typeof param?.id !== "undefined" ? "Update Role" : "Create Role"
          }</h3>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} columns={16}>
              <Grid sm={8}>
                <div className="form-field">
                  <TextField
                    name="roleLabel"
                    label="Role Label"
                    size="small"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    value={formik.values.roleLabel}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.roleLabel &&
                      Boolean(formik.errors.roleLabel)
                    }
                    helperText={formik.touched.roleLabel && formik.errors.roleLabel}
                  />
                </div>
              </Grid>
              <Grid sm={8}>
                <div className="form-field">
                  <TextField
                    name="roleKey"
                    label="Role Key"
                    size="small"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    value={formik.values.roleKey}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.roleKey && Boolean(formik.errors.roleKey)
                    }
                    helperText={formik.touched.roleKey && formik.errors.roleKey}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid sm={12}>
              <div className="form-field">
                <Button variant="contained" type="submit">
                  {param.id ? "Update Role" : "Create Role"}
                </Button>
              </div>
            </Grid>
          </form>
      </Box>
    </>
  );
};

export default RoleForm;
