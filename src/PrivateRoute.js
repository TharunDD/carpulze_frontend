import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
const PrivateRoute = ({ Component }) => {
const r=useSelector((state)=>state.cart.role)
  return r==1 ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;