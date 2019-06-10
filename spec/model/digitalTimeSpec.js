const DigitalTime = require("../../src/model/digitalTime");

describe("Digital Time Model", function () {
    let digitalTime;
    beforeAll(function(){
        digitalTime = new DigitalTime();
    });

    it("should notify when minutes is invalid", function () {
        digitalTime.minutes = "";

        expect(digitalTime.isInvalid()).toBe(true);
    });

    it("should notify when hours is invalid", function () {
        digitalTime.minutes = 50;
        digitalTime.hours = "";

        expect(digitalTime.isInvalid()).toBe(true);
    });

    it("should notify error when seconds is invalid", function () {
        digitalTime.minutes = 50;
        digitalTime.hours = 10;
        digitalTime.seconds = "";

        expect(digitalTime.isInvalid()).toBe(true);
    });
});