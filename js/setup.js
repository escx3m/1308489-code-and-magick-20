'use strict';

var WIZARD_COUNT = 4;
var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupWizard = document.querySelector('.setup-wizard');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

function openSetup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closeSetup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function onPopupEscPress(evt) {
  if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
    evt.preventDefault();
    closeSetup();
  }
}

function onIconEnterPress(evt) {
  if (evt.key === 'Enter') {
    openSetup();
  }
}

function onPopupEnterPress(evt) {
  if (evt.key === 'Enter') {
    closeSetup();
  }
}

function showSetupWindow() {
  setupOpen.addEventListener('click', openSetup);

  setupOpen.addEventListener('keydown', onIconEnterPress);

  setupClose.addEventListener('click', closeSetup);

  setupClose.addEventListener('keydown', onPopupEnterPress);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
}


function getRandomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
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

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

userDialog.classList.remove('hidden');

function onCoatClick() {
  var coatColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');

  var color = getRandomElement(WIZARD_COAT);
  wizardCoat.style = 'fill: ' + color;
  coatColorInput.value = color;
}

function hangUpCoatColorHandler() {
  wizardCoat.addEventListener('click', onCoatClick);
}

function onEyesClick() {
  var eyesColorInput = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');

  var color = getRandomElement(WIZARD_EYES);
  wizardEyes.style = 'fill: ' + color;
  eyesColorInput.value = color;
}

function hangUpEyesColorHandler() {
  wizardEyes.addEventListener('click', onEyesClick);
}

function onFireballClick() {
  var fireballColorInput = wizardFireball.querySelector('input');

  var color = getRandomElement(FIREBALL_COLOR);
  wizardFireball.style = 'background: ' + color;
  fireballColorInput.value = color;
}

function hangUpFireballColorHandler() {
  wizardFireball.addEventListener('click', onFireballClick);
}

showSetupWindow();

var wizards = getRandomWizards();
var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

hangUpCoatColorHandler();
hangUpEyesColorHandler();
hangUpFireballColorHandler();
