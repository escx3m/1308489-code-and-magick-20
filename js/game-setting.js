window.fireballSize = 22;
window.wizardSpeed = 3;
window.wizardWidth = 70;

window.getFireballSpeed = function (isWindFromLeft) {
  if (isWindFromLeft) {
    return 5;
  }
  return 2;
};

window.getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

window.getWizardX = function (gameFieldWidth) {
  return (gameFieldWidth - wizardWidth) / 2;
};

window.getWizardY = function (gameFieldHeigth) {
  return gameFieldHeigth / 3;
};
