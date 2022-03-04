"use strict"


    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    var tempo = 1000;
    var cron;

    function start(){
        cron = setInterval(() => { timer(); }, tempo);

    }
    
    function stop(){
        clearInterval(cron);
    }

    function reset(){
        clearInterval(cron);
        seconds = 0;
        minutes = 0;
        hours = 0;

        document.getElementById('counter').innerText = '00:00:00'
    }

    function timer(){

        seconds ++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }

        var form = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds);
        document.getElementById('counter').innerText = form;

    }