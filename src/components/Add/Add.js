import React from "react";
import {Outlet } from "react-router-dom";
import Input from "../Input/Input.";

function Add() {
  return (
    <>
      <div>
          <Input />
      </div>
      <Outlet />
    </>
  );
}

export default Add;
