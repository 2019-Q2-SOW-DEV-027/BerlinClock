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
});