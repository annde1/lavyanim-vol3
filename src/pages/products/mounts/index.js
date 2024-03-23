import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";

const Mounts = () => {
  return (
    <>
      <LayoutComponent>
        <h1 style={{ textAlign: "center", marginTop: "3rem" }}>Mounts</h1>
        <div
          className="row row-cols-1 row-cols-md-3"
          style={{ marginTop: "2rem" }}
        ></div>
      </LayoutComponent>
    </>
  );
};
export default Mounts;
