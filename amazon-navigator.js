(function() {
    'use strict';
    document.body.onkeyup = function(e){
        if(e.ctrlKey && e.keyCode == 37){ // ctrl key + enter
            document.querySelector('#olpProductImage > a').click();
        }else if(e.ctrlKey && e.keyCode == 39){ // ctrl key + '+'
            let asin = window.location.href.substring(window.location.href.indexOf('/B0')+1, window.location.href.indexOf('/B0')+11);
            window.location.href = 'https://www.amazon.com/dp/offer-listing/' + asin;
        }
    }
})();
