import { render, fireEvent } from "@testing-library/react";
import React from "react";
import SearchBox from "../components/SearchBox";

test("Search box rendered correctly", () => {
  const onChange = jest.fn(); //mock function
  const { queryByPlaceholderText, getByPlaceholderText } = render(
    // get reference input that i enter the text
    <SearchBox placeholder={"mahmoud"} handleChange={onChange} />
  );

  expect(queryByPlaceholderText("mahmoud")).toBeTruthy(); 
  //to check if i send placeholder (return true or false)

  const input = getByPlaceholderText("mahmoud");
  fireEvent.change(input, { target: { value: "adel" } }); //call onchange
  expect(onChange).toBeCalledTimes(1); //expect to run 1 time
});
