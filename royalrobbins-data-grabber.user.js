// ==UserScript==
// @name         royalrobbins-data-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.royalrobbins.com/*
// @grant        GM_notification
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 13){ // ctrl key + enter
            let style = getInnerText('#product_addtocart_form > div.product-info-box > div.product-shop > div.sku-availability-line > div');
            let title = getInnerText('#product_addtocart_form > div.product-info-box > div.product-shop > div.product-name > h1');
            let desc = getInnerText('body > div.wrapper > div > div.main-container.col1-layout > div > div.col-main > div.product-view > div.product-features > div > div > p');
            let bullets = getInnerHTML('body > div.wrapper > div > div.main-container.col1-layout > div > div.col-main > div.product-view > div.product-features > div > div > ul');
            let image = $('div.slide-product-img-box.slick-active').attr('href');
            let mergeData = style + '\t' + title + '\t' + image + '\t' + desc + '\t' + bullets;
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
       return $(e).html().trim().replace(/\n|\t|\r/g,'');
    }else{
       return "n/a";
    }
}