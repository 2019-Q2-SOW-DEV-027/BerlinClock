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

    lowerHoursRow = function(){
        let lowerHoursRow = "";
        let numberOfLampsToBeOn = digitalTime.hours % 5;
        let numberOfLampsToBeOff = 4 - numberOfLampsToBeOn;
        for(let lamp = 0; lamp < numberOfLampsToBeOn; lamp++){
            lowerHoursRow += LAMP.RED;
        }
        for(let lamp = 0; lamp < numberOfLampsToBeOff; lamp++){
            lowerHoursRow += LAMP.OFF;
        }

        return lowerHoursRow;
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