import React from "react";
import logo from "../assets/images/slide02.jpg";
import Navbar from "../components/home/Navbar";

export default function Generic() {
  return (
    <main className="w-full h-ful max-auto max-sm:overflow-hidden">
      <section className="max-w-[1340px]  bg-gray-200/90  flex flex-col justify-center items-center relative -z-10">
        <div className="w-full h-[300px] relative ">
          <img
            src={logo}
            alt=""
            className="w-full h-full absolute 
         top-0
         object-cover "
          />
          <div
            className="w-full h-full
          flex flex-col justify-center items-center 
          bg-black/90 opacity-75 text-center pt-3"
          >
            <h1 className="text-3xl text-white pl-3 max-sm:3xl">
              SED AMET NULLA
            </h1>
            <hr className="border-1 border-gray-400 w-[200px] mt-3" />
            <p className="text-2xl text-white">Generic</p>
          </div>
        </div>

        <div
          className="w-[500px]   h-full bg-white   md:w-[70%]  lg:w-[90%]
        rounded-[5px] mt-10
        
         "
        >
          <div className="px-10 py-10 text-gray-700 max-sm:px-[100px]">
            <header>
              <h2 className="text-2xl font-bold">Feugiat consequat</h2>
            </header>
            <p className="pt-3">
              Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Magna et cursus lorem faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
              tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum
              ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu
              felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
              ac pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia
              ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat
              consequat.{" "}
            </p>
            <p className="pt-3">
              Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Magna et cursus lorem faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
              tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum
              ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu
              felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
              ac pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia
              ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat
              consequat.{" "}
            </p>
            <hr className="w-[100%] mt-5  border-solid border-1 border-gray-500 " />

            <h3 className="pt-3 text-2xl">Magna odio tempus commodo</h3>
            <p className="pt-3">
              In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
              aliquet. Accumsan ac integer lobortis commodo ornare aliquet
              accumsan erat tempus amet porttitor. Ante commodo blandit
              adipiscing integer semper orci eget. Faucibus commodo adipiscing
              mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
              nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
              praesent.
            </p>
            <p className="pt-3">
              Felis sagittis eget tempus primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
              faucibus. Integer ac pellentesque praesent tincidunt felis
              sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis
              in faucibus vestibulum. Blandit adipiscing eu ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet
              nullam.
            </p>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
}
