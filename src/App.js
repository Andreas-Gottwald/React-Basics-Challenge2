import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <HelloWorldArticle />
      <ByeWorldArticle />;
    </>
  );
}

function HelloWorldArticle() {
  return (
    <>
      <article>
        <h1>Hello World</h1>
        <p>u suck</p>
      </article>
    </>
  );
}

function ByeWorldArticle() {
  return (
    <>
      <article>
        <h2>Bye World</h2>
        <p>u still suck</p>
      </article>
    </>
  );
}
