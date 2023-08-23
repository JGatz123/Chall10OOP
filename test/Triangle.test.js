const Triangle = require("../lib/Triangle.js");
describe('Triangle', ()=>{

    describe('Color', () =>{
        
        it('Should set the color the wat we pass in the constructor', () =>{
           const triangle2 = new Triangle("indigo");
           expect(triangle2.color).toBe ('indigo')
        })
    })
    describe('rendering', () =>{
        it('Should render a rect tag with the input color', () =>{
            const triangle3 = new Triangle("indigo")
            expect(triangle3.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="indigo"/>`)
        })
    })
})