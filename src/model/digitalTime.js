let DigitalTime = function(){
    let currentDate = new Date();
    this.minutes = currentDate.getMinutes();
    this.hours = currentDate.getHours();
    this.seconds = currentDate.getSeconds();

    this.isInvalid = function(){
        return isEmptyOrUndefined(this.minutes) || isEmptyOrUndefined(this.hours) || isEmptyOrUndefined(this.seconds);
    };

    isEmptyOrUndefined = function(time){
        return time === undefined || time === null || time === "";
    };
};

module.exports  = DigitalTime;