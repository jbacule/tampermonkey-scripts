// ==UserScript==
// @name         twistedx-data-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Josh
// @match        https://twistedx.com/product/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            let title = document.querySelector('div.product-info.summary.col-fit.col.entry-summary.product-summary > h1').innerText;
            let title1 = document.querySelector('div.product-short-description > p').innerText;
            let image = document.querySelector('div.product-gallery.col.large-6 > div > figure > div > div > div > a > img').src;
            let desc = document.querySelector('div.product-page-accordian > div > div:nth-child(1) > div > p').innerText;
            let bullets = document.querySelector('div.product-page-accordian > div > div:nth-child(2) > div > table').innerHTML;
            bullets = bullets.replace(/\r|\t|\n/g,'')
            let mergeData = title + '\t' + title1 + '\t' + image + '\t' + desc + '\t' + bullets;
            const els = document.createElement('textarea');
            els.value = mergeData;
            document.body.appendChild(els);
            els.select();
            document.execCommand('copy');
            document.body.removeChild(els);

            GM_notification( { title: "Info", text: "Copied Successfully!", timeout: 2000, image: "https://img.icons8.com/color/50/000000/paste.png" } );
        }
    }
})();