// ==UserScript==
// @name         amazon-listing-navigator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.com/gp/offer-listing/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            document.querySelector('#olpProductImage > a').click();
        }
    }
})();