const firstContainer = require("./js/container/form-container")();

export const fn = ({ term, display }) => {
  // Put your plugin code here
  display({
    title: firstContainer.render()
  });
};
