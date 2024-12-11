import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Circle1, Circle2, Header1, Header2 } from "./config";

export default function Service1() {
  const [rotation, setRotation] = useState(90);
  const [headerContentInfo, setHeaderContentInfo] = useState(Header1);
  const [circleContentInfo, setCircleContentInfo] = useState(Circle1);

  function changeContent() {
    if (headerContentInfo.heading == "ADG 7.1.2") {
      setHeaderContentInfo(Header2);
    } else {
      setHeaderContentInfo(Header1);
    }
    if (circleContentInfo.left.heading == "ADG 12.2.1, 12.2. & 12.4.22") {
      setCircleContentInfo(Circle1);
    } else {
      setCircleContentInfo(Circle2);
    }
  }

  const rotateLeft = () => {
    setRotation((prev) => (prev - 180 + 360) % 360);
    changeContent();
  };

  const rotateRight = () => {
    setRotation((prev) => (prev + 180) % 360);
    changeContent();
  };

  return (
    <div className="w-full overflow-hidden pt-[100px] bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center mb-12">
          Aligning with US Development Goals Sustainability
        </h1>
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-semibold text-xl mb-4">
            {headerContentInfo.heading}
          </h2>
          <p className="max-w-2xl text-xl mx-auto text-gray-700">
            {headerContentInfo.desc}
          </p>
        </div>
      </div>
      <div className="relative flex items-top w-full">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center p-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">
            {circleContentInfo.left.heading}
          </h2>
          <p className="text-gray-700 text-center text-xl">
            {circleContentInfo.right.desc}
          </p>
        </div>

        {/* Rotating Circle */}
        <div className="relative flex-2">
          {/* Circle container */}
          <div style={{ transform: "rotate(90deg)" }}>
            <div
              className="relative w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <img
                src="/circle.svg"
                alt="Sustainability Goals"
                className="w-full h-full"
              />
            </div>

            {/* Mask for showing only half the circle */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100"
              style={{
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
              }}
            />
          </div>

          {/* Navigation controls */}
          <button
            onClick={rotateLeft}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button
            onClick={rotateRight}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center p-10">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">
            {circleContentInfo.right.heading}
          </h2>
          <p className="text-gray-700 text-center text-xl">
            {circleContentInfo.right.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
