"use client";

import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="Loader-spinner">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#304ffe"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
