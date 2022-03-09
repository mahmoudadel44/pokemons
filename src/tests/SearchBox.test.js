import { render, fireEvent } from "@testing-library/react";
import React from "react";
import SearchBox from "../components/SearchBox";

test("Search box rendered correctly", () => {
  const onChange = jest.fn();
  const { queryByPlaceholderText, getByPlaceholderText } = render(
    <SearchBox placeholder={"mahmoud"} handleChange={onChange} />
  );
  
  expect(queryByPlaceholderText("mahmoud")).toBeTruthy();
  
  const input = getByPlaceholderText("mahmoud");
  fireEvent.change(input, { target: { value: "adel" } });
  expect(onChange).toBeCalledTimes(1);
});
