// ==UserScript==
// @name         Velcro Detector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Velcro detector in Amazon for item name, bullets and description
// @author       Josh
// @match        https://www.amazon.com/*
// @grant        GM_notification
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

let findText = "Velcro";
let vText = new RegExp('(\\w*' + findText + '\\w*)','gi');
let counter = 0;
let elementArray = ["productTitle","feature-bullets","productDescription","olpProductDetails"];
let pageDetails = "";
(function() {
    'use strict';
    for(var i=0; i<elementArray.length;i++){
        if(document.body.contains(document.getElementById(elementArray[i]))){
            executeVelcroFinder(elementArray[i]);
        }
    }

    if(counter>0){
        console.log("Found Velcro on Amazon.");
        document.title = "Velcro Found!";
        let options = {
           title: "Warning",
           text: "Found Velcro on Amazon. Please check the " + pageDetails.substr(0,pageDetails.length-2) + "!",
           timeout: 5000,
           image: "https://png.icons8.com/color/64/000000/high-priority.png"
        }
        GM_addStyle(".velcroText { background-color: yellow; color: red; font-weight: bold; }");
        GM_notification(options,null);
        errorIcon();
        //addFavicon();
        counter = 0; //set counter back to zero
    }else{
        successIcon();
        console.log("No Velcro found on Amazon!");
    }
})();

function executeVelcroFinder(elementID){
    var elementText = this.document.getElementById(elementID).innerHTML.match(vText);
    if(elementText != null){
        document.getElementById(elementID).innerHTML = this.document.getElementById(elementID).innerHTML.replace(vText, "<span class='velcroText'>Velcro</span>");
        pageDetails = pageDetails + getDetail(elementID) + ", ";
        counter++;
    }
}

function getDetail(elementID){
    if(elementID=="productTitle"){
        return "Title";
    }else if(elementID=="feature-bullets"){
        return "Bullets";
    }else if(elementID=="productDescription"){
        return "Description";
    }else{
        return "Offer Listing Details"
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

