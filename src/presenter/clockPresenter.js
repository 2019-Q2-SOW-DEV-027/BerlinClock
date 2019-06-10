const LAMP = require('../constants/lamp');

let ClockPresenter = function(digitalTime, clockView) {
    this.convertToBerlinTime = function(){
        if(digitalTime.isInvalid()){
            clockView.displayError();
        } else {
            clockView.displayCurrentTimeWithTitles(digitalTime);
            let berlinTime = {
                "lowerMinutesRow": lowerMinutesRow(),
                "upperMinutesRow": upperMinutesRow(),
                "lowerHoursRow": lowerHoursRow(),
                "upperHoursRow": upperHoursRow(),
                "secondsLamp": secondsLamp()
            };
            clockView.displayLamps("lowerMinutesRow", berlinTime.lowerMinutesRow);
            clockView.displayLamps("upperMinutesRow", berlinTime.upperMinutesRow);
            clockView.displayLamps("lowerHoursRow", berlinTime.lowerHoursRow);
            clockView.displayLamps("upperHoursRow", berlinTime.upperHoursRow);
            clockView.displayLamps("secondsLamp", berlinTime.secondsLamp);
        }
    };

    lowerMinutesRow = function(){
        return rowOfLamps(4, moduloFive(digitalTime.minutes), LAMP.YELLOW);
    };

    upperMinutesRow = function(){
        let upperMinutesRow = rowOfLamps(11, numberOfFive(digitalTime.minutes), LAMP.YELLOW);
        upperMinutesRow = upperMinutesRow.replace(/YYY/g, "YYR");
        return upperMinutesRow;
    };

    lowerHoursRow = function(){
        return rowOfLamps(4, moduloFive(digitalTime.hours), LAMP.RED);
    };

    upperHoursRow = function(){
        return rowOfLamps(4, numberOfFive(digitalTime.hours), LAMP.RED);
    };

    moduloFive = function(time){
        return time % 5;
    };

    numberOfFive = function(time){
        return parseInt(time / 5);
    };

    rowOfLamps = function(totalLamps, numberOfLampsToBeOn, lampColor){
        let rowOfLamps = "";
        let numberOfLampsToBeOff = totalLamps - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            rowOfLamps += lampColor;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            rowOfLamps += LAMP.OFF;
        }

        return rowOfLamps;
    };

    secondsLamp = function(){
        return digitalTime.seconds % 2 === 0 ? LAMP.YELLOW : LAMP.OFF;
    };
};

module.exports = ClockPresenter;