const ClockPresenter = require("../../src/presenter/clockPresenter");

describe("Berlin Clock Presenter", function () {
    it("should display error message when time is invalid", function () {
        let digitalTime = {};
        digitalTime.isInvalid = function(){
            return true;
        };
        let clockView = {};
        clockView.displayError = function(){};
        spyOn(clockView, "displayError");
        let clockPresenter = new ClockPresenter(digitalTime, clockView);

        clockPresenter.convertToBerlinTime();

        expect(clockView.displayError).toHaveBeenCalled();
    });

    describe("Lower Minutes Row", function(){

        it("should display OOOO at minutes 0", function () {
            let digitalTime = {};
            digitalTime.isInvalid = function(){
                return false;
            };
            digitalTime.minutes = 0;
            let clockView = {};
            clockView.displayCurrentTimeWithTitles = function(){};
            clockView.displayLamps = function(){};
            spyOn(clockView, "displayCurrentTimeWithTitles");
            spyOn(clockView, "displayLamps");
            let clockPresenter = new ClockPresenter(digitalTime, clockView);

            clockPresenter.convertToBerlinTime();

            expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
            expect(clockView.displayLamps).toHaveBeenCalledWith("lowerMinutesRow","OOOO");
        });
    });
});