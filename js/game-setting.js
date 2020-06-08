'use strict';
window.fireballSize = 22;
window.wizardWidth = 70;
window.wizardSpeed = 3;

window.getFireballSpeed = function (movingLeft) {
  return movingLeft ? 5 : 2;
};

window.getWizardHeight = function (width) {
  return 1.337 * width;
};

window.getWizardX = function (width) {
  return (width - window.wizardWidth) / 2;
};

window.getWizardY = function (heigth) {
  return heigth / 3;
};
