import React from "react";
import Section from "./Section";
import styles from "../styles/sections.module.css";
import products from "../products.json";
const Sections = () => {
  return (
    <>
      {products.map((product, index) => {
        return <Section key={index} product={product} />;
      })}
    </>
  );
};

export default Sections;
