import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "I'm an accordion!",
    content: "Click me again and I will disappear :)",
  },
  {
    title: "I'm also an accordion!",
    content:
      "Thanks to React and useState I was able to easily drop down and snap back for you!",
  },
  {
    title: "I, too, am an accordion and play for the one true creator.",
    content:
      "It is by the grace of the React Gods that I am able to exist. I drop and snap back for the one true creator, ReactDOMinator.",
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
