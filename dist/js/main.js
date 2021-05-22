/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/calculate-button.js
var calculateButton = function () {
  var _instance = {};

  _instance.init = function () {
    var calcBtn = document.querySelectorAll('[js-calculate-btn]');
    calcBtn.forEach(function (el) {
      el.addEventListener('click', function (e) {
        _instance.toggleClass(calcBtn, 'btn--light', 'btn--dark');

        e.target.classList.add('btn--dark');
        e.target.classList.remove('btn--light');
        var calculateVal = document.querySelector('[js-calculate-val]');

        if (e.target.dataset.calculate === 'month') {
          calculateVal.textContent = calculateVal.dataset.value;
        }

        if (e.target.dataset.calculate === 'year') {
          calculateVal.textContent = calculateVal.dataset.value * 12;
        }

        calculateVal.textContent = calculateVal.textContent.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      });
    });
  };

  _instance.toggleClass = function ($el, $addClassName, $removeClassName) {
    $el.forEach(function (el) {
      el.classList.add($addClassName);
      el.classList.remove($removeClassName);
    });
  };

  return _instance;
}();
;// CONCATENATED MODULE: ./src/js/activate-today.js
var activateToday = function () {
  var _instance = {};

  _instance.init = function () {
    var activateTodaySection = document.querySelector('.activate-today');

    var footerHeight = _instance.initFooterHeight(activateTodaySection.querySelectorAll('.card--footer'));

    activateTodaySection.querySelectorAll('.card').forEach(function (el) {
      var cardFooter = el.querySelector('.card--footer');

      if (el.classList.contains('card__no-bg')) {
        el.style.paddingBottom = "".concat(footerHeight, "px");
      }

      if (cardFooter) {
        cardFooter.style.height = "".concat(footerHeight, "px");
      }
    });
  };

  _instance.initFooterHeight = function ($el) {
    var footerHeight = 0;
    $el.forEach(function (el) {
      if (el.clientHeight > footerHeight) {
        footerHeight = el.clientHeight;
      }
    });
    return footerHeight;
  };

  return _instance;
}();
;// CONCATENATED MODULE: ./src/js/benefits.js
var benefits = function () {
  var cards = document.querySelectorAll('.benefits-section .card');
  var _instance = {};

  _instance.init = function () {
    cards.forEach(function (el) {
      el.style.height = "".concat(_instance.initHeight(cards), "px");
    });
  };

  _instance.initHeight = function ($el) {
    var height = 0;
    $el.forEach(function (el) {
      if (el.clientHeight > height) {
        height = el.clientHeight;
      }
    });
    return height;
  };

  _instance.resize = function () {
    cards.forEach(function (el) {
      el.style.height = 'auto';
    });

    _instance.init();
  };

  return _instance;
}();
;// CONCATENATED MODULE: ./src/app.js




window.addEventListener('load', function () {
  calculateButton.init();
  activateToday.init();
  benefits.init();
});
window.addEventListener('resize', function () {
  benefits.resize();
});
/******/ })()
;