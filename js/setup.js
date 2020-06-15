'use strict';

var WIZARD_COUNT = 4;
var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');

var setupSimilar = userDialog.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var setupUserName = userDialog.querySelector('.setup-user-name');

var openSetup = document.querySelector('.setup-open');
var closeSetup = userDialog.querySelector('.setup-close');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

function getRandomElement(elements) {
  var rand = elements[Math.floor(Math.random() * elements.length)];
  return rand;
}

function getRandomWizards() {
  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push({
      name: getRandomElement(WIZARDS_NAME) + ' ' + getRandomElement(WIZARD_SECOND_NAME),
      coatColor: getRandomElement(WIZARD_COAT),
      eyesColor: getRandomElement(WIZARD_EYES),
    });
  }
  return wizards;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var wizards = getRandomWizards();
for (var i = 0; i < WIZARD_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

function onEsсPressForClose(evt) {
  if (evt.key === 'Escape' && document.activeElement !== setupUserName) {
    evt.preventDefault();
    closeSetupModal();
  }
}

function onEnterForClose(evt) {
  if (evt.key === 'Enter') {
    closeSetupModal();
  }
}

function openSetupModal() {
  userDialog.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');

  closeSetup.addEventListener('click', closeSetupModal);
  closeSetup.addEventListener('keydown', onEnterForClose);

  document.addEventListener('keydown', onEsсPressForClose);

  wizardCoat.addEventListener('click', setCoatColor);
  wizardEyes.addEventListener('click', setEyesColor);
  wizardFireball.addEventListener('click', setFireballColor);
}

function closeSetupModal() {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onEsсPressForClose);

  closeSetup.removeEventListener('click', closeSetupModal);
  closeSetup.removeEventListener('keydown', onEnterForClose);

  wizardCoat.removeEventListener('click', setCoatColor);
  wizardEyes.removeEventListener('click', setEyesColor);
  wizardFireball.removeEventListener('click', setFireballColor);
}

function setCoatColor() {
  var coatColorInput = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
  var coatColor = getRandomElement(WIZARD_COAT);

  wizardCoat.style.fill = coatColor;
  coatColorInput.value = coatColor;
}

function setEyesColor() {
  var eyesColorInput = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');
  var eyesColor = getRandomElement(WIZARD_EYES);

  wizardEyes.style.fill = eyesColor;
  eyesColorInput.value = eyesColor;
}

function setFireballColor() {
  var fireballColorInput = wizardFireball.querySelector('.setup-fireball-wrap input[name=fireball-color]');
  var fireballColor = getRandomElement(WIZARD_COLORS);

  wizardFireball.style.background = fireballColor;
  fireballColorInput.value = fireballColor;
}

openSetup.addEventListener('click', function () {
  openSetupModal();
});

openSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetupModal();
  }
});
