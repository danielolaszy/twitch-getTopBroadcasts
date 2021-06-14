import React from "react";
import Card from "./Card";
import Header from "./Header";

const Grid = () => {
  return (
    <>
      <Header />
      <div className="row row-cols-4 g-3 mb-3 text-center ">
        <Card />
      </div>
    </>
  );
};

export default Grid;
