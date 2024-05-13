import React from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export const Header = () => {
  return (
    <div className="p-[20px] flex justify-between items-center border-b-2 bg-[#E4F5EB] ">
      <div className="m-[10px] flex justify-left items-center">
        <span className="text-green-400 text-[40px] font-bold">U</span>
        <span className="text-[40px] font-bold">-Coda</span>
      </div>
      <div className="nav_items w-[700px]  ">
        <ul className="flex justify-between items-center text-[30px] font-bold">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/courses'}>All courses</Link>
          </li>
          <li>
            <Link to={'/pricing'}>Pricing</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="register w-[270px]  flex justify-between items-center">
        <Button variant="contained" id="nav_btn1" >
          {" "}
          Sign in
        </Button>
        <Button variant="contained" id='nav_btn2'>
          Free trial
        </Button>
      </div>
    </div>
  );
};
