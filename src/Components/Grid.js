import React from "react";
import Card from "./Card";
import Header from "./Header";

const Grid = () => {
  return (
    <>
      <Header />
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 mb-3 text-center ">
        <Card />
      </div>
    </>
  );
};

export default Grid;
