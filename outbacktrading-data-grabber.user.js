// ==UserScript==
// @name         outbacktrading-data-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.outbacktrading.com/*
// @grant        GM_notification
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            let title = getInnerText('#ejs-main-section > div.row-fluid > div > div:nth-child(1) > div > div:nth-child(2) > div.span8 > div:nth-child(1) > h1');
            let desc = getInnerText('#ejs-main-section > div.row-fluid > div > div:nth-child(1) > div > div:nth-child(2) > div.span8 > div:nth-child(1) > p.product-description');
            let color = getInnerText('#Color > option:nth-child(1)');
            let bullets = getInnerHTML('div#tab-2');
            let image1 = getIMG('#product-detail-gallery-thumbs > div > ul > li:nth-child(1) > a > img');
            let image2 = getIMG('#product-detail-gallery-thumbs > div > ul > li:nth-child(2) > a > img');
            let mergeData = title + '\t' + color + '\t' + image1 + '\t' + image2 + '\t' + desc + '\t' + bullets.replace(/• /g,'');
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

function getIMG(e){
    if($(e).length){
       return "https://www.outbacktrading.com/" + $(e).attr('src').replace('-T.jpg','-B.jpg');
    }else{
       return "n/a";
    }
}
function getInnerText(e){
    if($(e).length){
       return $(e).text().trim();
    }else{
       return "n/a";
    }
}
function getInnerHTML(e){
    if($(e).length){
       return $(e).html().trim().replace(/\n|\t|\r/g,'');
    }else{
       return "n/a";
    }
}