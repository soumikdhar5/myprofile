import React from "react";
import { render, screen } from "@testing-library/react";
import Resume from "./Resume";

// Test for the "Resume" title
it('should render Resume title', () => {
    render(<Resume />);
    // Log the output to see what is actually rendered
    // screen.debug(); 
    const findTitle = screen.getByTestId('headerText');
    expect(findTitle).toBeInTheDocument();
});

// Test for the "About Me" section
it("should render About Me section", () => {
    render(<Resume />);
    // Log the output to see what is actually rendered
    // screen.debug(); 
    const findAboutMe = screen.getByTestId("headerAboutMeText");
    expect(findAboutMe).toBeInTheDocument();
});