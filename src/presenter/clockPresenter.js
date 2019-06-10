const LAMP = require('../constants/lamp');

let ClockPresenter = function(digitalTime, clockView) {
    this.convertToBerlinTime = function(){
        if(digitalTime.isInvalid()){
            clockView.displayError();
        } else {
            clockView.displayCurrentTimeWithTitles(digitalTime);
            let berlinTime = {
                "lowerMinutesRow": lowerMinutesRow()
            };
            clockView.displayLamps("lowerMinutesRow", berlinTime.lowerMinutesRow);
        }
    };

    lowerMinutesRow = function(){
        let lowerMinutesRow = "";
        let numberOfLampsToBeOn = digitalTime.minutes % 5;
        let numberOfLampsToBeOff = 4 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            lowerMinutesRow += LAMP.YELLOW;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            lowerMinutesRow += LAMP.OFF;
        }

        return lowerMinutesRow;
    };
};

module.exports = ClockPresenter;