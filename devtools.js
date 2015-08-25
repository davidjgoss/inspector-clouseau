"use strict";
chrome.devtools.panels.elements.createSidebarPane("Widget", function(sidebar) {
    let dijitQuery = `(function() {
        if ("dijit" in window && "byNode" in dijit) {
            return dijit.byNode($0) || dijit.getEnclosingWidget($0) || {result: "No widget detected"};
        }
        return {result: "Dijit not available"};
    }());`;

    function updateWidgetPanel() {
        sidebar.setExpression(dijitQuery);
    };

    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateWidgetPanel);
    updateWidgetPanel();
});
