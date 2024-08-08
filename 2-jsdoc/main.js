import * as data from "./data.js";

/** @import { Country, Countries } from "../types"; */

/** @type {Countries} */
const countries = new Map();

countries.set("de", data.de);
countries.set("fr", data.fr);
countries.set("es", data.es);

/**
 * @param {Countries} list
 * @returns {Country}
 */
function getMostPopulatedCountry(list) {
  const sorted = [...list.values()].sort((a, b) => b.population - a.population);
  return sorted[0];
}

/**
 * @param {Countries} list
 * @returns {Country}
 */
function getLargestCountry(list) {
  const sorted = [...list.values()].sort((a, b) => b.area - a.area);
  return sorted[0];
}

console.log("Most populated country:", getMostPopulatedCountry(countries));
console.log("Largest country:", getLargestCountry(countries));

export {};
