import React from "react";

function Footer() {
  return (
    <div className="text-center">
      <hr />
      <p className="lg:px-[30rem] lg:pt-8 lg:text-[12.5px] text-gray-500 font-semibold md:px-[9rem] md:pt-5 md:text-[10.6px] sm:px-[4rem] sm:pt-6 sm:text-[10px] max-sm:px-[5rem] max-sm:pt-5 max-sm:text-[7px]">
        This website is created as part of HIsolutions program. The materials
        contained on this website are provied for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
      </p>
      <p className="lg:pt-5 lg:text-[10px] font-normal md:pt-3 md:text-[8px] sm:pt-3 sm:text-[8.5px] max-sm:pt-2 max-sm:text-[5px]">
        Copyright 2021 HLS
      </p>
    </div>
  );
}

export default Footer;
