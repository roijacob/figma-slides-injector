// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many slides on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage =  (msg: {type: string, count: number}) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-shapes') {
    // This plugin creates slides and puts the user in grid view.
    const numberOfSlides = msg.count;

    const nodes: SlideNode[] = [];
    for (let i = 0; i < numberOfSlides; i++) {
      const slide = figma.createSlide();
      nodes.push(slide);
    }

    figma.viewport.slidesView = 'grid';
    figma.currentPage.selection = nodes;
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
