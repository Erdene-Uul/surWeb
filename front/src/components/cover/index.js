import React from "react";
import Header from "../header";
import students from "../../assets/images/Rectangle 4422.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Cover(props) {
  return (
    <div className="lg:flex">
      <div className="2xl:h-[795px] xl:h-[670px] lg:h-[620px] lg:w-2/3 bg-[#153690]">
        <div className="lg:ml-8 xl:mr-[150px] lg:mr-[60px]  lg:pt-8">
          <Header sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
        </div>
        <div className=" flex items-center   justify-center text-white">
          <div>
            <p className="lg:text-xl text-sm">
              ХҮРЭЭ
              <br />
              <span className="text-[#49B3FF]">ПРОГРАМ ХАНГАМЖ</span> ТЭНХИМ
            </p>

            <p className="mt-3 lg:text-base text-xs">
              Бид бүхэн шинийг эрэлхийлж, шинэлэг зүйл <br /> сорьж шилдэгийн
              шилдэг залуу <br /> компьютерийн инженерүүдийг бэлтгэж байна
            </p>
          </div>
        </div>
        <div className="hidden lg:block absolute top-64 2xl:right-80 xl:right-64 xl:h-[450px] lg:h-[400px] lg:right-52  2xl:h-[600px]">
          <img className="h-full" src={students} alt="students" />
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
        <div className="flex justify-around items-center mt-2 ">
          <ul className="flex space-x-4 ">
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                color={"#777181"}
                className="text-xl"
              />
              <span className="ml-2 text-[#777181]">cs.hureeict@gmail.com</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                color={"#777181"}
                className="text-xl"
              />
              <span className="ml-2 text-[#777181]">(+976)8812-3890</span>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} className="text-xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </li>
          </ul>
        </div>
        <div className="w-full h-[2px] bg-[#777181]  mt-2 "></div>
        <div className="flex justify-end items-center space-x-3 mr-3 mt-3">
          <span className="text-sm text-[#777181]">
            Хасбаатрын гудамж, 11-р хороо, Бичил хороолол,
            <br /> Баянгол дүүрэг, Улаанбаатар, Монгол улс.
          </span>
          <FontAwesomeIcon
            icon={faLocationDot}
            color="#777181"
            className="text-4xl"
          />
        </div>
      </div>
    </div>
  );
}
