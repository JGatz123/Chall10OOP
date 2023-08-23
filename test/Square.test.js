const Square = require("../lib/Square.js");
describe('Square', ()=>{

    describe('Color', () =>{
        
        it('Should set the color the wat we pass in the constructor', () =>{
           const square2 = new Square("indigo");
           expect(square2.color).toBe ('indigo')
        })
    })
    describe('rendering', () =>{
        it('Should render a rect tag with the input color', () =>{
            const square3 = new Square("indigo")
            expect(square3.render()).toBe(`<rect width="100%" height="100%" fill="indigo"/>`)
        })
    })
})