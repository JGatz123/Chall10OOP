const inquirer = require("inquirer") 
const fs = require("fs")
const Circle = require("./Circle.js")
const Square = require("./Square.js")
const Triangle = require("./Triangle.js")
const Text = require("./Text.js")

function logo() {
    inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "Input Logo Letters"
        },
        {
            name: "textColor",
            type: "input",
            message: "What color text",
        },
        {
            name: "shape",
            type: "list",
            message: "choose a shape",
            choices: ["circle", "square", "triangle"]
        },
        {
            name: "shapeColor",
            type: "input",
            message: "what color shape",
        }
    ])
    .then(
        res => {
            const logoText = new Text(res.text, res.textColor).render()
            let shape;
            if (res.shape === "circle") shape = new Circle(res.shapeColor).render()
            if (res.shape === "square") shape = new Square(res.shapeColor).render()
            if (res.shape === "triangle") shape = new Triangle(res.shapeColor).render()
            const svg = 
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${logoText}
</svg>`
            return svg
        }
    )
    .then(
        svg=>{
            fs.writeFile("./dist/logo.svg", svg, "utf-8", ()=>{
                console.log("generated logo.svg")
            })
        }
    )
}
logo()