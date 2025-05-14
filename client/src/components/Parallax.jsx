import React from "react";

const Parallax = () => {
  return (
    <>
      <div
        className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('/mount.jpg')` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <p className="text-white text-2xl font-bold">Welcome to PlacesGO.</p>
        </div>
      </div>
    </>
  );
};

export default Parallax;
