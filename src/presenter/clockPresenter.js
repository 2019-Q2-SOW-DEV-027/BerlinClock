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
        if(digitalTime.minutes % 5 === 0){
            return "OOOO";
        } else if(digitalTime.minutes % 5 === 1){
            return "YOOO";
        } else if(digitalTime.minutes % 5 === 2){
            return "YYOO";
        } else {
            return "YYYO";
        }
    };
};

module.exports = ClockPresenter;