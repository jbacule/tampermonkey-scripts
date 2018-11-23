// ==UserScript==
// @name         amazon-navigator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 37){ // ctrl key + enter
            document.querySelector('#olpProductImage > a').click();
        }else if(e.ctrlKey && e.keyCode == 39){ // ctrl key + '+'
            let asin = window.location.href.substring(window.location.href.indexOf('/B0')+1, window.location.href.indexOf('/B0')+11);
            window.location.href = 'https://www.amazon.com/dp/offer-listing/' + asin;
        }
    }
})();
