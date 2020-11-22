var d = new Date();


var year = d.getFullYear().toString();
if(parseInt(year) < 10)
    year = '0' + year;

var month = (d.getMonth() + 1).toString();
if(parseInt(month) < 10)
    month = '0' + month;

var day = d.getDate().toString();
if(parseInt(day) < 10)
    day = '0' + day;

var hours = d.getHours().toString();
if(parseInt(hours) < 10)
    hours = '0' + hours;

var min = d.getMinutes().toString();
if(parseInt(min) < 10)
    min = '0' + min;

var sec = d.getSeconds().toString();
if(parseInt(sec) < 10)
    sec = '0' + sec;


var currentTime = year + month + day + hours + min + sec;