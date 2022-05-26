import React from "react";
import card from "../../assets/images/Group 11088.png";

export default function Goals() {
  return (
    <div className="bg-[#f4f4f4] py-10 ">
      <div className="flex mx-auto flex-col mt-5  items-center text-center lg:max-w-5xl max-w-xs ">
        <div className="font-bold lg:text-4xl text-[#49B3FF]">Зорилго</div>
        <p className="mt-8 text-xs lg:text-sm max-w-4xl">
          Зах зээлийн эрэлт хэрэгцээтэй уялдан мэдлэг, чадвараараа дотоод,
          гадаадад өрсөлдөх чадвартай үндэсний болон компьютерийн хөгжилд нэн
          шаардлагатай бүтээлч, хүнлэг, даяарчлагч мэргэжилтэн бэлтгэх бөгөөд
          улс орны үйлдвэр, эдийн засаг, техник технологийн салбарын хөгжилд
          бодит хувь нэмэр оруулахад чиглэсэн чанартай, үр ашигтай бодит
          үйлчилгээ үзүүлэх явдал мөн.
        </p>
        <img className="mt-16" src={card} />
      </div>
    </div>
  );
}