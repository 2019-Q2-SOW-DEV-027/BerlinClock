let DigitalTime = function(){
    let currentDate = new Date();
    this.minutes = currentDate.getMinutes();

    this.isInvalid = function(){
        return this.minutes === undefined || this.minutes === null || this.minutes === "";
    };
};

module.exports  = DigitalTime;