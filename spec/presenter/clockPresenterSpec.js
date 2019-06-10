const ClockPresenter = require("../../src/presenter/clockPresenter");

describe("Berlin Clock Presenter", function () {
    let digitalTime = {};
    let clockView = {};
    let clockPresenter;

    it("should display error message when time is invalid", function () {
        digitalTime.isInvalid = function(){
            return true;
        };
        clockView.displayError = function(){};
        spyOn(clockView, "displayError");
        clockPresenter = new ClockPresenter(digitalTime, clockView);

        clockPresenter.convertToBerlinTime();

        expect(clockView.displayError).toHaveBeenCalled();
    });

    describe("When time is valid", function(){

        beforeEach(function(){
            digitalTime.isInvalid = function(){
                return false;
            };
            clockView.displayCurrentTimeWithTitles = function(){};
            clockView.displayLamps = function(){};
            spyOn(clockView, "displayCurrentTimeWithTitles");
            spyOn(clockView, "displayLamps");
        });

        describe("LOWER MINUTES ROW", function(){

            it("should display OOOO at minute 0", function () {
                digitalTime.minutes = 0;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps).toHaveBeenCalledWith("lowerMinutesRow","OOOO");
            });

            it("should display YOOO at minute 36", function () {
                digitalTime.minutes = 36;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps).toHaveBeenCalledWith("lowerMinutesRow","YOOO");
            });

            it("should display YYOO at minute 52", function () {
                digitalTime.minutes = 52;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps).toHaveBeenCalledWith("lowerMinutesRow","YYOO");
            });

            it("should display YYYO at minute 38", function () {
                digitalTime.minutes = 38;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps).toHaveBeenCalledWith("lowerMinutesRow","YYYO");
            });
        });
    });
});