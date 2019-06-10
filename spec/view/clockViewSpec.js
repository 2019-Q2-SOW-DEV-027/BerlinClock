const ClockView = require("../../src/view/clockView");
let jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Berlin Clock View", function(){
    let clockView = new ClockView();
    let render = function(template){
        const dom = new JSDOM(template);
        document = dom.window.document;
    }

    it("should display error message", function(){
        render("<!DOCTYPE html><p id='error'></p>");

        clockView.displayError();

        expect(document.getElementById("error").innerHTML).toBe("Invalid Time");
    });
});