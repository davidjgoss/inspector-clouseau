# Inspector Clouseau

A tiny Chrome DevTools extension for inspecting Dojo (i.e. Dijit) widgets.

<http://davidjgoss.github.io/inspector-clouseau/>

## Installation

From the Chrome Web Store:  
<https://chrome.google.com/webstore/detail/inspector-clouseau/odlkicpeejpajcnhjhjcjplmegkehjae>

## Usage

1. Inspect an element in DevTools
2. If it's the root element of a Dijit widget, or a child element of one, it a new tab "Widget" tab will be available

![](//davidjgoss.github.io/inspector-clouseau/images/screenshot.png)

## Limitations

- Any version of Dojo 1.x should be fine
- Framsets are supported (ugh), but the frames have to be same-origin (see #2)
