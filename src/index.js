const ClockPresenter = require("./presenter/clockPresenter");
const ClockView = require('./view/clockView');
const DigitalTime = require('./model/digitalTime');

document.getElementById("convert").onclick = function () {
    let digitalTime = new DigitalTime();
    let clockView = new ClockView();
    let clockPresenter = new ClockPresenter(digitalTime, clockView);

    clockPresenter.convertToBerlinTime();
};