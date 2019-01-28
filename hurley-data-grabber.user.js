// ==UserScript==
// @name         hurley-data-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Josh
// @match        https://www.nike.com/t/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            let title = document.querySelector('#RightRail > div > div:nth-child(1) > div > div.ncss-base.pr12-sm > h2').innerText;
            let title1 = document.querySelector('#pdp_product_title').innerText;
            let image = document.querySelector('#pdp-6-up > button:nth-child(1) > div > picture:nth-child(3) > img').src;
            let color = document.querySelector('li.description-preview__color-description.ncss-li').innerText;
            let style = document.querySelector('li.description-preview__style-color.ncss-li').innerText;
            let desc = document.querySelector('#RightRail > div > div.pt4-sm.prl6-sm.prl0-lg > div.description-preview.fs16-sm.css-qnptk2 > p').innerText;
            let bullets = document.querySelector('div.pi-pdpmainbody').innerHTML;
            bullets = bullets.replace(/\r|\t|\n/g,'')
            let mergeData = style + '\t' + title + '\t' + title1 + '\t' + color + '\t' + image + '\t' + desc + '\t' + bullets;
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