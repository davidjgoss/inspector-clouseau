"use strict";
chrome.devtools.panels.elements.createSidebarPane("Widget", function(sidebar) {
    let dijitQuery = `(function() {
        "use strict";

        function tryDijit(win) {
            if ("dijit" in win && "byNode" in win.dijit) {
                return win.dijit.byNode($0) || win.dijit.getEnclosingWidget($0) || false;
            }
            return false;
        }

        function scanWindow(win) {
            let result;

            if (win.frames.length) {
                for (let i = 0; i < win.frames.length; i++) {
                    result = tryDijit(win.frames[i]);
                    if (result) {
                        return result;
                    }
                }g
            } else {
                result = tryDijit(win);
            }

            return result || "No widget found or Dijit not present";
        }

        return scanWindow(window);
    }());`;

    function updateWidgetPanel() {
        sidebar.setExpression(dijitQuery);
    }

    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateWidgetPanel);
    updateWidgetPanel();
});
