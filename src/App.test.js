// import { render, screen } from "@testing-library/react";
import App from "./App";

// setup file enzyme
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

//describe untuk grouping
describe("Counter App Testing", () => {
  let wrapper;
  beforeEach(() => {
    //shallow from enzyme
    wrapper = shallow(<App />);
  });

  test("should render title app", () => {
    //find untuk cari menggunakan tag html/ id/ className
    //expect punya jest
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test('should render a button with text of "Plus', () => {
    //in pake className pake tobe harus sesuai besar kecil huruf
    expect(wrapper.find(".btn-plus").text()).toBe("Plus");
  });

  test('should  render a button with text of "Minus"', () => {
    expect(wrapper.find(".btn-minus").text()).toBe("Minus");
  });

  test('should render the initial value of "counter"state in ad div', () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  //test simulate click button plus
  test('should simulate "Plus" button', () => {
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("2");
  });

  //test sumulate click btn minus
  test('should simulate "Minus" button', () => {
    //simulate btn plus di click expect counter +1
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("2");
    //simulate btn minus di click expect counter - 1
    wrapper.find(".btn-minus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find(".btn-minus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  //no minus
  test("should value counter cannot less then 0", () => {
    wrapper.find(".btn-minus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  // ini sintax jest
  // test("renders learn react link", () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/belajar react unit testing/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
