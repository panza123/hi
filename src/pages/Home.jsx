import React, { useEffect, useState } from "react";
import HomeSlider from "../components/home/HomeSlider";
import {data,data2,imgData} from "../index"
import Navbar from '../components/home/Navbar'
import logo from '../assets/images/bg.jpg'


export default function Home() {
  const [slide, setSlide] = useState(0);
  // {image slide javascript}

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="w-full h-full">
      <div className="w-full h-[300px] relative overflow-hidden ">
        <div
          className="w-full h-full flex"
          style={{
            transform: `translateX(-${slide * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {data.map((datas, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <HomeSlider datas={datas} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 flex w-full gap-[10px] justify-center items-center">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full bg-gray-400 cursor-pointer  ${
                slide === index ? "bg-gray-800" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <Navbar/>

      <div className="w-full max-w-[1440px]  grid justify-center items-center
      lg:grid-cols-2 justify-items-center ">
      {data2.map((item,index)=>(
        <div key={index} className="w-[350px] h-[700px] md:h-[500px] mt-10 bg-white flex 
        flex-col items-center text-center text-gray-500  md:w-[500px] lg:h-[600px] ">
          <img src={item.img} alt="" className="w-full h-[50%] object-cover" />
 
          <h2 className="px-10 pt-[20px]">{item.headTitle}</h2>
          <hr className="border-1
           border-gray-300 w-[200px] mt-2" />
          <h1 className="text-black text-2xl font-bold pt-2">{item.h1}</h1>
          <p className="px-2">{item.text}</p>
          <button className="w-[70%] h-[50px
           border-2 border-gray-500 mt-5 text-1xl lg:text-3xl ">LEARN MORE</button>
        </div>
      ))}
      </div>
      
      <div className="w-full h-[200px] mt-10 relative">
<img src={logo} alt="" className="w-full h-full
 object-fit relative " />

<div className="flex flex-col  items-center justify-center  text-center absolute right-0 top-0 w-full h-full">
     <p className="text-gray-400 text-2xl ]">NAM VEL ANTE SIT AMET LIBERO SCLELERISQUE FACILISIS
       ELEIFEND VITAE URNA</p>
       <hr className="border-1 border-gray-600 w-[200px]"/>
       <h1 className="text-2xl text-white">Morbi maximus justo</h1>
        </div>
       
      </div>
      


<div className="w-full h-full">
<div className="flex flex-col items-center">
<p className="lg:px-[100px] text-center pt-10 text-gray-400 max-sm:px-10">NAM VEL ANTE SIT AMET LIBERO SCELLERISQUE FACILISIS ELEFIFEND VITAE URNA</p>
  <hr className='border-1 border-gray-400 w-[250px] mt-4'/>
  <h1 className="pt-[10px] text-2xl">Morbi maximus justo</h1>
</div>
<div className="w-full max-w-[1240px] grid justify-items-center lg:grid-cols-2 gap-2 ">
  
{imgData.map((pic,index)=>(
 <div key={index} className="w-[80%] h-[300px] bg-white mt-10 flex flex-col justify-center items-center ">
     
<div className="w-[90%] h-[250px] ">
<img src={pic.img} alt="" className="w-full h-full object-cover" />
</div>
 </div>
))}
</div>
</div>
    </main>
  );
}
