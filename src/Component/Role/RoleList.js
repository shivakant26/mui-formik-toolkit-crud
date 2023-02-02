import React, { useEffect, useState } from "react";
import "./Role.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { deleteRole } from "../../Redux/roleSlice";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";

const RoleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleResponse = useSelector((state) => state?.roleSlice?.roledata);
  const [roleList, setRoleList] = useState();
  const [open , setOpen] = useState(false);
  const [selectId , setSelectId] = useState();
  const Roleedit = (id) => {
    navigate(`/role-form/${id}`);
  };

  const roleDelete = (id) => {
    setOpen(true)
    setSelectId(id)
  };

  const sure = () =>{
      dispatch(deleteRole(selectId));
      toast.error("Delete User Successfully");
      setOpen(false)
  }

  const createRole = () => {
    navigate("/role-form");
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setRoleList(roleResponse);
  }, [roleResponse]);

  return (
    <>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this Role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" color="success" onClick={sure} autoFocus>Sure</Button>
        </DialogActions>
      </Dialog>
      <div className="table_container">
        <Box className="ui-heading">
          <Button variant="outlined" onClick={createRole}>
            <AddIcon />
            Create Role
          </Button>
        </Box>
        <Box className="role-table-section">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Role Label</TableCell>
                  <TableCell>Role Key</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roleList?.length > 0 ? (
                  <>
                    {roleList?.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index}</TableCell>
                          <TableCell>{item.roleLabel}</TableCell>
                          <TableCell>{item.roleKey}</TableCell>
                          <TableCell>
                            <Button
                              className="edit-btn"
                              variant="contained"
                              color="success"
                              onClick={() => Roleedit(index)}
                            >
                              <ModeEditOutlineRoundedIcon />
                            </Button>
                            <Button
                              className="del-btn"
                              variant="contained"
                              color="error"
                              onClick={() => roleDelete(index)}
                            >
                              <DeleteRoundedIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </>
                ) : (
                  <TableRow >
                    <TableCell colSpan={7} style={{color:"red"}}>
                      Record Not Found !
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default RoleList;
