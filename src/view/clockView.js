let ClockView = function(){
    this.displayError = function(){
        document.getElementById("error").innerHTML = "Invalid Time";
    };
};

module.exports  = ClockView;