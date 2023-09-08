import React from "react";

export default function Article({ title, link }) {
  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <label id="label-1" htmlFor="name">
        Name
      </label>
      <input aria-labelledby="label-1" id="name" type="text" />
      <a href={link}>{link}</a>
    </article>
  );
}
