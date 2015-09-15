"use strict";
(function() {
    if (chrome && chrome.webstore) {
        document.getElementById("js-cta").addEventListener("click", function(e) {
            e.preventDefault();
            chrome.webstore.install();
        });
    }
}());