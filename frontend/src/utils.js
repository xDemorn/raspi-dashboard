/**
 * Gets the first element that matches the specified CSS selector.
 * @param {string} selector 
 * @param {ParentNode} scope 
 * @returns {HTMLElement}
 */
export function $(selector, scope = document) {
	return scope.querySelector(selector);
}

/**
 * Gets all elements that match the specified CSS selector.
 * @param {string} selector 
 * @param {ParentNode} scope 
 * @returns {HTMLElement[]}
 */
export function $$(selector, scope = document) {
	return Array.from(scope.querySelectorAll(selector));
}