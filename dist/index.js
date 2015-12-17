'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.capitalize = capitalize;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.camelize = camelize;
exports.dasherize = dasherize;

/**
 * @param {String} value
 * @returns {String}
 */
function capitalize(value) {
    return value.replace(/(?:^|\s)\S/g, function (letter) {
        return letter.toUpperCase();
    });
}

/**
 * @param {String} value
 * @returns {String}
 */
function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * @param {String} value
 * @returns {String}
 */
function camelize(value) {
    // thanks to zeptojs
    return value.replace(/-+(.)?/g, function (match, newValue) {
        return newValue ? newValue.toUpperCase() : '';
    });
}

/**
 * @param {String} value
 * @returns {String}
 */
function dasherize(value) {
    // thanks to zeptojs
    return value.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}