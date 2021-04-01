import { BrowserRouter as Router } from "react-router-dom";

import Search from "Components/Search";

import React from "react";

export default {
  title: "Search",
  component: Search,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <Router>
    <Search {...args} />
  </Router>
);

export const WithoutData = Template.bind({});
WithoutData.args = {};
