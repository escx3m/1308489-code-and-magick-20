'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var DISTANCE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomColor() {
  return 'hsla(240, 100%, 50%,' + Math.random() + ')';
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    var barX = CLOUD_X + DISTANCE + (DISTANCE + BAR_WIDTH) * i;
    var barY = CLOUD_HEIGHT - (CLOUD_Y + GAP * 2) - barHeight;
    ctx.fillRect(barX, barY + GAP, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), barX, CLOUD_HEIGHT - (CLOUD_Y + GAP * 2) - barHeight - GAP);
    var playerTitleY = CLOUD_Y + DISTANCE + BAR_WIDTH + BAR_HEIGHT + GAP;
    ctx.fillText(players[i], barX, playerTitleY);
  }
};
