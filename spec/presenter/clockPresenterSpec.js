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
                expect(clockView.displayLamps.calls.argsFor(0)).toEqual(["lowerMinutesRow","OOOO"]);
            });

            it("should display YOOO at minute 36", function () {
                digitalTime.minutes = 36;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(0)).toEqual(["lowerMinutesRow","YOOO"]);
            });

            it("should display YYOO at minute 52", function () {
                digitalTime.minutes = 52;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(0)).toEqual(["lowerMinutesRow","YYOO"]);
            });

            it("should display YYYO at minute 38", function () {
                digitalTime.minutes = 38;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(0)).toEqual(["lowerMinutesRow","YYYO"]);
            });

            it("should display YYYY at minute 14", function () {
                digitalTime.minutes = 14;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(0)).toEqual(["lowerMinutesRow","YYYY"]);
            });
        });

        describe("UPPER MINUTES ROW", function(){

            it("should display OOOOOOOOOOO at minute 0", function(){
                digitalTime.minutes = 0;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(1)).toEqual(["upperMinutesRow","OOOOOOOOOOO"]);
            });

            it("should display YYOOOOOOOOO at minute 10", function(){
                digitalTime.minutes = 10;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(1)).toEqual(["upperMinutesRow","YYOOOOOOOOO"]);
            });

            it("should display YYROOOOOOO at minute 15", function(){
                digitalTime.minutes = 15;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(1)).toEqual(["upperMinutesRow","YYROOOOOOOO"]);
            });

            it("should display YYRYYRYOOO at minute 35", function(){
                digitalTime.minutes = 35;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(1)).toEqual(["upperMinutesRow","YYRYYRYOOOO"]);
            });

            it("should display YYRYYRYYRYY at minute 55", function(){
                digitalTime.minutes = 55;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(1)).toEqual(["upperMinutesRow","YYRYYRYYRYY"]);
            });
        });

        describe("LOWER HOURS ROW", function(){

            it("should display OOOO at hour 5", function(){
                digitalTime.hours = 05;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(2)).toEqual(["lowerHoursRow","OOOO"]);
            });

            it("should display ROOO at hour 21", function(){
                digitalTime.hours = 21;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(2)).toEqual(["lowerHoursRow","ROOO"]);
            });

            it("should display RROO at hour 12", function(){
                digitalTime.hours = 12;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(2)).toEqual(["lowerHoursRow","RROO"]);
            });
        });

        describe("UPPER HOURS ROW", function(){

            it("should display OOOO at hour 0", function(){
                digitalTime.hours = 0;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(3)).toEqual(["upperHoursRow","OOOO"]);
            });

            it("should display RROO at hour 11", function(){
                digitalTime.hours = 11;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(3)).toEqual(["upperHoursRow","RROO"]);
            });

            it("should display RRRO at hour 15", function(){
                digitalTime.hours = 15;
                clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(3)).toEqual(["upperHoursRow","RRRO"]);
            });
        });

        describe("SECONDS LAMP", function(){

            it("should display Y at second 18", function(){
                digitalTime.seconds = 18;
                let clockPresenter = new ClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(clockView.displayLamps.calls.argsFor(4)).toEqual(["secondsLamp","Y"]);
            });
        });
    });
});