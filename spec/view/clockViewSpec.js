const ClockView = require("../../src/view/clockView");
let jsdom = require("jsdom");
const { JSDOM } = jsdom;
const MESSAGE = require('../../src/constants/messages');

describe("Berlin Clock View", function(){
    let clockView = new ClockView();
    let render = function(template){
        const dom = new JSDOM(template);
        document = dom.window.document;
    }

    it("should display error message", function(){
        render("<!DOCTYPE html><p id='error'></p>");

        clockView.displayError();

        expect(document.getElementById("error").innerHTML).toBe(MESSAGE.ERROR);
    });

    it("should display current time", function(){
        render("<!DOCTYPE html><p id='currentTime'></p><span id='digitalTimeTitle'></span><p id='berlinTimeTitle'></p>");
        let time = {
            "minutes": 15,
            "hours": 6,
            "seconds": 23
        };

        clockView.displayCurrentTimeWithTitles(time);

        expect(document.getElementById("digitalTimeTitle").innerHTML).toBe(MESSAGE.DIGITAL_TIME);
        expect(document.getElementById("currentTime").innerHTML).toBe("6:15:23");
        expect(document.getElementById("berlinTimeTitle").innerHTML).toBe(MESSAGE.BERLIN_TIME);
    });

    it("should display row with lamps", function(){
        render("<!DOCTYPE html><p id='lowerMinutesRow'></p>");
        let row = "lowerMinutesRow";
        let lamps = "OOOO";

        clockView.displayLamps(row, lamps);

        expect(document.getElementById(row).innerHTML).toBe(lamps);
    });
});