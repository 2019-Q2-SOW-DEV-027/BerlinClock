const MESSAGE = require('../constants/messages');

let ClockView = function(){
    this.displayError = function(){
        display("error", MESSAGE.ERROR);
    };

    this.displayCurrentTimeWithTitles = function(time){
        display("digitalTimeTitle", MESSAGE.DIGITAL_TIME);
        display("currentTime", currentTime(time));
        display("berlinTimeTitle", MESSAGE.BERLIN_TIME);
    };

    this.displayLamps = function(row, lamps){
        display(row, lamps);
    };

    display = function(element, value){
        document.getElementById(element).innerHTML = value;
    };

    currentTime = function(time){
        return time.hours + ":" + time.minutes + ":" + time.seconds;
    };
};

module.exports  = ClockView;