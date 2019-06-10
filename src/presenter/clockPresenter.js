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
            displayBerlinTime(berlinTime);
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
        rowOfLamps += repeat(numberOfLampsToBeOn, lampColor);
        rowOfLamps += repeat(numberOfLampsToBeOff, LAMP.OFF);

        return rowOfLamps;
    };

    repeat = function(numberOfLampsToBeRepeated, lamp){
        let lamps = "";
        for(let lampPosition = 0; lampPosition < numberOfLampsToBeRepeated; lampPosition++){
            lamps += lamp;
        }
        return lamps;
    };

    secondsLamp = function(){
        return isEvenSeconds() ? LAMP.YELLOW : LAMP.OFF;
    };

    isEvenSeconds = function(){
        return digitalTime.seconds % 2 === 0;
    };

    displayBerlinTime = function(berlinTime){
        for(let row in berlinTime){
            clockView.displayLamps(row, berlinTime[row]);
        };
    };
};

module.exports = ClockPresenter;