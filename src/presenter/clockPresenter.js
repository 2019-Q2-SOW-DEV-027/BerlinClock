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
                "upperHoursRow": upperHoursRow()
            };
            clockView.displayLamps("lowerMinutesRow", berlinTime.lowerMinutesRow);
            clockView.displayLamps("upperMinutesRow", berlinTime.upperMinutesRow);
            clockView.displayLamps("lowerHoursRow", berlinTime.lowerHoursRow);
            clockView.displayLamps("upperHoursRow", berlinTime.upperHoursRow);
        }
    };

    lowerMinutesRow = function(){
        return lowerRow(moduloFive(digitalTime.minutes), LAMP.YELLOW);
    };

    lowerHoursRow = function(){
        return lowerRow(moduloFive(digitalTime.hours), LAMP.RED);
    };

    moduloFive = function(time){
        return time % 5;
    };

    lowerRow = function(numberOfLampsToBeOn, lampColor){
        let lowerRow = "";
        let numberOfLampsToBeOff = 4 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            lowerRow += lampColor;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            lowerRow += LAMP.OFF;
        }

        return lowerRow;
    };

    upperMinutesRow = function(){
        let upperMinutesRow = upperRow(11, numberOfFive(digitalTime.minutes), LAMP.YELLOW);
        upperMinutesRow = upperMinutesRow.replace(/YYY/g, "YYR");
        return upperMinutesRow;
    };

    upperHoursRow = function(){
        return upperRow(4, numberOfFive(digitalTime.hours), LAMP.RED);
    };

    numberOfFive = function(time){
        return parseInt(time / 5);
    };

    upperRow = function(totalLamps, numberOfLampsToBeOn, lampColor){
        let upperRow = "";
        let numberOfLampsToBeOff = totalLamps - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            upperRow += lampColor;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            upperRow += LAMP.OFF;
        }

        return upperRow;
    };
};

module.exports = ClockPresenter;