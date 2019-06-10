const DigitalTime = require("../../src/model/digitalTime");

describe("Digital Time Model", function () {
    it("should notify when minutes is invalid", function () {
        let digitalTime = new DigitalTime();
        digitalTime.minutes = "";

        expect(digitalTime.isInvalid()).toBe(true);
    });
});