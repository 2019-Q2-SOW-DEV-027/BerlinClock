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
        } else {
            return "YOOO";
        }
    };
};

module.exports = ClockPresenter;