let ClockView = function(){
    this.displayError = function(){
        display("error", "Invalid Time");
    };

    this.displayCurrentTimeWithTitles = function(time){
        display("digitalTimeTitle",  "Digital Time: ");
        display("currentTime", currentTime(time));
        display("berlinTimeTitle", "Berlin Time: ");
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