"use strict";






/* ==========================================================================
 $_ANGULAR DEFAULTS ---------------------------------------------------------
 ========================================================================== */

var app = angular.module('wtfisupkc', []);





/* ==========================================================================
 $_MODEL POPULATION ---------------------------------------------------------
 ========================================================================== */

// Set App Data Var
var DATA = {};

// Pull Data From Scraper
$.ajax({
    "url":"https://www.kimonolabs.com/api/54g2ek7c?apikey=9KeRaENgXHwPpPilIumKwosuk7wISts0",
    "crossDomain":true,
    "dataType":"jsonp",
    "success" : function(data) {
        console.log('Successfully executed GET...');
        DATA.sprintCenter = data.results.events;
        var events = data.results.events;
        console.log('Data saved to global variable...');
        $('h2').append(
            events[0].title.text +
            ' on '  +
            events[0].date +
            ' at ' +
            events[0].time +
            '.\n'
        );
        $('.loader').hide();
        console.log('Filtered and displayed data.');
    }
});





/* ==========================================================================
 $_APP INITS ----------------------------------------------------------------
 ========================================================================== */

$(document).foundation();