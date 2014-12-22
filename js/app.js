"use strict";

var DATA;

function kimonoCallback(data) {
    DATA = data;
    var events = data.results.events;
    for (var event in events) {
        if (event === '0') {
            console.log('The first event is ' +
                events[event].title.text +
                ' on '  +
                events[event].date +
                ' at ' +
                events[event].time +
                '.\n'
            );
            console.log('=====================');
            console.log('Other events include:\n');
            console.log('=====================');
        } else if (JSON.parse(event) < 3) {
            console.log(
                events[event].title.text +
                ' on '  +
                events[event].date +
                ' at ' +
                events[event].time +
                '.\n'
            );
        }
    }
}

$.ajax({
    "url":"https://www.kimonolabs.com/api/54g2ek7c?apikey=9KeRaENgXHwPpPilIumKwosuk7wISts0&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

$(document).foundation();
kimonoCallback();