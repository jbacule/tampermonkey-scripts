// ==UserScript==
// @name         amazon-data-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.com/dp/*
// @grant        GM_notification
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            let title = document.querySelector('#productTitle').innerText;
            let image = document.querySelector('#landingImage').src;
            let desc = getInnerText('#productDescription > p');
            let bullets = getInnerHTML('#feature-bullets > ul');
            bullets = bullets.replace(/\r|\t|\n/g,'')
            desc = desc.replace(/\r|\t|\n/g,'')
            let mergeData = title + '\t' + image + '\t' + desc.trim() + '\t' + bullets;
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

function getInnerText(e){
    if($(e).length){
       return $(e).text().trim();
    }else{
       return "n/a";
    }
}
function getInnerHTML(e){
    if($(e).length){
       return $(e).html();
    }else{
       return "n/a";
    }
}