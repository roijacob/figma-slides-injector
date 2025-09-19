// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many slides on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = async msg => {
  if (msg.type === 'inject-code') {
    // The layer name of the code block must be "Code block"
    const codeBlock = figma.currentPage.findOne(node => node.name === "Code block") as CodeBlockNode;
    
    await figma.loadFontAsync({ family: "Source Code Pro", style: "Medium" }); 
    codeBlock.code = msg.code;
    
    console.log(codeBlock);
    figma.closePlugin();    
  }
};
