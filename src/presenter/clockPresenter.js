const LAMP = require('../constants/lamp');
const NUMBER = require('../constants/numbers');
const GROUP_OF = require('../constants/groupOfLamps');

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
        return rowOfLamps(NUMBER.FOUR, moduloFive(digitalTime.minutes), LAMP.YELLOW);
    };

    upperMinutesRow = function(){
        let upperMinutesRow = rowOfLamps(NUMBER.ELEVEN, numberOfFive(digitalTime.minutes), LAMP.YELLOW);
        upperMinutesRow = changeEveryThirdLampToRed(upperMinutesRow);
        return upperMinutesRow;
    };

    lowerHoursRow = function(){
        return rowOfLamps(NUMBER.FOUR, moduloFive(digitalTime.hours), LAMP.RED);
    };

    upperHoursRow = function(){
        return rowOfLamps(NUMBER.FOUR, numberOfFive(digitalTime.hours), LAMP.RED);
    };

    moduloFive = function(time){
        return time % NUMBER.FIVE;
    };

    numberOfFive = function(time){
        return parseInt(time / NUMBER.FIVE);
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
        for(let lampPosition = NUMBER.ZERO; lampPosition < numberOfLampsToBeRepeated; lampPosition++){
            lamps += lamp;
        }
        return lamps;
    };

    changeEveryThirdLampToRed = function(rowOfLamps){
        return rowOfLamps.replace(GROUP_OF.EVERY_THREE_YELLOW_LAMPS, GROUP_OF.THIRD_LAMP_HAS_RED);
    };

    secondsLamp = function(){
        return isEvenSeconds() ? LAMP.YELLOW : LAMP.OFF;
    };

    isEvenSeconds = function(){
        return digitalTime.seconds % NUMBER.TWO === NUMBER.ZERO;
    };

    displayBerlinTime = function(berlinTime){
        for(let row in berlinTime){
            clockView.displayLamps(row, berlinTime[row]);
        };
    };
};

module.exports = ClockPresenter;