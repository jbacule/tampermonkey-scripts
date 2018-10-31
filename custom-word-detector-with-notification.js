// ==UserScript==
// @name         Custom Word Detector with notification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Website word detector with notification
// @author       Josh
// @match        https://*/*
// @grant        GM_notification
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

// replace the @match for the specific url
console.log("Running custom detector...");

let findText = "demo"; //input word
let vText = new RegExp('(\\w*' + findText + '\\w*)','gi');
let counter = 0;
let pageDetails = "";
(function() {
    'use strict';
    executeWordFinder(document.body);

    if(counter>0){
        console.log("Found " + findText);
        document.title = findText + " Found!";
        let options = {
           title: "Warning",
           text: "Found " + findText + "!", //message you want
           timeout: 5000,
           image: "https://png.icons8.com/color/64/000000/high-priority.png"
        }
        GM_addStyle(".customText { background-color: yellow; color: red; font-weight: bold; }"); //style you want
        GM_notification(options,null);
        errorIcon();
        counter = 0; //set counter back to zero
    }else{
        successIcon();
        console.log("No " + findText + " found!");
    }
})();

function executeWordFinder(elementID){
    var elementText = this.document.body.innerHTML.match(vText);
    if(elementText != null){
        document.body.innerHTML = this.document.body.innerHTML.replace(vText, "<span class='customText'>" + findText + "</span>");
        counter++;
    }
}

function errorIcon(){
    var favicon_link_html = document.createElement('link');
    favicon_link_html.rel = 'icon';
    favicon_link_html.href = 'https://png.icons8.com/color/64/000000/high-priority.png';
    favicon_link_html.type = 'image/png';
    try {
        document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
    }
    catch(e) { }
}
function successIcon(){
    var favicon_link_html = document.createElement('link');
    favicon_link_html.rel = 'icon';
    favicon_link_html.href = 'https://png.icons8.com/color/64/000000/ok.png';
    favicon_link_html.type = 'image/png';
    try {
        document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
    }
    catch(e) { }
}
