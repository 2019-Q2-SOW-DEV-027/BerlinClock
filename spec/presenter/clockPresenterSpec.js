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
        initializeClockPresenter(digitalTime, clockView);

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
                setDigitalTime("minutes", 0);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","OOOO"]);
            });

            it("should display YOOO at minute 36", function () {
                setDigitalTime("minutes", 36);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","YOOO"]);
            });

            it("should display YYOO at minute 52", function () {
                setDigitalTime("minutes", 52);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","YYOO"]);
            });

            it("should display YYYO at minute 38", function () {
                setDigitalTime("minutes", 38);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","YYYO"]);
            });

            it("should display YYYY at minute 14", function () {
                setDigitalTime("minutes", 14);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","YYYY"]);
            });
        });

        describe("UPPER MINUTES ROW", function(){

            it("should display OOOOOOOOOOO at minute 0", function(){
                setDigitalTime("minutes", 0);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","OOOOOOOOOOO"]);
            });

            it("should display YYOOOOOOOOO at minute 10", function(){
                setDigitalTime("minutes", 10);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","YYOOOOOOOOO"]);
            });

            it("should display YYROOOOOOO at minute 15", function(){
                setDigitalTime("minutes", 15);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","YYROOOOOOOO"]);
            });

            it("should display YYRYYRYOOO at minute 35", function(){
                setDigitalTime("minutes", 35);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","YYRYYRYOOOO"]);
            });

            it("should display YYRYYRYYRYY at minute 55", function(){
                setDigitalTime("minutes", 55);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","YYRYYRYYRYY"]);
            });
        });

        describe("LOWER HOURS ROW", function(){

            it("should display OOOO at hour 5", function(){
                setDigitalTime("hours", 05);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(2)).toEqual(["lowerHoursRow","OOOO"]);
            });

            it("should display ROOO at hour 21", function(){
                setDigitalTime("hours", 21);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(2)).toEqual(["lowerHoursRow","ROOO"]);
            });

            it("should display RROO at hour 12", function(){
                setDigitalTime("hours", 12);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(2)).toEqual(["lowerHoursRow","RROO"]);
            });
        });

        describe("UPPER HOURS ROW", function(){

            it("should display OOOO at hour 0", function(){
                setDigitalTime("hours", 0);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(3)).toEqual(["upperHoursRow","OOOO"]);
            });

            it("should display RROO at hour 11", function(){
                setDigitalTime("hours", 11);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(3)).toEqual(["upperHoursRow","RROO"]);
            });

            it("should display RRRO at hour 15", function(){
                setDigitalTime("hours", 15);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(3)).toEqual(["upperHoursRow","RRRO"]);
            });
        });

        describe("SECONDS LAMP", function(){

            it("should display Y at second 18", function(){
                setDigitalTime("seconds", 18);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(4)).toEqual(["secondsLamp","Y"]);
            });

            it("should display O at second 47", function(){
                setDigitalTime("seconds", 47);
                initializeClockPresenter(digitalTime, clockView);

                clockPresenter.convertToBerlinTime();

                expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
                expect(displayLampsCalledWith(4)).toEqual(["secondsLamp","O"]);
            });
        });

        it("should display complete berlin clock", function(){
            setDigitalTime("minutes", 32);
            setDigitalTime("seconds", 10);
            setDigitalTime("hours", 15);
            initializeClockPresenter(digitalTime, clockView);

            clockPresenter.convertToBerlinTime();

            expect(clockView.displayCurrentTimeWithTitles).toHaveBeenCalledWith(digitalTime);
            expect(displayLampsCalledWith(0)).toEqual(["lowerMinutesRow","YYOO"]);
            expect(displayLampsCalledWith(1)).toEqual(["upperMinutesRow","YYRYYROOOOO"]);
            expect(displayLampsCalledWith(2)).toEqual(["lowerHoursRow","OOOO"]);
            expect(displayLampsCalledWith(3)).toEqual(["upperHoursRow","RRRO"]);
            expect(displayLampsCalledWith(4)).toEqual(["secondsLamp","Y"]);
        });
    });

    function displayLampsCalledWith(callIndex){
        return clockView.displayLamps.calls.argsFor(callIndex);
    }

    function initializeClockPresenter(digitalTime, clockView){
        clockPresenter = new ClockPresenter(digitalTime, clockView);
    }

    function setDigitalTime(time, value){
        digitalTime[time] = value;
    }
});