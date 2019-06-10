const LAMP = require('../constants/lamp');

let ClockPresenter = function(digitalTime, clockView) {
    this.convertToBerlinTime = function(){
        if(digitalTime.isInvalid()){
            clockView.displayError();
        } else {
            clockView.displayCurrentTimeWithTitles(digitalTime);
            let berlinTime = {
                "lowerMinutesRow": lowerMinutesRow(),
                "upperMinutesRow": upperMinutesRow()
            };
            clockView.displayLamps("lowerMinutesRow", berlinTime.lowerMinutesRow);
            clockView.displayLamps("upperMinutesRow", berlinTime.upperMinutesRow);
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

    upperMinutesRow = function(){
        let upperMinutesRow = "";
        let numberOfLampsToBeOn = parseInt(digitalTime.minutes / 5);
        let numberOfLampsToBeOff = 11 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            upperMinutesRow += LAMP.YELLOW;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            upperMinutesRow += LAMP.OFF;
        }

        return upperMinutesRow;
    };
};

module.exports = ClockPresenter;