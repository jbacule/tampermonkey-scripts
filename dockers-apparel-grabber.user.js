// ==UserScript==
// @name         dockers-apparel-grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Josh
// @match        https://www.dockers.com/US/en_US/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.keyCode == 96){
            let title = document.querySelector('div.product-details.page-title > h1').innerText;
            let color = document.querySelector('div.variant-selector.product-swatches > div > div.variant-name > span.variant-selected.active-color').innerText;
            let image1 = checkImgElement('div:nth-child(1) > a > div > picture > img');
            let image2 = checkImgElement('div:nth-child(2) > a > div > picture > img');
            let image3 = checkImgElement('div:nth-child(3) > a > div > picture > img');
            let image4 = checkImgElement('div:nth-child(4) > a > div > picture > img');
            let desc = document.querySelector('#pdpPageTabsRoot > div > div:nth-child(1) > div > div.contentContainer > div:nth-child(1)').innerText;
            let style = document.querySelector('#pdpPageTabsRoot > div > div:nth-child(1) > div > div.contentContainer > div.style-product-code.hidden-md.hidden-lg').innerText;
            let bullets = document.querySelector('#pdpPageTabsRoot > div > div:nth-child(2) > div:nth-child(1) > div.pdp-spec-feature-list.contentContainer > ul').innerHTML;
            bullets = bullets.replace(/\r|\t|\n/g,'')
            let mergeData = style.trim() + '\t' + title.trim() + '\t' + color.trim() + '\t' + image1 + '\t' + image2 + '\t' + image3 + '\t' + image4 + '\t' + desc.trim() + '\t' + bullets;
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

function checkImgElement(e){
  if(document.querySelector(e)!== null){
      return document.querySelector(e).src;
  }else{
     return "n/a";
  }
}