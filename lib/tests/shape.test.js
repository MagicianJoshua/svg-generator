// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Import the library


const { Triangle, Circle, Square } = require("../shape.js");

describe("Circle", () => {
    test("Testing", () => {
        let circleSvg = `<svg width="200" height="200">
        <circle cx="100" cy="100" r="50" fill="blue" stroke-width="1"/>
        <text x="100" y="103" font-family="arial" font-size="40" fill="white" alignment-baseline="middle" text-anchor="middle" >SVG</text>`
        let circle = new Circle('blue','SVG','white');
        expect(circleSvg).toEqual(circle.render());
    }) 
})