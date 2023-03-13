export function getLocalStorage(key) {
  try {
    return JSON.pars(window.localStorage.getItem(key));
  } catch (err) {
    return undefined;
  }
}
// more robust way to set items from to localStorage
export function setLocalStorage(key, value) {
  // if we are in the browser
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
