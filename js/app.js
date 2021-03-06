"use strict";

var DATA;

$.ajax({
    "url":"https://www.kimonolabs.com/api/54g2ek7c?apikey=9KeRaENgXHwPpPilIumKwosuk7wISts0",
    "crossDomain":true,
    "dataType":"jsonp",
    "success" : function(data) {
        DATA = data;
        var events = data.results.events;
        for (var event in events) {
            if (event === '0') {
                $('h2').append(
                    events[event].title.text +
                    ' on '  +
                    events[event].date +
                    ' at ' +
                    events[event].time +
                    '.\n'
                );
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
        $('.loader').hide();
    }
});

$(document).foundation();