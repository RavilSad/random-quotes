function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('key must be a string');
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return localStorage.getItem(key);
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export { localStorageSetItem, localStorageGetItem, localStorageRemoveItem };
