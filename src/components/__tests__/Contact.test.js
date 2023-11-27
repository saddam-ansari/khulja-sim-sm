import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact Us Page Test Case", () => {
  // test("should load contact us component", () => {
  //   render(<ContactUs />);

  //   const heading = screen.getByRole("heading");

  //   //Assertion
  //   expect(heading).toBeInTheDocument();
  // });

  // test("should load button inside Contact component", () => {
  //   render(<ContactUs />);

  //   // const button = screen.getByRole("button");
  //   const button = screen.getByText("Submit");

  //   //Assertion
  //   expect(button).toBeInTheDocument();
  // });

  // test("should load input name inside Contact component", () => {
  //   render(<ContactUs />);

  //   // Querying
  //   // const button = screen.getByRole("button");
  //   const input = screen.getByPlaceholderText("name");

  //   //Assertion
  //   expect(input).toBeInTheDocument();
  // });

  // test("should load 2 input boxes on the Contact component", () => {
  //   render(<ContactUs />);

  //   const inputBoxes = screen.getAllByRole("textbox");

  //   expect(inputBoxes.length).toBe(2);
  // });

  //or
  // it is just a alias, both tes and it are same

  it("should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact component", () => {
    render(<ContactUs />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside Contact component", () => {
    render(<ContactUs />);

    // Querying
    // const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("name");

    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("should load 2 input boxes on the Contact component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2)
  });
});
