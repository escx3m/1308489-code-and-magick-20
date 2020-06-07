'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardCount = 4;
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomElement(elements) {
  var rand = Math.floor(Math.random() * wizardsNames.length);
  return elements[rand];
}

function getRandomWizards() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: getRandomElement(wizardsNames) + ' ' + getRandomElement(wizardsSecondName),
      coatColor: getRandomElement(wizardCoat),
      eyesColor: getRandomElement(wizardEyes),
    });
  }
  return wizards;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = getRandomWizards();
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardCount; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
