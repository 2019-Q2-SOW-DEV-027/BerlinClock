let ClockView = function(){
    this.displayError = function(){
        document.getElementById("error").innerHTML = "Invalid Time";
    };

    this.displayCurrentTimeWithTitles = function(time){
        document.getElementById("digitalTimeTitle").innerHTML = "Digital Time: ";
        document.getElementById("currentTime").innerHTML = time.minutes;
        document.getElementById("berlinTimeTitle").innerHTML = "Berlin Time: ";
    };

    this.displayLamps = function(row, lamps){
        document.getElementById(row).innerHTML = lamps;
    };
};

module.exports  = ClockView;