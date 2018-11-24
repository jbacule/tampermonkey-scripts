// ==UserScript==
// @name         purge-and-replace-hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide purge and replace area in seller central upload
// @author       Josh
// @match        https://sellercentral.amazon.com/listing/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
         if(window.location.href.indexOf('/listing/upload')>-1){
           $('#vlw-container > div.a-row > div.a-column.a-span9 > div.a-row.a-expander-container.a-expander-section-container.a-section-expander-container').hide();
           GM_notification( { title: "Reminder", text: "Purge and replace hidden!", timeout: 3000, image: "https://png.icons8.com/color/64/000000/ok.png" } );
         }
    });
})();
