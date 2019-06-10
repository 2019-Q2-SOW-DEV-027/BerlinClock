let ClockPresenter = function(digitalTime, clockView) {

    this.convertToBerlinTime = function(){
        if(digitalTime.isInvalid()){
            clockView.displayError();
        } else {
            clockView.displayCurrentTimeWithTitles(digitalTime);
            let berlinTime = {
                "lowerMinutesRow": "OOOO"
            };
            clockView.displayLamps("lowerMinutesRow", berlinTime.lowerMinutesRow);
        }
    };
};

module.exports = ClockPresenter;