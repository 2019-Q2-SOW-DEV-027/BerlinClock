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
        let upperMinutesRow = "";
        let numberOfLampsToBeOn = parseInt(digitalTime.minutes / 5);
        let numberOfLampsToBeOff = 11 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            if((lamp+1) % 3 === 0){
                upperMinutesRow += LAMP.RED;
            } else {
                upperMinutesRow += LAMP.YELLOW;
            }
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            upperMinutesRow += LAMP.OFF;
        }

        return upperMinutesRow;
    };

    upperHoursRow = function(){
        let upperHoursRow = "";
        let numberOfLampsToBeOn = parseInt(digitalTime.hours / 5);
        let numberOfLampsToBeOff = 4 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            upperHoursRow += LAMP.RED;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            upperHoursRow += LAMP.OFF;
        }

        return upperHoursRow;
    };
};

module.exports = ClockPresenter;