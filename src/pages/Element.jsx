import React from "react";
import logo from "../assets/images/slide02.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
export default function Elements() {
  return (
    <main className="w-full h-full  max-auto max-sm:overflow-hidden">
      <section className="max-w-[1340px]    flex flex-col justify-center items-center relative -z-10 lg:w-[100vw]">
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
      flex flex-col justify-center items-center bg-black/90
       opacity-75 text-center"
          >
            <h1 className="text-3xl text-white pl-3 max-sm:3xl">
              SED AMET NULLA
            </h1>
            <hr className="border-1 border-gray-400 w-[200px] mt-3" />
            <p className="text-2xl text-white">Elements</p>
          </div>
        </div>

        <div
          className="w-[400px]  h-full bg-white  md:w-[50%] lg:w-[90%]
    rounded-[5px] mt-10
    
     "
        >
          <div className="w-full h-full px-[20px] mt-[10px] max-sm:px-[40px]">
            <h3 className="text-[20px] font-bold">Text</h3>
            <p className="pt-[10px]">
              This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
              <i>italic</i> and this is <em>emphasized</em>. This is{" "}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u>, this is <code>code</code>, and this is
              a <Link className="text-red-700">link</Link>.
            </p>

            <div className="mt-5 uppercase text-gray-700 flex flex-col gap-2">
              <h2 className="text-4xl">Heading Level 2</h2>
              <h3 className="text-3xl">Heading Level 3</h3>
              <h4 className="text-2xl">Heading Level 4</h4>
              <h5 className="text-1xl">Heading Level 5</h5>
              <h6 className="1xl">Heading Level 6</h6>
            </div>
            <p className="pt-5">
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing.
            </p>

            {/* {lists} */}

            <h3>Lists</h3>
            <div className="pt-[20px]">
              <div className="flex flex-col">
                <h4>Unordered</h4>
                <ul>
                  <li>Dolor pulvinar amet etiam.</li>
                  <li>Sagittis adipiscing lorem eleifend.</li>
                  <li>Felis enim feugiat viverra.</li>
                </ul>
                <h4>Alternate</h4>
                <ul class="alt">
                  <li>Dolor pulvinar amet etiam.</li>
                  <li>Sagittis adipiscing lorem eleifend.</li>
                  <li>Felis enim feugiat viverra.</li>
                </ul>
              </div>
              +
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </main>
  );
}
