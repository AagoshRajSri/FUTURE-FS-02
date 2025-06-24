import React from "react";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen w-full bg-gray-100">
        <img
          src="https://media.craftyartapp.com/uploadedFiles/thumb_file/5de42a54dcbbd7184684808ac620191cd4f10bcb1673860564.jpg"
          className="absolute w-full max-w-full max-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg"
          alt="Slide 1"
        />
      </div>
      <div className="relative h-screen w-full bg-gray-100">
        <img
          src="https://marketplace.canva.com/EAFnry8lWaQ/1/0/1600w/canva-beige-simple-new-arrival-banner-landscape-RcZGsv83sk0.jpg"
          className="absolute w-full max-w-full max-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg"
          alt="Slide 2"
        />
      </div>
    </>
  );
}
