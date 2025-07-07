import React from "react";
import { render,screen, act } from "@testing-library/react";
// import { act } from "react";
import App from "./App";

it('App component', ()=>{
    act(()=>{
        render(<App />);
    })
    const findTitle = screen.getByTestId('profilename');
    expect(findTitle).toBeInTheDocument();
})