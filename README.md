# Berlin Clock

This project converts current digital time into textual representation of berlin time

## About this Kata

This is performed using **Test Driven Development** (TDD).

## Rules

The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series of illuminated coloured blocks, as given below.

![Image of Berlin Clock](https://raw.githubusercontent.com/stephane-genicot/katas/master/images/Kata_BerlinClock.png)

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.

Eg of textual representation:- Converts 12:43:09 as below

O (Seconds Lamp)<br> 
RROO (Upper Hours Row)<br>
RROO (Lower Hours Row)<br>
YYRYYRYYOOO (Upper Minutes Row)<br>
YYYO (Lower Minutes Row)

where 
“O” - Lamp off
“R” - Red lamp
“Y” - Yellow lamp

The complete description can be found here : http://agilekatas.co.uk/katas/BerlinClock-Kata

## Getting started

### Install Dependencies
 
 `npm install`

### Run the app and launch it in browser  
 
 `npm start`
 
### Run the test  
 
 `npm test`
 
### Build the app
 
 `npm build`