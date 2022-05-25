import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../sideBar";

import Logo from "../../assets/images/image 47.png";
export default function Header(props) {
  return (
    <div className=" justify-between flex w-full h-14 bg-red-400  p-2 ">
      <div className=" flex ">
        <img className="h-full" src={Logo} alt="logo" />
        <p className="ml-1 text-[8px] flex flex-col justify-center">
          <span className="block text-xs font-bold">ХҮРЭЭ</span>
          ПРОГРАМ ХАНГАМЖ
        </p>
      </div>
      <div>
        {props.sideBar ? (
          <SideBar show={props.sideBar} close={props.toggleSideBar} />
        ) : (
          <div className="mt-2" onClick={props.toggleSideBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </div>
    </div>
  );
}
