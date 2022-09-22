import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
