import React, { useEffect, useState } from "react";
import "./User.scss";
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
import { deleteData, deleteUser } from "../../Redux/userSlice";
import AddIcon from '@mui/icons-material/Add';
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { toast } from "react-toastify";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userResponse = useSelector((state) => state?.authSlice);
  const [list, setList] = useState();
  const [open , setOpen] = useState(false);
  const [selectId , setSelectId] = useState();

  const edit = (id) => {
    navigate(`/user-form/${id}`);
  };

  const userDelete = (id) => {
    setOpen(true)
    setSelectId(id)
  };

  const createUser = () => {
    navigate("/user-form");
  };

  const sure = () =>{
    dispatch(deleteUser(selectId));
    toast.error("Delete User Successfully");
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(userResponse?.status === "loading"){
      <CircularProgress disableShrink />
    }else if(userResponse?.status === 'success'){
        setList(userResponse?.userData);
    }
  }, [userResponse]);

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
        <Button variant="outlined" onClick={createUser}>
            <AddIcon />
            Create User</Button>
        </Box>
        <Box className="table-section">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list?.length > 0 ? (
                  <>
                    {list?.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.userName}</TableCell>
                          <TableCell>{item.mobile}</TableCell>
                          <TableCell>{item.roleKey}</TableCell>
                          <TableCell>
                            <Button
                              className="edit-btn"
                              variant="contained"
                              color="success"
                              onClick={() => edit(index)}
                            >
                              <ModeEditOutlineRoundedIcon />
                            </Button>
                            <Button
                              className="del-btn"
                              variant="contained"
                              color="error"
                              onClick={() => userDelete(index)}
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
                    <TableCell colSpan={7} sx={{color:"red"}}>
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

export default UserList;
