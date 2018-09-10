const key = 'ADDRESSES';

export default {
  getFromStorage() {
    const items = localStorage.getItem(key);
    if (items) return JSON.parse(items);

    return [];
  },
  saveInStorage(addresses) {
    localStorage.setItem(key, JSON.stringify(addresses));
  },
};
