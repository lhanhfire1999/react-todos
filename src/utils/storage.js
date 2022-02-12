import * as Constants from "../Store/constants";

const helperStorage = {
  get get() {
    return JSON.parse(localStorage.getItem(Constants?.TODOS_STORAGE_KEY)) ?? [];
  },
  save(payload) {
    const covertToJson = JSON.stringify(payload?.todos);
    localStorage.setItem(Constants?.TODOS_STORAGE_KEY, covertToJson);
    return payload;
  },
};

export default helperStorage;
