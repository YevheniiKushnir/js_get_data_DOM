'use strict';

const population = [...document.querySelectorAll('span.population')].map(
  (el) => +el.textContent.replace(/,/g, ''),
);

const total = population.reduce((a, b) => a + b);
const average = Math.floor(total / population.length);

const replaceCalculateIt = (classSelector, value) => {
  document.querySelector(classSelector).textContent =
    value.toLocaleString('en-US');
};

replaceCalculateIt('.average-population', average);
replaceCalculateIt('.total-population', total);
