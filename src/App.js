import React from "react";
import "./styles.css";

//components
import Article from "./components/Article";

export default function App() {
  return (
    <>
      <Article
        title="HELLO HOW ARE YOU?"
        link="https://www.w3.org/WAI/tutorials/forms/instructions/#using-aria-describedby"
      />
    </>
  );
}
