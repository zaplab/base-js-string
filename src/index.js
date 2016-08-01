
/**
 * @param {String} value
 * @returns {String}
 */
export function capitalize(value) {
    return value.replace(/(?:^|\s)\S/g, (letter) => letter.toUpperCase());
}

/**
 * @param {String} value
 * @returns {String}
 */
export function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * @param {String} value
 * @returns {String}
 */
export function camelize(value) {
    // thanks to zeptojs
    return value.replace(/-+(.)?/g, (match, newValue) => {
        return newValue ? newValue.toUpperCase() : '';
    });
}

/**
 * @param {String} value
 * @returns {String}
 */
export function dasherize(value) {
    // thanks to zeptojs
    return value.replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/_/g, '-')
        .toLowerCase();
}

/**
 * @param {String} value
 * @param {String} [separator] allows '-' or '_'
 * @returns {String}
 */
export function slugify(value, separator = '-') {
    return value.toString()
        .trim()
        .toLowerCase()
        .replace(/[^\w\s_-]/g, '')
        .replace(/[\s]+/g, separator)
        .replace(/[_-]{2,}/g, separator)
        .replace(/^_+|_+$/g, '')
        .replace(/^-+|-+$/g, '');
}
