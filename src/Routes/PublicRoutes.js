import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import RoleForm from '../Component/Role/RoleForm';
import PageNotFound from "../Component/PageNotFound/PageNotFound";

const RoleForm = React.lazy(() => import("../Component/Role/RoleForm"));
const RoleList = React.lazy(() => import("../Component/Role/RoleList"));
const UserForm = React.lazy(() => import("../Component/User/UserForm"));
const UserList = React.lazy(() => import("../Component/User/UserList"));
const HomePage = React.lazy(() => import("../Pages/HomePage"));

const PublicRoutes = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="user-list" element={<UserList />} />
              <Route path="user-form" element={<UserForm />} />
              <Route path="user-form/:id" element={<UserForm />} />
              <Route path="role-form" element={<RoleForm />} />
              <Route path="role-form/:id" element={<RoleForm />} />
              <Route path="role-list" element={<RoleList />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
    )
}

export default PublicRoutes;