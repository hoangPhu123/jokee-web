import React from "react";

function Title() {
  return (
    <div
      className="content-title text-center text-white lg:p-20 sm:p-16 max-sm:p-12"
      style={{ backgroundColor: "#26B665" }}
    >
      <h1 className="lg:text-5xl lg:pb-5 sm:text-4xl sm:pb-3 max-sm:text-2xl max-sm:pb-2">
        A joke a day keeps the doctor away
      </h1>
      <h5 className="lg:text-lg sm:text-sm max-sm:text-[7.5px]">
        If you joke wrong away, your teeth have to pay. (Serious)
      </h5>
    </div>
  );
}

export default Title;
