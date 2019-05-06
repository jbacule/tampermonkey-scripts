// ==UserScript==
// @name         purge-and-replace-hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide purge and replace area in seller central upload
// @author       Josh
// @match        https://sellercentral.amazon.com/*
// @grant        GM_notification
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        var uploadHeader = $('span.a-color-error').text();
        if( uploadHeader == 'Purge and Replace Your Inventory'){
           $('#vlw-container > div.a-row > div.a-column.a-span9 > div.a-row.a-expander-container.a-expander-section-container.a-section-expander-container').hide();
           GM_notification( { title: "Reminder", text: "Purge and replace was hide!", timeout: 3000, image: "https://img.icons8.com/color/64/000000/appointment-reminders.png" } );
         }
    });
})();
